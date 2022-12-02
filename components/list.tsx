import ListBox from './list-box';
import { VStack } from '@chakra-ui/react';

const List = () => {
    return (
        <VStack spacing={1}>
            <ListBox/>
            <ListBox/>
            <ListBox/>
            <ListBox/>
            <ListBox/>
        </VStack>
    );
};

export default List;  