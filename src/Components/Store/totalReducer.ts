import { GET_TOTAL } from './constants';
import { GetUsersTotalCount } from './types';

type TotalState = number;

export const initialTotalState: TotalState = 0;

export const totalReducer = (
  state = initialTotalState,
  action: GetUsersTotalCount
): TotalState => {
  switch (action.type) {
    case GET_TOTAL:
      return action.payload;

    default:
      return state;
  }
};
