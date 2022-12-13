import { Box, Avatar, Flex, Heading, Text } from '@chakra-ui/react';

const Comment = (props) => {
  return (
    <Flex spacing='4'>
      <Flex flex='1' gap='4' alignItems='center' flexWrap='wrap'>
        <Avatar size='sm' name='Segun Adebayo' src='https://bit.ly/sage-adebayo' />
        <Box>
          <Heading as='h3' fontSize='13px'>Segun Adebayo</Heading>
        </Box>
        <Box>
          <Text fontSize='13px'>Creator, Chakra UI</Text>
        </Box>
      </Flex>
    </Flex>
  );
};

export default Comment;
