import { createSlice } from '@reduxjs/toolkit';
import { userService } from 'services/userService';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    isAuthorized: false,
    info: {},
  },
  reducers: {
    setIsAuthorized: (state, action) => {
      state.isAuthorized = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(userService.getUserInfo.fulfilled, (state, action) => {
        state.info = action.payload.user;
      })
      .addCase(userService.updateUserInfo.fulfilled, (state, action) => {
        state.info = { ...state.info, ...action.payload.user };
      })
      .addCase(userService.updateUserAvatar.fulfilled, (state, action) => {
        state.info = { ...state.info, ...action.payload.user };
      });
  },
});

export default userSlice.reducer;
export const { setIsAuthorized } = userSlice.actions;