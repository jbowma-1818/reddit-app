import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchCommentsByPostId = createAsyncThunk(
    'comments/fetchByPostId',
    async (postId, thunkAPI) => {
      try {
        const res = await fetch(`https://www.reddit.com/comments/${postId}.json?raw_json=1`);
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const json = await res.json();
  
        const commentChildren = json?.[1]?.data?.children ?? [];
  
        const comments = commentChildren
          .filter((c) => c.kind === 't1')
          .map((c) => {
            const d = c.data;
            return {
              id: d.id,
              name: d.name,
              author: d.author,
              body: d.body,
              score: d.score,
              created_utc: d.created_utc,
              permalink: d.permalink,
              repliesCount: d.replies?.data?.children?.length ?? 0,
            };
          });
  
        return { postId, comments };
      } catch (err) {
        return thunkAPI.rejectWithValue(err.message || 'Failed to load comments');
      }
    }
  );
  
  const commentsSlice = createSlice({
    name: 'comments',
    initialState: {
      byPostId: {}
    },
    reducers: {
      clearCommentsForPost(state, action) {
        delete state.byPostId[action.payload];
      }
    },
    extraReducers: (builder) => {
      builder
        .addCase(fetchCommentsByPostId.pending, (state, action) => {
          const postId = action.meta.arg;
          state.byPostId[postId] = state.byPostId[postId] ?? { comments: [] };
          state.byPostId[postId].status = 'loading';
          state.byPostId[postId].error = null;
        })
        .addCase(fetchCommentsByPostId.fulfilled, (state, action) => {
          const { postId, comments } = action.payload;
          state.byPostId[postId] = {
            status: 'succeeded',
            error: null,
            comments
          };
        })
        .addCase(fetchCommentsByPostId.rejected, (state, action) => {
          const postId = action.meta.arg;
          state.byPostId[postId] = state.byPostId[postId] ?? { comments: [] };
          state.byPostId[postId].status = 'failed';
          state.byPostId[postId].error = action.payload || action.error.message;
        });
    }
  });
  
  export const { clearCommentsForPost } = commentsSlice.actions;
  
  export const selectCommentsForPost = (state, postId) =>
    state.comments.byPostId[postId]?.comments ?? [];
  
  export const selectCommentsStatusForPost = (state, postId) =>
    state.comments.byPostId[postId]?.status ?? 'idle';
  
  export const selectCommentsErrorForPost = (state, postId) =>
    state.comments.byPostId[postId]?.error ?? null;
  
  export default commentsSlice.reducer;