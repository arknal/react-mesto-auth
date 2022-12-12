import { $authHost } from '../utils/httpConfig';

export const cardController = {
   getInitialCards() {
    return $authHost.get('/cards')
      .then(this.getResponseData);
},
  
 addNewCard(props) {
  return $authHost.post('/cards', props)
    .then(this.getResponseData);
},
  
 deleteCard(id) {
  return $authHost.delete(`/cards/${id}`)
    .then(this.getResponseData);
},
  
 addLike(id) {
  return $authHost.put(`/cards/${id}/likes`)
    .then(this.getResponseData);
},
  
 removeLike(id) {
  return $authHost.delete(`/cards/${id}/likes`)
    .then(this.getResponseData);
},
  
 changeLikeStatus(id, isLiked) {
    return isLiked ? this.removeLike(id) : this.addLike(id);
},
  
 getResponseData(res) {
  if (!(res.statusText === 'OK')) {
    return Promise.reject(res.data.message);
  }
  return res.data;
  }
}