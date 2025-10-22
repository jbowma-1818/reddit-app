import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const loadPosts = createAsyncThunk(
    'allPosts/getAllPosts',
    async (search, thunkAPI) => {
        console.log(search);
        const searchUrl = search ?? 'https://www.reddit.com/r/popular.json';
        const data = await fetch(searchUrl);
        if (!data.ok) throw new Error('Network response error');
        const json = await data.json();
        console.log(json);
        return json;
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
    extraReducers: (builder) => {
        builder
            .addCase(loadPosts.pending, state => {
                state.isLoading = true;
                state.hasError = false;
            })
            .addCase(loadPosts.fulfilled, (state, action) => {
                state.posts = action.payload?.data?.children?.map(child => child.data) ?? [];
                state.isLoading = false;
                state.hasError = false;
            })
            .addCase(loadPosts.rejected, state => {
                state.isLoading = false;
                state.hasError = true;
            });
    }
});

export default allPostsSlice.reducer;