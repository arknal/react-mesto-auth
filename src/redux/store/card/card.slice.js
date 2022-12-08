import { createSlice } from '@reduxjs/toolkit';

export const cardSlice = createSlice({
  name: 'card',
  initialState: {
    userCards: [],
    serviceCards: []
  },
  reducers: {
  },
  extraReducers: (builder) => {

  },
});

export default cardSlice.reducer;
