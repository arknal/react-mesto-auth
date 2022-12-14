import { useDispatch, useSelector } from 'react-redux';
import { currentCardSelector } from 'redux/selectors';
import { setCurrentCard } from 'redux/store/app/app.slice';
import {
  Skeleton,
  SkeletonCircle,
  Avatar,
  Text,
  Divider,
  Wrap,
  WrapItem,
  Image,
  Textarea,
  IconButton,
} from '@chakra-ui/react';
import { AiOutlineSend } from 'react-icons/ai';
import { cardService } from 'services/cardService';
import { useEffect, useState } from 'react';
import Comment from './Comment';

function ImagePopup(props) {
  const dispatch = useDispatch();
  const card = useSelector(currentCardSelector);
  const [owner, setOwner] = useState({});
  const [comment, setComment] = useState('');

  useEffect(() => {
    cardService.getOwnerInfo(card.owner).then((res) => {
      setOwner(res.user);
    });
  }, []);
  const date = new Date(card.createdAt);
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
        <div className='popup__content'>
          <Image
            src={card.link}
            alt={card.name}
            className='popup__card-img'
            fallback={
              <Skeleton>
                <img src={card.link} alt='' />
              </Skeleton>
            }
          />
          <div className='flex-container flex-container_direction_column popup__comment-block'>
            <div className='flex-container' style={{ width: '100%' }}>
              <Avatar
                size='md'
                src={owner ? owner.avatar : ''}
                icon={<SkeletonCircle size='8' />}
                marginRight='10px'
              />
              <div>
                {owner ? (
                  <>
                    <Text fontSize='sm'>{owner.name}</Text>
                    <Text fontSize='xs'>
                      {`${date.getDate()}.${date.getMonth()}.${date.getFullYear()} в ${date.getHours()}:${date.getMinutes()}`}
                    </Text>
                  </>
                ) : (
                  <>
                    <Skeleton height='10px' width='80px' />
                    <Skeleton height='10px' width='60px' />
                  </>
                )}
              </div>
            </div>
            <Divider margin='15px 0' />
            <h2 className='popup__card-title'>{card.name}</h2>
            <Divider margin='15px 0' />
            <Wrap
              padding='0 5px'
              width='100%'
              height='100%'
              className='popup__comment-wrapper'
            >
              {card.comments.length ? (
                card.comments
                  .map((item) => {
                    return (
                      <WrapItem w='100%' key={item._id}>
                        <Comment {...item} cardId={card._id} key={item._id} owner={owner} />
                      </WrapItem>
                    );
                  })
                  .reverse()
              ) : (
                <WrapItem w='100%'>
                  <Text
                    fontSize='13px'
                    color='black'
                    margin='30px 0'
                    w='100%'
                    textAlign='center'
                  >
                    Комментариев пока нет
                  </Text>
                </WrapItem>
              )}
            </Wrap>
            <form
              className='flex-container'
              style={{
                width: '100%',
                padding: '5px',
              }}
              onSubmit={(e) => {
                e.preventDefault();
                dispatch(
                  cardService.addComment({ id: card._id, message: comment })
                );
                setComment('');
              }}
            >
              <Textarea
                minHeight='50px'
                size='sm'
                resize='vertical'
                borderRadius='5px'
                placeholder='Оставьте комментарий'
                fontSize='13px'
                marginRight='10px'
                variant='unstyled'
                border='1px solid rgba(0, 0, 0, 0.08)'
                padding='10px'
                boxSizing='border-box'
                _focus={{ border: '1px solid #000' }}
                value={comment}
                required={true}
                onChange={(e) => setComment(e.target.value)}
              />
              <IconButton
                icon={<AiOutlineSend />}
                size='md'
                variant='ghost'
                type='submit'
              />
            </form>
          </div>
        </div>
        <button
          className='popup__close-btn popup__close-btn_img-popup'
          onClick={() => dispatch(setCurrentCard({}))}
        ></button>
      </div>
    </div>
  );
}

export default ImagePopup;
