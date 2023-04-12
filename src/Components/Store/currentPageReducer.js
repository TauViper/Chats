import { CURRENT_PAGE } from './constants';

export const initialCurrentPageState = '1';

export const currentPageReducer = (state = initialCurrentPageState, action) => {
  switch (action.type) {
    case CURRENT_PAGE:
      return action.payload;

    default:
      return state;
  }
};
