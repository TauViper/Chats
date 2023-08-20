import {
  Reducer,
  Slice,
  createAsyncThunk,
  createSlice,
} from '@reduxjs/toolkit';

import { Init, UserItems } from './types';
import {
  FOLLOWED,
  HTTPS,
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
  async (id: number, { dispatch }) => {
    await postUserFollowed(HTTPS + FOLLOWED + id);
    dispatch(followed(id));
  }
);
export const deleteFollowed = createAsyncThunk(
  'user/deleteFollowed',
  async (id: number, { dispatch }) => {
    await deleteUserFollowed(HTTPS + FOLLOWED + id);
    dispatch(unFollowed(id));
  }
);

const userSlice: Slice<Init> = createSlice({
  name: 'user',
  initialState,
  reducers: {
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
    builder.addCase(postFollowed.pending, (state) => {
      state.isLoader = true;
    });
    builder.addCase(postFollowed.fulfilled, (state) => {
      state.isLoader = false;
    });
    builder.addCase(deleteFollowed.pending, (state) => {
      state.isLoader = true;
    });
    builder.addCase(deleteFollowed.fulfilled, (state) => {
      state.isLoader = false;
    });
  },
});
export const { getUser, showPreloader, followed, unFollowed } =
  userSlice.actions;
export const sliceUser: Reducer<Init> = userSlice.reducer;
