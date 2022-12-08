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
      state = action.payload;
    },
    hide: (state) => {
      state.isVisible = false;
    }
  }
})
export const { show, hide } = infotooltipSlice.actions

export default infotooltipSlice.reducer