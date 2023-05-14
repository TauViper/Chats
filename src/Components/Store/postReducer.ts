import { Reducer, Slice, createSlice } from '@reduxjs/toolkit';
// import { ADD_POST, GET_USER_PROFILE } from './constants';
import {
  AddPost,
  //  GetUserProfile,
  PostState,
  // UserPost
} from './types';

const initialState: PostState = {
  userPosts: [
    { id: '1', message: 'I`m Grut' },
    { id: '2', message: 'You are Grut' },
    { id: '3', message: 'They are Gruts' },
    { id: '4', message: 'Winter is coming' },
  ],
  userProfile: null,
};

// export const postReducer = (
//   state = initialPostState,
//   action: AddPost | GetUserProfile
// ): PostState => {
//   switch (action.type) {
//     case ADD_POST:
//       return {
//         ...state,
//         userPosts: [...state.userPosts, action.payload],
//       };
//     case GET_USER_PROFILE:
//       return { ...state, userProfile: action.payload };

//     default:
//       return state;
//   }
// };
const postSlice: Slice<PostState> = createSlice({
  name: 'post',
  initialState,
  reducers: {
    addPost(state: PostState, action: AddPost) {
      state.userPosts = [...state.userPosts, action.payload];
    },
    getUserProfile(state: PostState, action) {
      state.userProfile = action.payload;
    },
  },
});
export const { addPost } = postSlice.actions;
export const slicePost: Reducer<PostState> = postSlice.reducer;
