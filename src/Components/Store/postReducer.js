import { ADD_POST } from './action';

const initialPostState = [
  { id: '1', message: 'I`m Grut' },
  { id: '2', message: 'You are Grut' },
  { id: '3', message: 'They are Gruts' },
  { id: '4', message: 'Winter is coming' },
];

export const postReducer = (state = initialPostState, action) => {
  switch (action.type) {
    case ADD_POST: {
      const post = action.payload;
      return [...state, post];
    }
    default:
      return state;
  }
};
