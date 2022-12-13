import { createSlice } from '@reduxjs/toolkit';
import { userService } from 'services/userService';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    info: {},
    isLoading: {
      getUserInfoState: false,
      updateUserInfoState: false,
      updateUserAvatarState: false,
    },
  },
  reducers: {
    logoutAction: (state) => {
      state.info = {};
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(userService.getUserInfo.pending, (state, action) => {
        state.isLoading.getUserInfoState = true;
      })
      .addCase(userService.getUserInfo.fulfilled, (state, action) => {
        state.info = action.payload.user;
        state.isLoading.getUserInfoState = false;
      })
      .addCase(userService.getUserInfo.rejected, (state, action) => {
        state.isLoading.getUserInfoState = false;
      })
      .addCase(userService.updateUserInfo.pending, (state, action) => {
        state.isLoading.updateUserInfoState = true;
      })
      .addCase(userService.updateUserInfo.fulfilled, (state, action) => {
        state.info = { ...state, ...action.payload.user };
        state.isLoading.updateUserInfoState = false;
      })
      .addCase(userService.updateUserAvatar.pending, (state, action) => {
        state.isLoading.updateUserAvatarState = true;
      })
      .addCase(userService.updateUserAvatar.fulfilled, (state, action) => {
        state.info = { ...state, ...action.payload.user };
        state.isLoading.updateUserAvatarState = false;
      });
  },
});

export default userSlice.reducer;
export const { logoutAction } = userSlice.actions;
