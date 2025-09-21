import { useState } from 'react'
import './App.css'
import SearchBar from './components/SearchBar/SearchBar';
import SearchResults from './components/SearchResults/SearchResults';
import Playlist from './components/Playlist/Playlist';
import Spotify from './util/spotify'; 

function App() {
  const [search, setSearch] = useState('');
  //const [playlistName, setPlaylistName] = useState('');
  //const [tracks, setTracks] = useState([]);

  const searchHandler = (event) => {
    setSearch(event.target.value);
  };

  return (
    <>
      <div id='searchContainer'>
        <SearchBar onSearch={searchHandler} />
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
