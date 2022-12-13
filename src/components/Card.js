import { useDispatch, useSelector } from 'react-redux';
import { userSelector } from 'redux/selectors';
import { setCurrentCard } from 'redux/store/app/app.slice';
import { cardService } from 'services/cardService';

const Card = ({_id, ...props}) => {
  const currentUser = useSelector(userSelector);
  const dispatch = useDispatch();
  const isOwn = currentUser._id === props.owner ? true : false;
  const isLiked = props.likes.some((account) => {
    return account._id === currentUser._id;
  });
  const cardLikeButtonClassName = `card__like-btn ${
    isLiked && 'card__like-btn_liked'
  }`;
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
        <div className='flex-container flex-container_direction_column'>
        <button className={cardLikeButtonClassName} type='button' onClick={() => dispatch(cardService.toggleLike({_id, isLiked}))} />
          <span className='card__likes-counter'>{props.likes.length}</span>
        </div>
      </div>
    </article>
  );
};

export default Card;
