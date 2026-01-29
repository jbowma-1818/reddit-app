import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';

import Banner from './components/Banner';
import AllPosts from './features/allPosts/AllPosts';
import CommentsPage from './features/comments/CommentsPage';

function App() {
  return (
    <div className="App">
      <Banner />
      <Routes>
        <Route path="/" element={<AllPosts />} />
        <Route path="/comments/:postId" element={<CommentsPage />} />
      </Routes>
    </div>
  );
}

export default App;
