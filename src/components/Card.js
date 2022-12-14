import { useDispatch, useSelector } from 'react-redux';
import { userSelector } from 'redux/selectors';
import { setCurrentCard } from 'redux/store/app/app.slice';
import { cardService } from 'services/cardService';
import { GoComment } from 'react-icons/go';
import LikeIcon from './LikeIcon';

const Card = ({ _id, ...props }) => {
  const currentUser = useSelector(userSelector);
  const dispatch = useDispatch();
  const isOwn = currentUser._id === props.owner ? true : false;
  const isLiked = props.likes.some((account) => {
    return account._id === currentUser._id;
  });
  function handleDelete() {
    dispatch(cardService.deleteCard(_id));
  }
  return (
    <article className='card'>
      <img
        src={props.link}
        alt={props.name}
        className='card__image'
        onClick={() => dispatch(setCurrentCard(props))}
      />
      <div className='flex-container card__info'>
        <h2 className='card__title'>{props.name}</h2>
        {isOwn && (
          <button className='card__trash-btn' onClick={() => handleDelete()} />
        )}
        <div className='flex-container'>
          <div className='flex-container' style={{ marginRight: '10px' }}>
            <button
              onClick={() => dispatch(cardService.toggleLike({ _id, isLiked }))}
              className='card__btn'
            >
              <LikeIcon isLiked={isLiked} />{' '}
              <span className='card__likes-counter'>{props.likes.length}</span>
            </button>
          </div>
          <div className='flex-container'>
            <button
              className='card__btn'
            >
              <GoComment size='22px' />
              <span className='card__likes-counter'>0</span>
            </button>
          </div>
        </div>
      </div>
    </article>
  );
};

export default Card;
