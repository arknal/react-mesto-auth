import { createAsyncThunk } from '@reduxjs/toolkit';
import { cardController } from 'controllers/cardController';

export const cardService = {
  addNewCard: createAsyncThunk('card/addNewCard', function (props) {
    return cardController.addNewCard(props);
  }),
  getInitialCards: createAsyncThunk('card/getInitialCards', function () {
    return cardController.getInitialCards();
  }),
  deleteCard: createAsyncThunk('card/deleteCard', function (id) {
    return cardController.deleteCard(id);
  }),
  addLike: createAsyncThunk('card/addLike', function (id) {
    return cardController.addLike(id);
  }),
  removeLike: createAsyncThunk('card/removeLike', function (id) {
    return cardController.removeLike(id);
  }),
};
