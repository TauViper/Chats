import { CHANGE_BUTTON, GET_USERS } from './constants';

export const initialUserState = [];

export const usersReducer = (state = initialUserState, action) => {
  switch (action.type) {
    case GET_USERS:
      return action.payload;

    case CHANGE_BUTTON:
      return state.map((item) =>
        item.id === action.payload
          ? { ...item, followed: !item.followed }
          : item
      );

    default:
      return state;
  }
};
// console.log(initialUserState);
