import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  account: {},
  Loading: {
    getUserInfoState: false,
    updateUserInfoState: false,
    updateUserAvatarState: false,
  },
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logoutAction: (state) => {
      state.account = {};
    },
  },
  extraReducers: (builder) => {
    builder.addCase(userService.getUserInfo.pending, (state, action) => {
      state.isLoading.getUserInfoState = true;
    });
  },
});

export default userSlice.reducer;
export const { logoutAction } = userSlice.actions;
