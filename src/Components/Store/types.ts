export type AuthUser = {
  payload: {
    id: string;
    email: string;
    login: string;
  };
};
export type AuthData = {
  userAuth: {
    id: null | string;
    email: null | string;
    login: null | string;
    isAuth?: boolean;
  };
  isLoader: boolean;
  captchaURL: null | string;
};

export type CurrentPage = {
  payload: number;
};
export type AddMessage = {
  payload: {
    id: string;
    message: string;
  };
};
export type StateMessage = UserPost[];

export interface Init {
  userItems: UserItems[];
  isLoader: boolean;
}
export type UserPost = {
  id: string;
  message: string;
};

export type PostState = {
  userPosts: UserPost[];
  userProfile: {
    aboutMe: string;
    lookingForAJob: boolean;
    lookingForAJobDescription: string;
    fullName: string;
    photos: {
      small: string;
    };
    userId?: string;
  } | null;
};
export type AddPost = {
  id: string;
  message: string;
};
export type GetUserProfile = {
  aboutMe: string;
  lookingForAJob: boolean;
  lookingForAJobDescription: string;
  fullName: string;
  photos: {
    small: string;
  };
  urlId: string;
};
export type GetUsersTotalCount = {
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
  payload: UserItems[];
};

export type Follow = {
  payload: number;
};
export type UnFollow = {
  payload: number;
};

export type ShowPreload = {
  payload: boolean;
};

export type PageCount = number;

export type ProfileProps = {
  id?: string | undefined;
  loginId: string | null;
  setIsEdit?: boolean;
};
export type LoginSchema = {
  email: string;
  password: string;
  confirmPassword?: string;
  rememberMe: boolean;
  captcha?: string;
};

export interface LoginBody {
  email: string;
  password: string;
  rememberMe: boolean;
  captcha?: string;
}
export type UserInfoSchema = {
  fullName: string;
  aboutMe: string;
  lookingForAJob: boolean;
  lookingForAJobDescription: string;
};
