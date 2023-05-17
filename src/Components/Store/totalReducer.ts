import {
  Reducer,
  Slice,
  createAsyncThunk,
  createSlice,
} from '@reduxjs/toolkit';
// import { GET_TOTAL } from './constants';
import { GetUsersTotalCount } from './types';
import { getApiResource } from '../Api/api';

type TotalState = { total: number };

export const initialState: TotalState = { total: 0 };

export const getTotalUser = createAsyncThunk(
  'total/getTotalUser',
  async (url: string) => {
    const res = await getApiResource(url);
    const total = res.totalCount;
    return total;
  }
);
export const totalSlice: Slice<TotalState> = createSlice({
  name: 'total',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      getTotalUser.fulfilled,
      (state, action: GetUsersTotalCount) => {
        state.total = action.payload;
      }
    );
  },
});

export const sliceTotal: Reducer<TotalState> = totalSlice.reducer;