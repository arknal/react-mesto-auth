import userController from 'controllers/userController';
import { logoutAction } from 'redux/store/user/user.slice';

export const authService = {
  login (data) {
    return userController.login(data)
      .then(res => this.setToken(res.token))
  },
  register (data) {
    return userController.register(data);
  },
  logout (dispatch) {
    this.removeToken();
    dispatch(logoutAction());
  },
  setToken(token) {
    localStorage.setItem("token", token);
  },
  removeToken() {
    localStorage.removeItem("token");
  }
};
