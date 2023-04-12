import { ADD_POST } from './constants';

const initialPostState = [
  { id: '1', message: 'I`m Grut' },
  { id: '2', message: 'You are Grut' },
  { id: '3', message: 'They are Gruts' },
  { id: '4', message: 'Winter is coming' },
];

export const postReducer = (state = initialPostState, action) => {
  switch (action.type) {
    case ADD_POST:
      return [...state, action.payload];

    default:
      return state;
  }
};
