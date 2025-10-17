import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const loadPosts = createAsyncThunk(
    'allPosts/getAllPosts',
    async (postId, thunkAPI) => {
        const data = await fetch(postId);
        return Response.data;
    }
);

export const allPostsSlice = createSlice({
    name: 'allPosts',
    initialState: [],
    reducers: {
        loadData: (state, action) => {
            state.push(action.payload);
        }
    }
});