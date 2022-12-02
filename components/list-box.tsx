import { IconButton } from '@chakra-ui/react';
import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'
import { Heading, Text, Spacer } from '@chakra-ui/react';
import { Avatar } from '@chakra-ui/react';
import { FaFacebook, FaInstagram, FaSnapchat } from 'react-icons/fa';

const ListBox = () => {

    return (
        <Card
        direction={{ base: 'column', sm: 'row' }}
        width='1000px'
        size='sm'
        padding='1px'
        overflow='hidden'
        variant='outline'
        >
            <CardHeader  ml='4'>
                <Avatar name='John Doe'/>
            </CardHeader>
            <CardBody ml='2'>
                <Heading size='sm' color='#414141'>John Doe</Heading>
                <Text py='1' size='sm' fontWeight='medium' color='#878787'>Hello!</Text>
            </CardBody>
            <Spacer></Spacer>
            <CardFooter mr='4' mt='2'>
                <IconButton aria-label='Facebook icon' ml={4} icon={<FaFacebook color='#414141'/>} isRound={true}></IconButton>
                <IconButton aria-label='Instagram icon' ml={4} icon={<FaInstagram color='#414141'/>} isRound={true}></IconButton>
                <IconButton aria-label='Snapchat icon' ml={4} icon={<FaSnapchat color='#414141'/>} isRound={true}></IconButton>
            </CardFooter>
        </Card>
    );
  };
  
export default ListBox;  