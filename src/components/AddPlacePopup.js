import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { cardService } from 'services/cardService';
import { closePopup } from 'redux/store/app/app.slice';
import PopupWithForm from './PopupWithForm';

function AddPlacePopup() {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [link, setLink] = useState('');

  function handleNameChange(e) {
    setName(e.target.value);
  }
  function handleLinkChange(e) {
    setLink(e.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault();
    dispatch(cardService.addNewCard({ name, link }));
    dispatch(closePopup());
    setLink('');
    setName('');
  }
  return (
    <PopupWithForm
      title='Новое место'
      name='add-place'
      confirmBtnText='Создать'
      onSubmit={handleSubmit}
    >
      <div className='form__field'>
        <input
          value={name}
          onChange={(e) => handleNameChange(e)}
          required
          type='text'
          minLength='2'
          maxLength='30'
          name='name'
          id='cardTitleInput'
          className='form__input'
          placeholder='Название'
        />
        <span className='form__error name-error'></span>
      </div>
      <div className='form__field'>
        <input
          value={link}
          onChange={(e) => handleLinkChange(e)}
          required
          type='url'
          id='cardImgLinkInput'
          name='link'
          className='form__input'
          placeholder='Ссылка на картинку'
        />
        <span className='form__error link-error'></span>
      </div>
    </PopupWithForm>
  );
}

export default AddPlacePopup;
