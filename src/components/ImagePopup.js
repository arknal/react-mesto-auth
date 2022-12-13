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
  Center,
  Box
} from '@chakra-ui/react';
import { cardService } from 'services/cardService';
import { useEffect, useState } from 'react';
import Comment from './Comment';

function ImagePopup(props) {
  const dispatch = useDispatch();
  const card = useSelector(currentCardSelector);
  const [owner, setOwner] = useState({});

  useEffect(() => {
    cardService.getOwnerInfo(card.owner).then((res) => {
      setOwner(res.user);
    });
  }, [card]);

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
          <img src={card.link} alt={card.name} className='popup__card-img' />
          <div className='flex-container flex-container_direction_column popup__comment-block'>
            <div className='flex-container' style={{ width: '100%' }}>
              <Avatar
                size='md'
                src={owner ? owner.avatar : ''}
                icon={<SkeletonCircle size='8' />}
                marginRight='10px'
              />
              <div>
                <Text fontSize='sm'>
                  {owner ? owner.name : <Skeleton height='10px' width='80px' />}
                </Text>
                <Text fontSize='xs'>
                  {owner ? (
                    `${date.getDate()}.${date.getMonth()}.${date.getFullYear()} в ${date.getHours()}:${date.getMinutes()}`
                  ) : (
                    <Skeleton height='10px' width='60px' />
                  )}
                </Text>
              </div>
            </div>
            <Divider margin='15px 0' />
            <h2 className='popup__card-title'>{card.name}</h2>
            <Divider margin='15px 0' />
            <Wrap overflowY='scroll' padding='0 5px' maxHeight='300px'>
              <WrapItem w='100%'>
                <Comment />
              </WrapItem>
              <Divider margin='10px 0' />
              <WrapItem>
                <Comment />
              </WrapItem>
              <Divider margin='10px 0' />
              <WrapItem>
                <Comment />
              </WrapItem>
              <Divider margin='10px 0' />
              <WrapItem>
                <Comment />
              </WrapItem>
              <Divider margin='10px 0' />
            </Wrap>
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
