import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const loadPosts = createAsyncThunk(
    'allPosts/getAllPosts',
    async (postId, thunkAPI) => {
        const data = await fetch(postId); // Need to change what's inside fetch
        return data.json();
    }
);

export const allPostsSlice = createSlice({
    name: 'allPosts',
    initialState: {
        posts: [],
        isLoading: false, 
        hasError: false
    },
    reducers: { // might be able to have this be blank
        loadData: (state, action) => {
            state.posts.push(action.payload);
        }
    },
    extraReducers: {
        [loadPosts.pending]: (state, action) => {
            state.isLoading = true;
            state.hasError = false;
        },
        [loadPosts.fulfilled]: (state, action) => {
            state.posts.push(action.payload);
            state.isLoading = false;
            state.hasError = true;
        },
        [loadPosts.rejected]: (state, action) => {
            state.isLoading = false;
            state.hasError = true;
        }
    }
});