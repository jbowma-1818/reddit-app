import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const loadPosts = createAsyncThunk(
    'allPosts/getAllPosts',
    async (postId, thunkAPI) => {
        const url = postId ?? 'https://www.reddit.com/search.json?q=cake%20recipes';
        const data = await fetch(url); // Need to change what's inside fetch
        if (!data.ok) throw new Error('Network response error');
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
            state.hasError = false;
        },
        [loadPosts.rejected]: (state, action) => {
            state.isLoading = false;
            state.hasError = true;
        }
    }
});

export default allPostsSlice.reducer;