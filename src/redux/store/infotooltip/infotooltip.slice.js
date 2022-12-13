import { createSlice } from "@reduxjs/toolkit";

export const infotooltipSlice = createSlice({
  name: 'infotooltipSlice',
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
export const { show, hide } = infotooltipSlice.actions

export default infotooltipSlice.reducer