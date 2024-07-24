import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { Employee } from '@/types.ts';

export const fetchEmployees = createAsyncThunk<Employee[]>(
  'employee/fetchEmployees',
  async () => {
    const response = await axios.get<Employee[]>('https://jsonplaceholder.typicode.com/users');
    return response.data;
  },
);