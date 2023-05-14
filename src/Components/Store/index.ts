import {
  // postReducer
  slicePost,
} from './postReducer';
import { combineReducers, configureStore } from '@reduxjs/toolkit';

import { messageReducer } from './messageReducer';
import { usersReducer } from './userReducer ';
import { totalReducer } from './totalReducer';
import { currentPageReducer } from './currentPageReducer';
import { authReducer } from './authReducer';

export type StoreState = ReturnType<typeof rootReducer>;

// export const composeEnhancers =

//   window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const rootReducer = combineReducers({
  post: slicePost,
  message: messageReducer,
  users: usersReducer,
  total: totalReducer,
  currentPage: currentPageReducer,
  auth: authReducer,
});

export const store = configureStore({
  reducer: rootReducer,

  // compose: composeEnhancers(),
  // applyMiddleware: applyMiddleware(thunk),
});
