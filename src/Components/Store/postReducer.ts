import {
  PayloadAction,
  // AsyncThunk,
  Reducer,
  Slice,
  createAsyncThunk,
  createSlice,
} from '@reduxjs/toolkit';
// import { ADD_POST, GET_USER_PROFILE } from './constants';
import {
  AddPost,
  GetUserProfile,
  PostState,
  // UserPost
} from './types';
import { getApiResource, postUserFoto } from '../Api/api';
// import { UserProfile } from '../Content/Profile/UserProfile';

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
  },
  extraReducers: (builder) => {
    builder.addCase(
      getUserProf.fulfilled,
      (state: PostState, action: GetUserProfile) => {
        state.userProfile = action.payload;
      }
    );
  },
});
export const { addPost, addFoto } = postSlice.actions;
export const slicePost: Reducer<PostState> = postSlice.reducer;
