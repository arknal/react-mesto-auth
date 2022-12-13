import { createAsyncThunk } from '@reduxjs/toolkit';
import { cardController } from 'controllers/cardController';
import userController from 'controllers/userController';

export const cardService = {
  addNewCard: createAsyncThunk('card/addNewCard', function (props) {
    return cardController.addNewCard(props);
  }),
  getInitialCards: createAsyncThunk('card/getInitialCards', async function (_, { getState }) {
    const userId = getState().user.info._id;
    const res = await cardController.getInitialCards();

    return {
      privateCards: res.cards.filter((c) => c.owner === userId),
      publicCards: res.cards
    };
  }),
  deleteCard: createAsyncThunk('card/deleteCard', function (id) {
    return cardController.deleteCard(id);
  }),
  toggleLike: createAsyncThunk('card/toggleLike', function ({_id, isLiked}) {
    return cardController.changeLikeStatus(_id, isLiked);
  }),
  getOwnerInfo: function (id) {
    let error;
    return userController.getUserById(id).catch(e => error = e.message)
  }
};
