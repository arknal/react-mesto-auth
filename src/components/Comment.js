import {
  Box,
  Avatar,
  Flex,
  Heading,
  Text,
  Divider,
  IconButton,
} from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { cardService } from 'services/cardService';
import { AiOutlineDelete } from 'react-icons/ai';
import { useLayoutEffect, useState } from 'react';
import { userSelector } from 'redux/selectors';

const Comment = (props) => {
  const dispatch = useDispatch();
  const currentUser = useSelector(userSelector);

  const date = new Date(props.createdAt);
  const [commenter, setCommenter] = useState({});

  useLayoutEffect(() => {
    cardService.getOwnerInfo(props.user).then((res) => {
      setCommenter(res.user);
    });
  }, []);

  return (
    <Flex
      spacing='4'
      direction='column'
      padding='5px'
      boxSizing='border-box'
      w='100%'
    >
      <Flex flex='1' gap='4' marginBottom='10px'>
        <Avatar size='sm' name={props.name} src={commenter.avatar} />
        <Box flexGrow='1'>
          <Heading as='h3' fontSize='13px'>
            {commenter._id === props.owner._id ? `${commenter.name} (автор)` : commenter.name }
          </Heading>
          <Text fontSize='13px'>{commenter.about}</Text>
        </Box>
        {currentUser._id === commenter._id && (
          <IconButton
            aria-label='Search database'
            size='sm'
            variant='link'
            onClick={() => dispatch(cardService.deleteComment({cardId: props.cardId, commentId: props._id}))}
            icon={<AiOutlineDelete />}
          />
        )}
      </Flex>
      <Text
        fontSize='13px'
        width='100%'
        maxHeight='fit-content'
        wordBreak='break-all'
      >
        {props.message}
      </Text>
      <div className='flex-container'>
        <Text fontSize='13px'>
          {`${date.getDate()}.${date.getMonth()}.${date.getFullYear()} в ${date.getHours()}:${date.getMinutes()}`}
        </Text>
      </div>
      <Divider margin='10px 0' />
    </Flex>
  );
};

export default Comment;
