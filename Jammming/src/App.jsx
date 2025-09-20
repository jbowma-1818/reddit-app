import { useState } from 'react'
import './App.css'
import SearchBar from './components/SearchBar/SearchBar';
import SearchResults from './components/SearchResults/SearchResults';
import Playlist from './components/Playlist/Playlist';

function App() {
  const [search, setSearch] = useState('');

  return (
    <>
      <div id='searchContainer'>
        <SearchBar />
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
