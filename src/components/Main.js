import Card from "./Card.js";
import { useDispatch, useSelector } from "react-redux";
import { appLoaderSelector, cardsSelector, userSelector } from "redux/selectors.js";
import { useLayoutEffect } from "react";
import { setIsLoading } from "redux/store/app/app.slice.js";

function Main(props) {
  const info = useSelector(userSelector);
  const appLoadingState = useSelector(appLoaderSelector);
  const dispatch = useDispatch();
  // useLayoutEffect(() => {
  //   if (isAuthorized) {
  //     setIsLoading(true);
  //     cardController
  //       .getInitialCards()
  //       .then(({ cards }) => {
  //         setCards(cards.reverse());
  //       })
  //       .catch((e) => console.log(e))
  //       .finally(() => setIsLoading(false));
  //   }
  // }, []);

  const { serviceCards, userCards } = useSelector(cardsSelector);
  return (
    <main className="content">
      <section className="profile">
        <div
          className="profile__avatar-container"
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
            />
          </div>
          <p className="profile__job">{info.about}</p>
        </div>
        <button
          className="profile__add-button"
          type="button"
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
        })}
      </section>
    </main>
  );
}

export default Main;
