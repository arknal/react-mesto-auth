import { $authHost } from '../utils/httpConfig';

export const cardController = {
  getInitialCards() {
    return $authHost.get('/cards').then(this.getResponseData);
  },

  addNewCard(props) {
    return $authHost.post('/cards', props).then(this.getResponseData);
  },

  deleteCard(id) {
    return $authHost.delete(`/cards/${id}`).then(() => id);
  },

  addLike(id) {
    return $authHost.put(`/cards/${id}/likes`).then(this.getResponseData);
  },

  removeLike(id) {
    return $authHost.delete(`/cards/${id}/likes`).then(this.getResponseData);
  },

  changeLikeStatus(id, isLiked) {
    return isLiked ? this.removeLike(id) : this.addLike(id);
  },

  addComment(id, message) {
    return $authHost.post(`/cards/${id}/comment`, {message}).then(this.getResponseData);
  },
  removeComment(cardId, commentId) {
    return $authHost.delete(`/cards/${cardId}/comment/${commentId}`).then(this.getResponseData);
  },
  getResponseData(res) {
    if (!(res.statusText === 'OK')) {
      return Promise.reject(res.data.message);
    }
    return res.data;
  },
};
