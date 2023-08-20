import { Reducer, createSlice } from '@reduxjs/toolkit';
import { PageCount } from './types';

export const initialState: PageCount = 1;

export const currentPageSlice = createSlice({
  name: 'currentPage',
  initialState,
  reducers: {
    currentPage(state, action) {
      return action.payload;
    },
  },
});
export const { currentPage } = currentPageSlice.actions;
export const sliceCurrentPage: Reducer<PageCount> = currentPageSlice.reducer;