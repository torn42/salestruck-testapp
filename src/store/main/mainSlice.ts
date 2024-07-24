import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Comment, MainState, Post, Status } from '../../types.ts';
import { fetchComments, fetchPosts } from './asyncActions';

const initialState: MainState = {
  postsStatus: Status.LOADING,
  commentsStatus: Status.LOADING,
  posts: [],
  comments: [],
};

export const mainSlice = createSlice({
  name: 'main',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.postsStatus = Status.LOADING;
        state.posts = [];
      })
      .addCase(fetchPosts.fulfilled, (state, action: PayloadAction<Post[]>) => {
        state.postsStatus = Status.SUCCESS;
        state.posts = action.payload;
      })
      .addCase(fetchPosts.rejected, (state) => {
        state.postsStatus = Status.ERROR;
        state.posts = [];
      })
      .addCase(fetchComments.pending, (state) => {
        state.commentsStatus = Status.LOADING;
        state.comments = [];
      })
      .addCase(fetchComments.fulfilled, (state, action: PayloadAction<Comment[]>) => {
        state.commentsStatus = Status.SUCCESS;
        state.comments = action.payload;
      })
      .addCase(fetchComments.rejected, (state) => {
        state.commentsStatus = Status.ERROR;
        state.comments = [];
      })
    ;
  },
});

export default mainSlice.reducer;