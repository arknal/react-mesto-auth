import Card from "./Card.js";
import { useDispatch, useSelector } from "react-redux";
import { serviceCardsSelector, userSelector } from "redux/selectors.js";
import { useLayoutEffect } from "react";
import { popupService } from "../services/popupService.js";
import { cardService } from "services/cardService.js";

function Main(props) {
  const info = useSelector(userSelector);
  const dispatch = useDispatch();
  useLayoutEffect(() => {
    dispatch(cardService.getInitialCards())
  }, []);

  const serviceCards = useSelector(serviceCardsSelector);
  return (
    <main className="content">
      <section className="profile">
        <div
          className="profile__avatar-container"
          onClick={() => popupService.showEditAvatarPopup(dispatch)}
        >
          <img
            src={info.avatar}
            alt="Аватар"
            className="profile__avatar"
          />
          <div className="profile__edit-avatar" />
        </div>
        <div className="flex-container flex-container_direction_column profile__info">
          <div className="flex-container">
            <h1 className="profile__name">{info.name}</h1>
            <button
              className="profile__edit-button"
              type="button"
              onClick={() => popupService.showEditProfilePopup(dispatch)}
            />
          </div>
          <p className="profile__job">{info.about}</p>
        </div>
        <button
          className="profile__add-button"
          type="button"
          onClick={() => popupService.showAddPlacePopup(dispatch)}
        />
      </section>
      <section className="gallery" ariadiv="Секция с картинками">
        {serviceCards.map((item) => {
          return (
            <Card
              {...item}
              key={item._id}
            />
          );
        }).reverse()}
      </section>
    </main>
  );
}

export default Main;
