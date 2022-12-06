import { createSlice } from '@reduxjs/toolkit';

export const cardSlice = createSlice({
  name: 'card',
  initialState: {
    cards: []
  },
  reducers: {
  },
  extraReducers: (builder) => {

  },
});

export default cardSlice.reducer;
