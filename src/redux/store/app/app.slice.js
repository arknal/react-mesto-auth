import { createSlice } from '@reduxjs/toolkit';

export const appSlice = createSlice({
  name: 'app',
  initialState: {
    isLoading: true
  },
  reducers: {
    setIsLoading: (state, action) => {
      state.isLoading = action.payload
    },
  },
});

export default appSlice.reducer;
export const { setIsLoading } = appSlice.actions;