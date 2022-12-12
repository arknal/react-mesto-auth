import PopupWithForm from "./PopupWithForm";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateUserInfoSelector, userSelector } from "redux/selectors";
import { userService } from "services/userService";

function EditProfilePopup(props) {
  const isLoading = useSelector(updateUserInfoSelector);
  const currentUser = useSelector(userSelector);
  const dispatch = useDispatch();

  const [name, setName] = useState(currentUser.name);
  const [description, setDescription] = useState(currentUser.about);

  function handleNameChange(e) {
    setName(e.target.value);
  }
  function handleDescriptionChange(e) {
    setDescription(e.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault();
    dispatch(userService.updateUserInfo({
      name,
      about: description,
    }));
  }

  return (
    <PopupWithForm
      title="Редактировать профиль"
      name="edit-profile"
      loadingState={isLoading}
      loadingText="Обновление..."
      onSubmit={handleSubmit}
    >
      <div className="form__field">
        <input
          value={name}
          required
          minLength="2"
          maxLength="40"
          type="text"
          id="nameInput"
          name="name"
          className="form__input"
          placeholder="Введите имя"
          onChange={(e) => handleNameChange(e)}
        />
        <span className="form__error name-error"></span>
      </div>
      <div className="form__field">
        <input
          value={description}
          required
          minLength="2"
          maxLength="200"
          type="text"
          id="aboutInput"
          name="about"
          className="form__input"
          placeholder="Введите описание"
          onChange={(e) => handleDescriptionChange(e)}
        />
        <span className="form__error about-error"></span>
      </div>
    </PopupWithForm>
  );
}

export default EditProfilePopup;
