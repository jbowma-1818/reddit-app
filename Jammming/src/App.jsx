import { useState } from 'react'
import './App.css'
import SearchBar from './components/SearchBar/SearchBar';
import SearchResults from './components/SearchResults/SearchResults';
import Playlist from './components/Playlist/Playlist';
import Spotify from './util/spotify'; 

function App() {
  const [searchResults, setSearchResults] = useState([]);
  //const [playlistName, setPlaylistName] = useState('');
  //const [tracks, setTracks] = useState([]);

  const handleSearchResults = async (term) => {
    try {
      await Spotify.ensureAuth();

      const result = await Spotify.search(term);
      setSearchResults(result);
    } catch(err) {
      console.log('Search failed:', err);
      setSearchResults([]);
    }
  };

  return (
    <>
      <div id='searchContainer'>
        <SearchBar onSearch={handleSearchResults} />
      </div>
      <div id='mainContiner'>
        <div id='resultContainer'>
          <SearchResults />
        </div>
        <div id='saveContainer'>
          <Playlist />
        </div>
      </div>
    </>
  )
}

export default App
