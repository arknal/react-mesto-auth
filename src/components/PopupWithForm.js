import { useDispatch, useSelector } from 'react-redux';
import { currentPopupSelector } from '../redux/selectors';
import { closePopup } from '../redux/store/app/app.slice';

function PopupWithForm({
  title,
  name,
  children,
  onSubmit,
  confirmBtnText = 'Сохранить',
}) {
  const currentPopup = useSelector(currentPopupSelector);
  const dispatch = useDispatch();
  return (
    <div
      className={`popup popup_type_${
        name === currentPopup ? ' popup_opened' : ''
      }`}
      onMouseDown={(e) => {
        if (e.target.classList.contains('popup')) {
          dispatch(closePopup());
        }
      }}
    >
      <div className='popup__container'>
        <form className='form popup__form' name={name} onSubmit={onSubmit}>
          <h2 className='form__title'>{title}</h2>
          {children}
          <button className='form__submit-btn' type='submit'>
            {confirmBtnText}
          </button>
        </form>
        <button className='popup__close-btn' onClick={() => dispatch(closePopup())} />
      </div>
    </div>
  );
}

export default PopupWithForm;
