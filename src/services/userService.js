import { createAsyncThunk } from '@reduxjs/toolkit';
import userController from 'controllers/userController';

export const userService = {
  getUserInfo: createAsyncThunk('user/getUserInfo', function () {
    return userController.getUserInfo();
  }),
  updateUserInfo: createAsyncThunk('user/updateUserInfo', function (data) {
    return userController.updateUserInfo(data);
  }),
  updateUserAvatar: createAsyncThunk('user/updateUserAvatar', function (data) {
    return userController.updateUserAvatar(data);
  }),
};