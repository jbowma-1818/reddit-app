import { useState } from 'react'
import './App.css'
import SearchBar from './components/SearchBar/SearchBar';
import SearchResults from './components/SearchResults/SearchResults';
import Playlist from './components/Playlist/Playlist';

function App() {
  const [search, setSearch] = useState('');

  return (
    <>
      <SearchBar />
      <div id='mainContiner'>
        <div id='saveContainer'>
          <SearchResults value={search} />
          <Playlist />
        </div>
      </div>
    </>
  )
}

export default App
