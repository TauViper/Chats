import { CURRENT_PAGE } from './constants';
import { CurrentPage } from './types';

export const initialCurrentPageState = 1;

export const currentPageReducer = (
  state = initialCurrentPageState,
  action: CurrentPage
): number => {
  switch (action.type) {
    case CURRENT_PAGE:
      return action.payload;

    default:
      return state;
  }
};
