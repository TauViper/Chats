import { AUTH_USER } from './constants';
import { AuthData, AuthUser } from './types';

export const initialTotalState: AuthData = {
  id: null,
  login: null,
  email: null,
};

export const authReducer = (
  state = initialTotalState,
  action: AuthUser
): AuthData => {
  switch (action.type) {
    case AUTH_USER:
      return { ...state, ...action.payload };

    default:
      return state;
  }
};
