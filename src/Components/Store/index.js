import { combineReducers, createStore, compose } from 'redux';
import { postReducer } from './postReducer';

export const composeEnhancers =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const rootReducer = combineReducers({
  post: postReducer,
});

export const store = createStore(rootReducer, composeEnhancers());
