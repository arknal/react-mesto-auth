import { createSlice } from '@reduxjs/toolkit';
import { getUserInfo } from './user.actions';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    isAuthorized: false,
    info: {},
  },
  reducers: {
  },
  extraReducers: (builder) => {
    builder.addCase(getUserInfo.fulfilled, (state, action) => {
      state.info = action.payload.user;
      state.isAuthorized = true;
    })
  },
});

export default userSlice.reducer;
