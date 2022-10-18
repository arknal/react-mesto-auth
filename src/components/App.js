import { useState, useLayoutEffect } from "react";
import { CurrentUserContext } from "./../contexts/CurrentUserContext";
import { Route, Switch, Redirect, useHistory } from "react-router-dom";

import { userApi } from "./../utils/UserApi";
import { api } from "../utils/Api";

import Header from "./Header.js";
import Main from "./Main";
import Footer from "./Footer";
import Loader from "./Loader";

import PopupWithForm from "./PopupWithForm.js";
import ImagePopup from "./ImagePopup";
import EditProfilePopup from "./EditProfilePopup";
import EditAvatarPopup from "./EditAvatarPopup.js";
import AddPlacePopup from "./AddPlacePopup";

import Register from "./Register.js";
import Login from "./Login.js";
import ProtectedRoute from "./ProtectedRoute.js";

import InfoTooltip from "./InfoTooltip";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isAuthorized, setIsAuthorized] = useState(false);

  const [currentUser, setCurrentUser] = useState({});
  const [email, setEmail] = useState("");

  const [cards, setCards] = useState([]);

  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false),
    [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false),
    [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false),
    [infoTooltipState, setInfoTooltipState] = useState({
      isOpen: false,
      status: false,
      text: "",
    });
  const [selectedCard, setSelectedCard] = useState({});

  const history = useHistory();

  function handleCardClick(card) {
    setSelectedCard(card);
  }

  function closeAllPopups() {
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setSelectedCard({});
  }

  function handleUpdateUser(info) {
    api
      .updateUserInfo(info)
      .then((res) => {
        setCurrentUser(res);
        closeAllPopups();
      })
      .catch((e) => console.log(e));
  }
  function handleUpdateAvatar(avatar) {
    api
      .updateUserAvatar(avatar)
      .then((res) => {
        setCurrentUser(res);
        closeAllPopups();
      })
      .catch((e) => console.log(e));
  }
  function handleCardLike(card) {
    api
      .changeLikeStatus(card._id, card.isLiked)
      .then((newCard) => {
        setCards((state) =>
          state.map((c) => (c._id === card._id ? newCard : c))
        );
      })
      .catch((e) => console.log(e));
  }
  function handleCardDelete(card) {
    api
      .deleteCard(card._id)
      .then(() => {
        setCards((state) => state.filter((c) => c._id === card._id));
      })
      .catch((e) => console.log(e));
  }
  function handleAddPlaceSubmit(card) {
    api
      .addNewCard(card)
      .then((newCard) => {
        setCards([newCard, ...cards]);
        closeAllPopups();
      })
      .catch((e) => console.log(e));
  }
  function handleSignout() {
    localStorage.clear();
    setCurrentUser({});
    setIsAuthorized(false);
  }
  function handleLogin(data) {
    return userApi
      .login(data)
      .then((res) => {
        localStorage.setItem("token", res.token);
        setIsAuthorized(true);
        setEmail(data.email);
      })
      .catch((e) => {
        let errorMsg;
        switch (e) {
          case 400:
            errorMsg = "Введены некорректные данные";
            break;
          case 401:
            errorMsg = "Неправильный логин или пароль";
            break;
          default:
            errorMsg = "Что-то пошло не так! Попробуйте ещё раз.";
        }
        setInfoTooltipState({
          isOpen: true,
          status: false,
          text: errorMsg,
        });
      });
  }

  function handleRegister(data) {
    return userApi
    .register(data)
    .then((res) => {
      setInfoTooltipState({
        isOpen: true,
        status: true,
        text: "Вы успешно зарегистрировались!",
      });
      setTimeout(() => {
        setInfoTooltipState({isOpen: false});
        history.push("/sign-in");
      }, 3000);
    })
    .catch((e) => {
      setInfoTooltipState({
        isOpen: true,
        status: false,
        text: e === 400 ? "Некорректно заполнено одно из полей " : "Что-то пошло не так! Попробуйте ещё раз.",
      });
    });
  }

  useLayoutEffect(() => {
    if (localStorage.getItem("token")) {
      userApi
        .checkToken(localStorage.getItem("token"))
        .then(({ data }) => {
          setIsAuthorized(true);
          setEmail(data.email);
        })
        .catch((e) => {
          console.log(e);
        });
    } else {
      setIsLoading(false);
    }
  }, []);
  useLayoutEffect(() => {
    if (isAuthorized) {
      setIsLoading(true);
      Promise.all([api.getUserInfo(), api.getInitialCards()])
        .then(([userData, initialCards]) => {
          setCards(initialCards);
          setCurrentUser(userData);
        })
        .catch((e) => console.log(e))
        .finally(() => setIsLoading(false));
    }
  }, [isAuthorized]);

  return isLoading ? (
    <div
      style={{
        position: "absolute",
        top: "0",
        bottom: "0",
        right: "0",
        left: "0",
      }}
    >
      <Loader />
    </div>
  ) : (
    <CurrentUserContext.Provider value={currentUser}>
      <Header onSignout={handleSignout} email={email} />
      <Switch>
        <Route path="/sign-up">
          {!isAuthorized ? (
            <Register onRegister={handleRegister} />
          ) : (
            <Redirect to="/" />
          )}
        </Route>
        <Route path="/sign-in">
          {!isAuthorized ? (
            <Login onLogin={handleLogin} />
          ) : (
            <Redirect to="/" />
          )}
        </Route>
        <ProtectedRoute exact path="/" loggedIn={isAuthorized}>
          <Main
            onAddPlace={setIsAddPlacePopupOpen}
            onEditAvatar={setIsEditAvatarPopupOpen}
            onEditProfile={setIsEditProfilePopupOpen}
            selectedCard={selectedCard}
            handleCardClick={handleCardClick}
            cards={cards}
            onCardLike={handleCardLike}
            onCardDelete={handleCardDelete}
          />

          <Footer />

          <EditProfilePopup
            onClose={closeAllPopups}
            isOpen={isEditProfilePopupOpen}
            onUpdateUser={handleUpdateUser}
          />

          <AddPlacePopup
            onClose={closeAllPopups}
            isOpen={isAddPlacePopupOpen}
            onAddPlace={handleAddPlaceSubmit}
          />

          <EditAvatarPopup
            isOpen={isEditAvatarPopupOpen}
            onClose={closeAllPopups}
            onUpdateAvatar={handleUpdateAvatar}
          />

          <PopupWithForm
            title="Вы&nbsp;уверены?"
            name="confirmation"
            confirmBtnText="Да"
          />

          <ImagePopup card={selectedCard} onClose={closeAllPopups} />
        </ProtectedRoute>
        <Route path="*">
          <Redirect to={isAuthorized ? "/" : "/sign-in"} />
        </Route>
      </Switch>
      <InfoTooltip state={infoTooltipState} onClose={setInfoTooltipState} />
    </CurrentUserContext.Provider>
  );
}

export default App;
