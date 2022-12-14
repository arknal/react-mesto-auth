import { createSlice } from '@reduxjs/toolkit';
import { cardService } from 'services/cardService';

export const cardSlice = createSlice({
  name: 'card',
  initialState: {
    userCards: [],
    serviceCards: [],
    isLoading: {
      addNewCardState: false,
      getInitialCardsState: false,
    },
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(cardService.addNewCard.pending, (state, action) => {
        state.isLoading.addNewCardState = true;
      })
      .addCase(cardService.addNewCard.fulfilled, (state, action) => {
        state.serviceCards.push(action.payload.card);
        state.userCards.push(action.payload.card);
        state.isLoading.addNewCardState = false;
      })
      .addCase(cardService.deleteCard.fulfilled, (state, action) => {
        state.userCards = state.userCards.filter(
          (c) => !(c._id === action.payload)
        );
        state.serviceCards = state.serviceCards.filter(
          (c) => !(c._id === action.payload)
        );
      })
      .addCase(cardService.getInitialCards.pending, (state, action) => {
        state.isLoading.getInitialCardsState = true;
      })
      .addCase(cardService.getInitialCards.fulfilled, (state, action) => {
        state.userCards = [...action.payload.privateCards];
        state.serviceCards = [...action.payload.publicCards];
        state.isLoading.getInitialCardsState = false;
      })
      .addCase(cardService.toggleLike.fulfilled, (state, action) => {
        state.userCards = state.userCards.map((c) =>
          c._id === action.payload.card._id ? action.payload.card : c
        );

        state.serviceCards = state.serviceCards.map((c) =>
          c._id === action.payload.card._id ? action.payload.card : c
        );
      })
      .addCase(cardService.addComment.fulfilled, (state, action) => {
        state.userCards = state.userCards.map((c) =>
          c._id === action.payload.card._id ? action.payload.card : c
        );

        state.serviceCards = state.serviceCards.map((c) =>
          c._id === action.payload.card._id ? action.payload.card : c
        );
      })
      .addCase(cardService.deleteComment.fulfilled, (state, action) => {
        state.userCards = state.userCards.map((c) =>
          c._id === action.payload.card._id ? action.payload.card : c
        );

        state.serviceCards = state.serviceCards.map((c) =>
          c._id === action.payload.card._id ? action.payload.card : c
        );
      });
  },
});

export default cardSlice.reducer;
