import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { Comment, Post } from '../../types.ts';

export const fetchPosts = createAsyncThunk<Post[]>(
  'main/fetchPosts',
  async () => {
    const response = await axios.get<Post[]>('https://jsonplaceholder.typicode.com/posts');
    return response.data;
  },
);

export const fetchComments = createAsyncThunk<Comment[]>(
  'main/fetchComments',
  async () => {
    const response = await axios.get<Comment[]>('https://jsonplaceholder.typicode.com/comments');
    return response.data;
  },
);