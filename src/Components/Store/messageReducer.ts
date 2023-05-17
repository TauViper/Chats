import { Slice, createSlice, Reducer } from '@reduxjs/toolkit';
import { StateMessage } from './types';

export const initialState: StateMessage = {
  messages: [
    { id: '1', message: 'Hello' },
    { id: '2', message: 'Hello all' },
    { id: '3', message: 'Hello Everybody' },
    { id: '4', message: 'Hello People' },
  ],
};
const messageSlice: Slice<StateMessage> = createSlice({
  name: 'message',
  initialState,
  reducers: {
    addMessage(state: StateMessage, action) {
      state.messages = [...state.messages, action.payload];
    },
  },
});
export const { addMessage } = messageSlice.actions;
export const sliceMessage: Reducer<StateMessage> = messageSlice.reducer;

// export const messageReducer = (
//   state = initialMessageState,
//   action: AddMessage
// ): StateMessage[] => {
//   switch (action.type) {
//     case ADD_MESSAGE:
//       return [...state, action.payload];

//     default:
//       return state;
//   }
// };
