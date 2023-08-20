import { Slice, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { AuthData, LoginBody } from './types';
import {
  AUTH,
  CAPTCHA,
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
  captchaURL: null,
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
    if (res.resultCode === 0) {
      await dispatch(authUser(HTTPS + AUTH));
    } else if (res.resultCode === 10) {
      await dispatch(captchaURL(HTTPS + CAPTCHA));
      alert(res.messages);
    } else {
      alert(res.messages);
    }
  }
);
export const userLogOut = createAsyncThunk(
  'user/userLogin',
  async (url: string, { dispatch }) => {
    await logout(url);
    await dispatch(authUser(HTTPS + AUTH));
  }
);
export const captchaURL = createAsyncThunk(
  'user/captchaURL',
  async (url: string, { dispatch }) => {
    const res = await getApiResource(url);
    await dispatch(setCaptcha(res.url));
  }
);

export const authReducer: Slice<AuthData> = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setCaptcha(state: AuthData, action) {
      state.captchaURL = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(authUser.pending, (state) => {
      state.isLoader = true;
    });
    builder.addCase(authUser.fulfilled, (state: AuthData, action) => {
      state.userAuth = action.payload;
      state.captchaURL = null;
      state.isLoader = false;
    });
  },
});

export const { setCaptcha } = authReducer.actions;
export const sliceaAuthUser = authReducer.reducer;
