import userController from 'controllers/userController';

export const authService = {
  login: (data) => {
    return userController.login(data);
  },
  register: (data) => {
    return userController.register(data);
  },
  setToken(token) {
    localStorage.setItem("token", token);
  },
  removeToken() {
    localStorage.removeItem("token");
  }
};
