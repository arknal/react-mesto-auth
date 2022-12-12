import { configureStore } from '@reduxjs/toolkit';
import loadingMiddleware from 'middlewares/loadingMiddleware';
import { rootReducer } from './rootReducer';

export const store = configureStore({
  reducer: rootReducer,
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware().unshift(loadingMiddleware),
});