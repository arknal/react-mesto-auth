import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateUserAvatarStateSelector } from "redux/selectors";
import { closePopup } from "redux/store/app/app.slice";
import { userService } from "services/userService";
import PopupWithForm from "./PopupWithForm";

function EditAvatarPopup(props) {
  const avatarRef = useRef();
  const dispatch = useDispatch();
  const isLoading = useSelector(updateUserAvatarStateSelector);
  function handleSubmit(e) {
    e.preventDefault();
    dispatch(userService.updateUserAvatar({ avatar: avatarRef.current.value }));
    dispatch(closePopup());
    avatarRef.current.value = ''
  }
  return (
    <PopupWithForm
      title="Обновить аватар"
      name="edit-avatar"
      loadingState={isLoading}
      loadingText="Обновление..."
      onSubmit={handleSubmit}
    >
      <div className="form__field">
        <input
          ref={avatarRef}
          required
          type="url"
          id="avatar"
          name="avatar"
          className="form__input"
          placeholder="Ссылка на новый аватар"
        />
        <span className="form__error avatar-error"></span>
      </div>
    </PopupWithForm>
  );
}

export default EditAvatarPopup;
