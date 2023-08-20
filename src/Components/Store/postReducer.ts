import {
  PayloadAction,
  Reducer,
  Slice,
  createAsyncThunk,
  createSlice,
} from '@reduxjs/toolkit';
import { AddPost, GetUserProfile, PostState, UserInfoSchema } from './types';
import {
  HTTPS,
  PROFILE,
  getApiResource,
  postUserFoto,
  putUserInfo,
} from '../Api/api';

const initialState: PostState = {
  userPosts: [
    { id: '1', message: 'I`m Grut' },
    { id: '2', message: 'You are Grut' },
    { id: '3', message: 'They are Gruts' },
    { id: '4', message: 'Winter is coming' },
  ],
  userProfile: null,
};

export const getUserProf = createAsyncThunk(
  'post/getUserProf',
  async (url: string) => {
    const res = await getApiResource(url);
    return res;
  }
);
export const postFoto = createAsyncThunk(
  'post/postFoto',
  async (file: File, { dispatch }) => {
    const res = await postUserFoto(file);
    dispatch(addFoto(res.data.photos.small));
  }
);
export const putInfoUser = createAsyncThunk(
  'post/putInfoUser',
  async (data: UserInfoSchema, { dispatch }) => {
    await putUserInfo(HTTPS + PROFILE, data);

    dispatch(changeProfile(data));
  }
);

const postSlice: Slice<PostState> = createSlice({
  name: 'post',
  initialState,
  reducers: {
    addPost(state: PostState, action: PayloadAction<AddPost>) {
      state.userPosts.push(action.payload);
    },
    addFoto(state: PostState, action: PayloadAction<string>) {
      if (state.userProfile !== null) {
        state.userProfile.photos.small = action.payload;
      }
    },
    changeProfile(
      state: PostState,
      action: PayloadAction<Partial<PostState['userProfile']>>
    ) {
      if (state.userProfile) {
        state.userProfile = {
          ...state.userProfile,
          ...action.payload,
        };
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(
      getUserProf.fulfilled,
      (state: PostState, action: PayloadAction<GetUserProfile>) => {
        state.userProfile = action.payload;
      }
    );
  },
});
export const { addPost, addFoto, changeProfile } = postSlice.actions;
export const slicePost: Reducer<PostState> = postSlice.reducer;
