import { Slice, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { AuthData } from './types';
import { getApiResource } from '../Api/api';

export const initialState: AuthData = {
  id: null,
  login: null,
  email: null,
};

export const authUser = createAsyncThunk(
  'auth/authUser',
  async (url: string) => {
    const res = await getApiResource(url);
    if (res.resultCode === 0) {
      return res.data;
    }
    return false;
  }
);

export const authReducer: Slice<AuthData> = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      authUser.fulfilled,
      (state: AuthData, action) => action.payload
    );
  },
});

export const sliceaAuthUser = authReducer.reducer;
