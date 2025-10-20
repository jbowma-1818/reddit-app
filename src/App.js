import React from 'react';
import './App.css';
import Banner from './components/Banner';
import AllPosts from './features/allPosts/AllPosts';

function App() {
  return (
    <div className="App">
      <Banner />
      <AllPosts />
    </div>
  );
}

export default App;
