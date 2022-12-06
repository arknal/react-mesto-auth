import { createAsyncThunk } from '@reduxjs/toolkit';
import userController from 'controllers/userController';

export const getUserInfo = createAsyncThunk('user/getUserInfo', function () {
  return userController.getUserInfo();
});
export const login = createAsyncThunk('user/login', function (data) {
  return userController.login(data);
});
export const register = createAsyncThunk('user/register', function (data) {
  return userController.register(data);
});
export const updateUserInfo = createAsyncThunk('user/updateUserInfo',function (data) {
    return userController.updateUserInfo(data);
  }
);
export const updateUserAvatar = createAsyncThunk('user/updateUserAvatar',function (data) {
    return userController.updateUserAvatar(data);
  }
);
