import Card from './Card.js';
import { useDispatch, useSelector } from 'react-redux';
import {
  getUserInfoStateSelector,
  serviceCardsSelector,
  userSelector,
} from 'redux/selectors.js';
import { useLayoutEffect } from 'react';
import { popupService } from '../services/popupService.js';
import { cardService } from 'services/cardService.js';
import Loader from './Loader.js';
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react';

function Main(props) {
  const info = useSelector(userSelector);
  const dispatch = useDispatch();
  useLayoutEffect(() => {
    dispatch(cardService.getInitialCards());
  }, []);
  const appLoader = useSelector(getUserInfoStateSelector);
  const serviceCards = useSelector(serviceCardsSelector);
  return (
    <>
      {appLoader && <Loader />}
      <main className='content'>
        <section className='profile'>
          <div
            className='profile__avatar-container'
            onClick={() => popupService.showEditAvatarPopup(dispatch)}
          >
            <img src={info.avatar} alt='Аватар' className='profile__avatar' />
            <div className='profile__edit-avatar' />
          </div>
          <div className='flex-container flex-container_direction_column profile__info'>
            <div className='flex-container'>
              <h1 className='profile__name'>{info.name}</h1>
              <button
                className='profile__edit-button'
                type='button'
                onClick={() => popupService.showEditProfilePopup(dispatch)}
              />
            </div>
            <p className='profile__job'>{info.about}</p>
          </div>
          <button
            className='profile__add-button'
            type='button'
            onClick={() => popupService.showAddPlacePopup(dispatch)}
          />
        </section>
        <Tabs variant='unstyled' marginTop='50px'>
          <TabList>
            <Tab
              color='#fff'
              borderBottom='2px solid transparent'
              fontSize='18px'
              _hover={{ opacity: '.8' }}
              _selected={{ borderBottom: '2px solid #fff' }}
            >
              Лента
            </Tab>
            <Tab
              color='#fff'
              fontSize='18px'
              borderBottom='2px solid transparent'
              _hover={{ opacity: '.8' }}
              _selected={{ borderBottom: '2px solid #fff' }}
            >
              Мои карточки
            </Tab>
          </TabList>

          <TabPanels>
            <TabPanel>
              <section className='gallery' ariadiv='Секция с картинками'>
                {serviceCards
                  .map((item) => {
                    return <Card {...item} key={item._id} />;
                  })
                  .reverse()}
              </section>
            </TabPanel>
            <TabPanel>
              <p>two!</p>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </main>
    </>
  );
}

export default Main;
