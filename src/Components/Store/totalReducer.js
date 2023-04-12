import { GET_TOTAL } from './constants';

export const initialTotalState = '';

export const totalReducer = (state = initialTotalState, action) => {
  switch (action.type) {
    case GET_TOTAL:
      return action.payload;

    default:
      return state;
  }
};
console.log(initialTotalState);
