export type AuthUser = {
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
  isAuth?: boolean;
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
    photos: {
      small: string;
    };
    id?: string;
  } | null;
};
export type AddPost = {
  payload: {
    id: string;
    message: string;
  };
};
export type GetUserProfile = {
  payload: {
    aboutMe: string;
    photos: {
      small: string;
    };
  };
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
