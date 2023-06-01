import React from "react";
import { popupService } from "services/popupService.js";
import { useDispatch, useSelector } from "react-redux";
import { userSelector } from "../../redux/selectors";
import Avatar from "../../entities/user/ui/avatar";

const Profile = () => {
  const user = useSelector(userSelector);
  const dispatch = useDispatch();
  return (
    <section className="profile">
      <div
        className="profile__avatar-container"
        onClick={() => popupService.showEditAvatarPopup(dispatch)}
      >
        <Avatar src={user.avatar} alt={user.name} />
        <div className="profile__edit-avatar" />
      </div>
      <div className="flex-container flex-container_direction_column profile__info">
        <div className="flex-container">
          <h1 className="profile__name">{user.name}</h1>
          <button
            className="profile__edit-button"
            type="button"
            onClick={() => popupService.showEditProfilePopup(dispatch)}
          />
        </div>
        <p className="profile__job">{user.about}</p>
      </div>
      <button
        className="profile__add-button"
        type="button"
        onClick={() => popupService.showAddPlacePopup(dispatch)}
      />
    </section>
  );
};

export default Profile;
