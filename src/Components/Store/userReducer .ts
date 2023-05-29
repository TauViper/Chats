import {
  Reducer,
  Slice,
  createAsyncThunk,
  createSlice,
} from '@reduxjs/toolkit';

import { Init, UserItems } from './types';
import {
  deleteUserFollowed,
  getApiResource,
  postUserFollowed,
} from '../Api/api';

export const initialState: Init = {
  userItems: [],
  isLoader: false,
};

export const getRes = createAsyncThunk('user/getRes', async (url: string) => {
  const res = await getApiResource(url);

  return res.items;
});
export const postFollowed = createAsyncThunk(
  'user/postFollowed',
  async (url: string) => {
    const res = await postUserFollowed(url);

    return res.data;
  }
);
export const deleteFollowed = createAsyncThunk(
  'user/deleteFollowed',
  async (url: string) => {
    const res = await deleteUserFollowed(url);

    return res.data;
  }
);

const userSlice: Slice<Init> = createSlice({
  name: 'user',
  initialState,
  reducers: {
    // getUser(state: Init, action) {
    //   state.userItems = [...state.userItems, action.payload];
    // },
  },
  extraReducers: (builder) => {
    builder.addCase(getRes.pending, (state) => {
      state.isLoader = true;
    });
    builder.addCase(getRes.fulfilled, (state, action) => {
      state.userItems = action.payload;
      state.isLoader = false;
    });
    builder.addCase(postFollowed.pending, (state) => {
      state.isLoader = true;
    });
    builder.addCase(postFollowed.fulfilled, (state, action) => {
      state.userItems = state.userItems.map(
        (item): UserItems =>
          item.id === action.payload
            ? { ...item, followed: action.payload }
            : item
      );
      state.isLoader = false;
    });
    builder.addCase(deleteFollowed.pending, (state) => {
      state.isLoader = true;
    });
    builder.addCase(deleteFollowed.fulfilled, (state, action) => {
      state.userItems = state.userItems.map(
        (item): UserItems =>
          item.id === action.payload
            ? { ...item, followed: action.payload }
            : item
      );
      state.isLoader = false;
    });
  },
});
export const { getUser, showPreloader, followed, unFollowed } =
  userSlice.actions;
export const sliceUser: Reducer<Init> = userSlice.reducer;
