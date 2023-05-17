import {
  Reducer,
  Slice,
  createAsyncThunk,
  createSlice,
} from '@reduxjs/toolkit';

import { Init, UserItems } from './types';
import { getApiResource } from '../Api/api';

export const initialState: Init = {
  userItems: [],
  isLoader: false,
};

export const getRes = createAsyncThunk('user/getRes', async (url: string) => {
  const res = await getApiResource(url);

  return res.items;
});

const userSlice: Slice<Init> = createSlice({
  name: 'user',
  initialState,
  reducers: {
    getUser(state: Init, action) {
      state.userItems = [...state.userItems, action.payload];
    },

    followed(state: Init, action) {
      state.userItems = state.userItems.map(
        (item): UserItems =>
          item.id === action.payload ? { ...item, followed: true } : item
      );
    },
    unFollowed(state: Init, action) {
      state.userItems = state.userItems.map(
        (item): UserItems =>
          item.id === action.payload ? { ...item, followed: false } : item
      );
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getRes.pending, (state) => {
      state.isLoader = true;
    });
    builder.addCase(getRes.fulfilled, (state, action) => {
      state.userItems = action.payload;
      state.isLoader = false;
    });
  },
});
export const { getUser, showPreloader, followed, unFollowed } =
  userSlice.actions;
export const sliceUser: Reducer<Init> = userSlice.reducer;
