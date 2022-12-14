export const userSelector = (state) => state.user.info;
export const infotooltipSelector = (state) => state.infotooltip;
export const cardsSelector = (state) => state.cards
export const serviceCardsSelector = (state) => state.cards.serviceCards;
export const userCardsSelector = (state) => state.cards.userCards;
export const currentPopupSelector = (state) => state.app.currentPopup;

export const getInitialCardsStateSelector = (state) => state.cards.isLoading.getInitialCardsState;
export const addNewCardStateSelector = (state) => state.cards.isLoading.addNewCardState;

export const getUserInfoStateSelector = (state) => state.user.isLoading.getUserInfoState;
export const updateUserInfoStateSelector = (state) => state.user.isLoading.updateUserInfoState;
export const updateUserAvatarStateSelector = (state) => state.user.isLoading.updateUserAvatarState;

export const currentCardSelector = (state) => state.app.currentCard;
export const isCardLoadedSelector = (state) => state.app.isCardLoaded;