import { useDispatch, useSelector } from 'react-redux';
import { currentCardSelector } from 'redux/selectors';
import { setCurrentCard } from 'redux/store/app/app.slice';

function ImagePopup(props) {
  const dispatch = useDispatch();
  const card = useSelector(currentCardSelector);
  return (
    <div
      className={`popup popup_type_card-img${card.name ? ' popup_opened' : ''}`}
      onClick={(e) => {
        if (e.target.classList.contains('popup')) {
          dispatch(setCurrentCard({}));
        }
      }}
    >
      <div className='popup__container'>
        <img src={card.link} alt={card.name} className='popup__card-img' />
        <p className='popup__card-title'>{card.name}</p>
        <button
          className='popup__close-btn'
          onClick={() => dispatch(setCurrentCard({}))}
        ></button>
      </div>
    </div>
  );
}

export default ImagePopup;
