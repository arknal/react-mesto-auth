import { combineReducers } from '@reduxjs/toolkit';
import infotooltipReducer from 'redux/store/infotooltip/infotooltip.slice';
import userReducer from 'redux/store/user/user.slice';
import cardReducer from 'redux/store/card/card.slice';
import appReducer from 'redux/store/app/app.slice';

export const rootReducer = combineReducers({
  'infotooltip': infotooltipReducer,
  'user': userReducer,
  'cards': cardReducer,
  'app': appReducer
});