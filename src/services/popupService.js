import { openPopup } from 'redux/store/app/app.slice';

export const popupService = {
  showEditProfilePopup(dispatch) {
    dispatch(openPopup('edit-profile'));
  },
  showEditAvatarPopup(dispatch) {
    dispatch(openPopup('edit-avatar'));
  },
  showAddPlacePopup(dispatch) {
    dispatch(openPopup('add-place'));
  },
  showImagePopup(dispatch) {
    dispatch(openPopup('show-image'));
  },
  showConfirmationPopup(dispatch) {
    dispatch(openPopup('confirmation'))
  }
};
