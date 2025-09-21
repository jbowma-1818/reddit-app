import { useState } from "react";

function Playlist() {
    const [playlist, setPlaylist] = useState([]);

    return (
        <div id='playList'>
            <h2>Playlist</h2>
        </div>
    );
}

export default Playlist;