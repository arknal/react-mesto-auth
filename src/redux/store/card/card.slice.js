import { createSlice } from '@reduxjs/toolkit';
import { cardService } from 'services/cardService';

export const cardSlice = createSlice({
  name: 'card',
  initialState: {
    userCards: [],
    serviceCards: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(cardService.addNewCard.fulfilled, (state, action) => {
        state.userCards.prepend(action.payload);
        state.serviceCards.prepend(action.payload);
      })
      .addCase(cardService.deleteCard.fulfilled, (state, action) => {
        state.userCards.filter((c) => !(c._id === action.payload))
        state.serviceCards.filter((c) => !(c._id === action.payload))
      })
      .addCase(cardService.getInitialCards.fulfilled, (state, action) => {
        state.serviceCards = [...action.payload.cards];
      })
  },
});

export default cardSlice.reducer;
