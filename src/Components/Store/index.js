import thunk from 'redux-thunk';
import { combineReducers, compose, applyMiddleware } from 'redux';
import { postReducer } from './postReducer';
import { configureStore } from '@reduxjs/toolkit';
import { messageReducer } from './messageReducer';
import { usersReducer } from './userReducer ';
import { totalReducer } from './totalReducer';
import { currentPageReducer } from './currentPageReducer';

export const composeEnhancers =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const rootReducer = combineReducers({
  post: postReducer,
  message: messageReducer,
  users: usersReducer,
  total: totalReducer,
  currentPage: currentPageReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  compose: composeEnhancers(),
  applyMiddleware: applyMiddleware(thunk),
});
