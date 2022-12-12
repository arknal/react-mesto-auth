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
import { getUserInfoStateSelector, userSelector } from 'redux/selectors';

function App() {
  const dispatch = useDispatch();
  const user = useSelector(userSelector);
  const appLoader = useSelector(getUserInfoStateSelector);

  useLayoutEffect(() => {
    dispatch(userService.getUserInfo());
  }, []);

  return (
    <>
      {appLoader && <Loader />} 
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
