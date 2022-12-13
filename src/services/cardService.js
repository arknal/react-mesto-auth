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
  toggleLike: createAsyncThunk('card/toggleLike', function ({_id, isLiked}) {
    return cardController.changeLikeStatus(_id, isLiked);
  }),
};
