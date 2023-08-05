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
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

export type StoreState = ReturnType<typeof rootReducer>;

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['auth'],
};

export const rootReducer = combineReducers({
  post: slicePost,
  message: sliceMessage,
  users: sliceUser,
  total: sliceTotal,
  currentPage: sliceCurrentPage,
  auth: sliceaAuthUser,
});
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
export const persistor = persistStore(store);
