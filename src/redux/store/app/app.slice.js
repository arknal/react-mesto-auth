import { createSlice } from '@reduxjs/toolkit';

export const appSlice = createSlice({
  name: 'app',
  initialState: {
    isLoading: false,
    currentPopup: null,
  },
  reducers: {
    setIsLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    openPopup: (state, action) => {
      state.currentPopup = action.payload;
    },
    closePopup: (state, action) => {
      state.currentPopup = null;
    },
  },
});

export default appSlice.reducer;
export const { setIsLoading, openPopup, closePopup } = appSlice.actions;
