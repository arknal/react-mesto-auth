import { createSlice } from '@reduxjs/toolkit';
import { userService } from 'services/userService';


export const userSlice = createSlice({
  name: 'user',
  initialState: {
    info: {}
  },
  reducers: {
    logoutAction: (state) => {
      state.info = {};
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(userService.getUserInfo.fulfilled, (state, action) => {
        const { user } = action.payload
        state.info = user;
      })
      .addCase(userService.updateUserInfo.fulfilled, (state, action) => {
        state.info = { ...state, ...action.payload.user };
      })
      .addCase(userService.updateUserAvatar.fulfilled, (state, action) => {
        state.info = { ...state, ...action.payload.user };
      });
  },
});

export default userSlice.reducer;
export const { logoutAction } = userSlice.actions;
