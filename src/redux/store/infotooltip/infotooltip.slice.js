import { createSlice } from "@reduxjs/toolkit";

export const infotooltipSlice = createSlice({
  name: 'infotooltipSlice',
  initialState: {
    status: false,
    message: '',
    isVisible: false
  },
  reducers: {
    success: (state, action) => {
      state = {
        status: true,
        message: action.payload,
        isVisible: true
      }
    },
    error: (state, action) => {
      state.status = false;
      state.message = action.payload;
      state.isVisible = true;
    },
    hide: (state) => {
      state.isVisible = false;
    }
  }
})
export const { success, error, hide } = infotooltipSlice.actions

export default infotooltipSlice.reducer