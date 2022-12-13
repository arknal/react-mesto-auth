import { $authHost, $host } from '../utils/httpConfig';

const userController = {
  login(props) {
    return $host.post('/signin', props).then(this.getResponseData);
  },

  register(props) {
    return $host.post('/signup', props).then(this.getResponseData);
  },

  getUserInfo() {
    return $authHost.get('/users/me').then(this.getResponseData);
  },

  updateUserInfo(props) {
    return $authHost.patch('/users/me', props).then(this.getResponseData);
  },

  updateUserAvatar(props) {
    return $authHost
      .patch('/users/me/avatar', props)
      .then(this.getResponseData);
  },

  getResponseData(res) {
    if (!(res.statusText === 'OK')) {
      return Promise.reject(res.data.message);
    }
    return res.data;
  },
};

export default userController;
