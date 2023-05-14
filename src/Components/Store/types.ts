import {
  ADD_MESSAGE,
  ADD_POST,
  AUTH_USER,
  CURRENT_PAGE,
  FOLLOWED,
  GET_TOTAL,
  GET_USERS,
  GET_USER_PROFILE,
  SHOW_PRELOADER,
  UNFOLLOWED,
} from './constants';

export type AuthUser = {
  type: typeof AUTH_USER;
  payload: {
    id: string;
    email: string;
    login: string;
  };
};
export type AuthData = {
  id: null | string;
  email: null | string;
  login: null | string;
};
export type CurrentPage = {
  type: typeof CURRENT_PAGE;
  payload: number;
};
export type AddMessage = {
  type: typeof ADD_MESSAGE;
  payload: {
    id: string;
    message: string;
  };
};
export type StateMessage = {
  id: string;
  message: string;
};
export type UserPost = {
  id: string;
  message: string;
};

export type PostState = {
  userPosts: UserPost[];
  userProfile: {
    aboutMe: string;
    photos: {
      small: string;
    };
  } | null;
};
export type AddPost = {
  // type: typeof ADD_POST;
  payload: {
    id: string;
    message: string;
  };
};
export type GetUserProfile = {
  type: typeof GET_USER_PROFILE;
  payload: {
    aboutMe: string;
    photos: {
      small: string;
    };
  };
};
export type GetUsersTotalCount = {
  type: typeof GET_TOTAL;
  payload: number;
};
export type UserItems = {
  followed: boolean;
  id: number;
  name: string;
  photos: {
    small: null | string;
    large: null | string;
  };
  status: null | string;
  uniqueUrlName: null | string;
};

export type GetUsers = {
  type: typeof GET_USERS;
  payload: UserItems[];
};

export type Follow = {
  type: typeof FOLLOWED;
  payload: number;
};
export type UnFollow = {
  type: typeof UNFOLLOWED;
  payload: number;
};

export type ShowPreload = {
  type: typeof SHOW_PRELOADER;
  payload: boolean;
};

export interface Init {
  userItems: UserItems[];
  isLoader: boolean;
}
