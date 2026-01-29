import { configureStore } from '@reduxjs/toolkit';
import allPostsReducer from '../features/allPosts/allPostsSlice';
import searchBarReducer from '../features/searchBar/searchBarSlice'
import commentsReducer from '../features/comments/commentsSlice';

export const store = configureStore({
  reducer: {
    allPosts: allPostsReducer,
    searchBar: searchBarReducer,
    comments: commentsReducer,
  },
});
