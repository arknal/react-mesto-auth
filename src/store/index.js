import { combineReducers, configureStore } from '@reduxjs/toolkit';
import infotooltipReducer from '../services/InfoToolTipSlice';
import userReducer from '../services/userSlice';

const rootReducer = combineReducers({
  'infotooltip': infotooltipReducer,
  'user': userReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});
