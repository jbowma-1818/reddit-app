// Spotify.jsx
const clientId = 'fc30527be89341babea529d8aae5da19';
const redirectUri = 'http://127.0.0.1:5173';

const Spotify = {
  // Call this before any API call
  async ensureAuth() {
    // If we already have a token, use it
    const existing = localStorage.getItem('access_token');
    const expiresAt = Number(localStorage.getItem('access_expires_at') || 0);
    const now = Date.now();

    if (existing && now < expiresAt) {
      return existing;
    }

    // If we just got redirected back with a code, exchange it
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get('code');
    if (code) {
      await this.exchangeCodeForToken(code);
      // Clean the URL (remove ?code=...)
      window.history.replaceState({}, document.title, redirectUri);
      return localStorage.getItem('access_token');
    }

    // Otherwise, start the PKCE flow
    await this.beginPkceAuth();
    // Function will redirect; execution stops here.
    return null;
  },

  async beginPkceAuth() {
    const codeVerifier = Spotify._randomString(64);
    localStorage.setItem('code_verifier', codeVerifier);

    const codeChallenge = await Spotify._codeChallengeFromVerifier(codeVerifier);

    const authUrl = new URL('https://accounts.spotify.com/authorize');
    authUrl.search = new URLSearchParams({
      response_type: 'code',
      client_id: clientId,
      code_challenge_method: 'S256',
      code_challenge: codeChallenge,
      redirect_uri: redirectUri,
      scope: [
        'user-read-private',
        'user-read-email',
        'playlist-modify-public'
      ].join(' ')
    }).toString();

    window.location.href = authUrl.toString();
  },

  async exchangeCodeForToken(code) {
    const codeVerifier = localStorage.getItem('code_verifier');

    const body = new URLSearchParams({
      client_id: clientId,
      grant_type: 'authorization_code',
      code,
      redirect_uri: redirectUri,
      code_verifier: codeVerifier
    });

    const res = await fetch('https://accounts.spotify.com/api/token', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body
    });

    const json = await res.json();
    if (!res.ok) {
      throw new Error(json.error_description || 'Token exchange failed');
    }

    const { access_token, expires_in } = json;
    localStorage.setItem('access_token', access_token);
    localStorage.setItem('access_expires_at', String(Date.now() + (expires_in - 30) * 1000)); // small safety buffer
  },

  async search(term) {
    const token = await this.ensureAuth();
    if (!token) return [];

    const res = await fetch(
      `https://api.spotify.com/v1/search?type=track&q=${encodeURIComponent(term)}`,
      { headers: { Authorization: `Bearer ${token}` } }
    );
    const json = await res.json();

    if (!json.tracks || !Array.isArray(json.tracks.items)) return [];
    return json.tracks.items.map(track => ({
      id: track.id,
      name: track.name,
      artist: track.artists?.[0]?.name ?? 'Unknown',
      album: track.album?.name ?? 'Unknown',
      uri: track.uri
    }));
  },

  async getProfile() {
    const token = await this.ensureAuth();
    if (!token) return null;

    const res = await fetch('https://api.spotify.com/v1/me', {
      headers: { Authorization: `Bearer ${token}` }
    });
    return res.json();
  },

  // ---- helpers ----
  _randomString(len) {
    const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const values = crypto.getRandomValues(new Uint8Array(len));
    return Array.from(values, v => possible[v % possible.length]).join('');
  },

  async _codeChallengeFromVerifier(v) {
    const data = new TextEncoder().encode(v);
    const digest = await crypto.subtle.digest('SHA-256', data);
    return btoa(String.fromCharCode(...new Uint8Array(digest)))
      .replace(/=/g, '').replace(/\+/g, '-').replace(/\//g, '_');
  }
};

export default Spotify;
