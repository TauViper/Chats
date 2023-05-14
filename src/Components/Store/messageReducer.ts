import { ADD_MESSAGE } from './constants';
import { AddMessage, StateMessage } from './types';

export const initialMessageState: StateMessage[] = [
  { id: '1', message: 'Hello' },
  { id: '2', message: 'Hello all' },
  { id: '3', message: 'Hello Everybody' },
  { id: '4', message: 'Hello People' },
];

export const messageReducer = (
  state = initialMessageState,
  action: AddMessage
): StateMessage[] => {
  switch (action.type) {
    case ADD_MESSAGE:
      return [...state, action.payload];

    default:
      return state;
  }
};
