import React from 'react';
import './App.css';
import Post from './components/Post';
import AllPosts from './features/allPosts/AllPosts';

function App() {
  return (
    <div className="App">
      <h1>Reddit App</h1>
      <AllPosts />
    </div>
  );
}

export default App;
