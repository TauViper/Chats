import { FOLLOWED, UNFOLLOWED, GET_USERS, SHOW_PRELOADER } from './constants';
import { Follow, GetUsers, Init, ShowPreload, UnFollow } from './types';

export const initialUserState: Init = {
  userItems: [],
  isLoader: false,
};

export const usersReducer = (
  state = initialUserState,
  action: GetUsers | ShowPreload | Follow | UnFollow
) => {
  switch (action.type) {
    case GET_USERS:
      return { ...state, userItems: action.payload };

    case SHOW_PRELOADER:
      return { ...state, isLoader: action.payload };

    case FOLLOWED:
      return {
        ...state,
        userItems: state.userItems.map((item) =>
          item.id === action.payload ? { ...item, followed: true } : item
        ),
      };
    case UNFOLLOWED:
      return {
        ...state,
        userItems: state.userItems.map((item) =>
          item.id === action.payload ? { ...item, followed: false } : item
        ),
      };

    default:
      return state;
  }
};
// console.log(initialUserState);
