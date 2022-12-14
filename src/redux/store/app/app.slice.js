import { createSlice } from '@reduxjs/toolkit';

export const appSlice = createSlice({
  name: 'app',
  initialState: {
    currentPopup: null,
    currentCard: {},
    isCardLoaded: false
  },
  reducers: {
    openPopup: (state, action) => {
      state.currentPopup = action.payload;
    },
    closePopup: (state, action) => {
      state.currentPopup = null;
    },
    setCurrentCard: (state, action) => {
      if (action.payload.name) {
        state.isCardLoaded = true;
      } else {
        state.isCardLoaded = false;
      }
      state.currentCard = action.payload;
    }
  },
});

export default appSlice.reducer;
export const { openPopup, closePopup, setCurrentCard } = appSlice.actions;
