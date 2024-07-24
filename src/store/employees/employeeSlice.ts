import { Employee, EmployeeState, Status } from '@/types.ts';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchEmployees } from '@/store/employees/asyncAxtions.ts';

const initialState: EmployeeState = {
  status: Status.LOADING,
  employees: [],
};

export const EmployeeSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(fetchEmployees.pending, (state) => {
        state.status = Status.LOADING;
        state.employees = [];
      })
      .addCase(fetchEmployees.fulfilled, (state, action: PayloadAction<Employee[]>) => {
        state.status = Status.SUCCESS;
        state.employees = action.payload;
      })
      .addCase(fetchEmployees.rejected, (state) => {
        state.status = Status.ERROR;
        state.employees = [];
      }),
});

export default EmployeeSlice.reducer;