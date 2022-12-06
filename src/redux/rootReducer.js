import { combineReducers } from '@reduxjs/toolkit';
import infotooltipReducer from 'redux/store/infotooltip/infotooltip.slice.js';
import userReducer from 'redux/store/user/user.slice.js';


export const rootReducer = combineReducers({
  'infotooltip': infotooltipReducer,
  'user': userReducer,
});