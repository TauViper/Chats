import { Slice, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { AuthData, LoginBody } from './types';
import {
  AUTH,
  HTTPS,
  LOGIN,
  getApiResource,
  loginUser,
  logout,
} from '../Api/api';

export const initialState: AuthData = {
  userAuth: {
    id: null,
    login: null,
    email: null,
    isAuth: false,
  },
  isLoader: false,
};

export const authUser = createAsyncThunk(
  'auth/authUser',
  async (url: string) => {
    const res = await getApiResource(url);
    if (res.resultCode === 0) {
      return { ...res.data, isAuth: true };
    }
    return { isAuth: false };
  }
);
export const userLogin = createAsyncThunk(
  'user/userLogin',
  async (data: LoginBody, { dispatch }) => {
    const res = await loginUser(HTTPS + LOGIN, data);
    res.resultCode === 0
      ? await dispatch(authUser(HTTPS + AUTH))
      : alert(res.messages);
  }
);
export const userLogOut = createAsyncThunk(
  'user/userLogin',
  async (url: string, { dispatch }) => {
    await logout(url);
    await dispatch(authUser(HTTPS + AUTH));
  }
);

export const authReducer: Slice<AuthData> = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(authUser.pending, (state) => {
      state.isLoader = true;
    });
    builder.addCase(authUser.fulfilled, (state: AuthData, action) => {
      state.userAuth = action.payload;
      state.isLoader = false;
    });
    // builder.addCase(authUser.fulfilled, (state) => {
    //   state.isAuth = true;
    // });
  },
});

export const sliceaAuthUser = authReducer.reducer;
