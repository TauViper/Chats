import {
  // postReducer
  slicePost,
} from './postReducer';
import { combineReducers, configureStore } from '@reduxjs/toolkit';

import { sliceMessage } from './messageReducer';
import { sliceUser } from './userReducer ';
import { sliceTotal } from './totalReducer';
import { sliceCurrentPage } from './currentPageReducer';
import { sliceaAuthUser } from './authReducer';

export type StoreState = ReturnType<typeof rootReducer>;

// export const composeEnhancers =

//   window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const rootReducer = combineReducers({
  post: slicePost,
  message: sliceMessage,
  users: sliceUser,
  total: sliceTotal,
  currentPage: sliceCurrentPage,
  auth: sliceaAuthUser,
});

export const store = configureStore({
  reducer: rootReducer,

  // compose: composeEnhancers(),
  // applyMiddleware: applyMiddleware(thunk),
});
