import { Employee, ProfileState, Status } from '@/types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchProfile } from './asyncActions';

const initialState: ProfileState = {
  status: Status.LOADING,
  profile: {
    id: 0,
    name: '',
    username: '',
    email: '',
    address: {
      street: '',
      suite: '',
      city: '',
      zipcode: '',
      geo: {
        lat: 0,
        lng: 0,
      },
    },
    phone: '',
    website: '',
    company: {
      name: '',
      catchPhrase: '',
      bs: '',
    },
  },
  isEditing: false,
  tempProfile: null,
};

export const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProfile.pending, (state) => {
        state.status = Status.LOADING;
        state.profile = {
          id: 0,
          name: '',
          username: '',
          email: '',
          address: { street: '', suite: '', city: '', zipcode: '', geo: { lat: 0, lng: 0 } },
          phone: '',
          website: '',
          company: {
            name: '', catchPhrase: '', bs: '',
          },
        };
      })
      .addCase(fetchProfile.fulfilled, (state, action: PayloadAction<Employee[]>) => {
        state.status = Status.SUCCESS;
        state.profile = action.payload[0];
      })
      .addCase(fetchProfile.rejected, (state) => {
        state.status = Status.ERROR;
        state.profile = {
          id: 0,
          name: '',
          username: '',
          email: '',
          address: { street: '', suite: '', city: '', zipcode: '', geo: { lat: 0, lng: 0 } },
          phone: '',
          website: '',
          company: {
            name: '', catchPhrase: '', bs: '',
          },
        };
      });
  },
});

export default profileSlice.reducer;