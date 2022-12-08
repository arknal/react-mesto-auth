import { useLayoutEffect } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import Header from './Header.js';
import Main from './Main';
import Footer from './Footer';
import Loader from './Loader';

import PopupWithForm from './PopupWithForm.js';
import ImagePopup from './ImagePopup';
import EditProfilePopup from './EditProfilePopup';
import EditAvatarPopup from './EditAvatarPopup.js';
import AddPlacePopup from './AddPlacePopup';

import Register from './Register.js';
import Login from './Login.js';
import ProtectedRoute from './ProtectedRoute.js';

import InfoTooltip from './InfoTooltip';
import { useDispatch, useSelector } from 'react-redux';
import { userService } from 'services/userService';
import { appLoaderSelector, userSelector } from 'redux/selectors';

function App() {
  const dispatch = useDispatch();
  const user = useSelector(userSelector);
  const appLoader = useSelector(appLoaderSelector);

  // function handleCardClick(card) {
  //   setSelectedCard(card);
  // }

  // function handleUpdateUser(info) {
  //   userController
  //     .updateUserInfo(info)
  //     .then(({ user }) => {
  //       setCurrentUser(user);
  //       closeAllPopups();
  //     })
  //     .catch((e) => console.log(e));
  // }
  // function handleUpdateAvatar(avatar) {
  //   userController
  //     .updateUserAvatar(avatar)
  //     .then(({ user }) => {
  //       setCurrentUser(user);
  //       closeAllPopups();
  //     })
  //     .catch((e) => console.log(e));
  // }
  // function handleCardLike(card) {
  //   cardController
  //     .changeLikeStatus(card._id, card.isLiked)
  //     .then((data) => {
  //       setCards((state) =>
  //         state.map((c) => (c._id === card._id ? data.card : c))
  //       );
  //     })
  //     .catch((e) => console.log(e));
  // }
  // function handleCardDelete(card) {
  //   cardController
  //     .deleteCard(card._id)
  //     .then(() => {
  //       setCards((state) => state.filter((c) => !(c._id === card._id)));
  //     })
  //     .catch((e) => console.log(e));
  // }
  // function handleAddPlaceSubmit(card) {
  //   cardController
  //     .addNewCard(card)
  //     .then((data) => {
  //       setCards([data.card, ...cards]);
  //       closeAllPopups();
  //     })
  //     .catch((e) => console.log(e));
  // }
  useLayoutEffect(() => {
    (async function () {
      await dispatch(userService.getUserInfo());
    })();
  }, []);

  return (
    <>
      <div
        style={{
          position: 'absolute',
          top: '0',
          bottom: '0',
          right: '0',
          left: '0',
          zIndex: '1',
          display: `${ appLoader ? 'block' : 'none'}`,
          backgroundColor: '#000'
        }}
      >
        <Loader />
      </div>
      <Header />
      <Switch>
        <Route path='/sign-up'>
          {!user._id ? <Register /> : <Redirect to='/' />}
        </Route>
        <Route path='/sign-in'>
          {!user._id ? <Login /> : <Redirect to='/' />}
        </Route>
        <ProtectedRoute exact path='/' loggedIn={user._id}>
          <Main />

          <Footer state={user.info} />

          
          <EditProfilePopup />
          <AddPlacePopup />
          <EditAvatarPopup />
          <PopupWithForm
            title='Вы&nbsp;уверены?'
            name='confirmation'
            confirmBtnText='Да'
          />

          <ImagePopup />
        </ProtectedRoute>
        <Route path='*'>
          <Redirect to={user._id ? '/' : '/sign-in'} />
        </Route>
      </Switch>
      <InfoTooltip />
    </>
  );
}

export default App;
