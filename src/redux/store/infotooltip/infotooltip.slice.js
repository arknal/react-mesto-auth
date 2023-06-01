import { createSlice } from "@reduxjs/toolkit";

export const tooltipSlice = createSlice({
  name: 'tooltipSlice',
  initialState: {
    status: '',
    message: '',
    isVisible: false
  },
  reducers: {
    show: (state, action) => {
      state.isVisible = true;
      state.status = action.payload.status;
      state.message = action.payload.message;
    },
    hide: (state) => {
      state.isVisible = false;
    }
  }
})
export const { show, hide } = tooltipSlice.actions

export default tooltipSlice.reducer