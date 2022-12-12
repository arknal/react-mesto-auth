import { createSlice } from '@reduxjs/toolkit';
import { cardService } from 'services/cardService';

export const cardSlice = createSlice({
  name: 'card',
  initialState: {
    userCards: [],
    serviceCards: [],
    isLoading: {
      addNewCardState: false,
      getInitialCardsState: false
    }
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(cardService.addNewCard.pending, (state, action) => {
        state.isLoading.addNewCardState = true;
      })
      .addCase(cardService.addNewCard.fulfilled, (state, action) => {
        state.serviceCards.push(action.payload.card);
        state.isLoading.addNewCardState = false;
      })
      .addCase(cardService.deleteCard.fulfilled, (state, action) => {
        state.userCards.filter((c) => !(c._id === action.payload));
        state.serviceCards.filter((c) => !(c._id === action.payload));
      })
      .addCase(cardService.getInitialCards.pending, (state, action) => {
        state.isLoading.getInitialCardsState = true;
      })
      .addCase(cardService.getInitialCards.fulfilled, (state, action) => {
        state.serviceCards = [...action.payload.cards];
        state.isLoading.getInitialCardsState = false;
      });
  },
});

export default cardSlice.reducer;
