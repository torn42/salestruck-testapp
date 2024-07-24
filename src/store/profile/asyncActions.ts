import { Employee } from '@/types';
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchProfile = createAsyncThunk<Employee[]>(
  'profile/fetchProfile',
  async () => {
    const response = await axios.get<Employee[]>('https://312455b15af2b0f4.mokky.dev/my-profile');
    console.log(response.data);
    return response.data;
  },
);