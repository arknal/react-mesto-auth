import { useDispatch, useSelector } from 'react-redux';
import { userSelector } from 'redux/selectors';
import { setCurrentCard } from 'redux/store/app/app.slice';
import { cardService } from 'services/cardService';
import { FaRegComment } from 'react-icons/fa';
import LikeIcon from './LikeIcon';
import { Image, Skeleton } from '@chakra-ui/react';
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
      <Image
        src={props.link}
        alt={props.name}
        className='card__image'
        fallback={ <Skeleton className='card__image' />}
        onClick={() => dispatch(setCurrentCard({...props, _id}))}
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
              <FaRegComment size='21px' />
              <span className='card__likes-counter'>{props.comments.length}</span>
            </button>
          </div>
        </div>
      </div>
    </article>
  );
};

export default Card;
