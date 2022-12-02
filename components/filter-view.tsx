import { Button } from '@chakra-ui/react';
import { Menu, MenuButton, MenuList, MenuItem } from '@chakra-ui/react'
import { ChevronDownIcon } from '@chakra-ui/icons'

const FilterView = () => {
    return (
        <Menu>
        <MenuButton as={Button} rightIcon={<ChevronDownIcon/>} width='150px'>
            Matched
        </MenuButton>
        <MenuList>
            <MenuItem>Matched</MenuItem>
            <MenuItem>Requests</MenuItem>
            <MenuItem>Your Requests</MenuItem>
        </MenuList>
        </Menu>
    );
};

export default FilterView;  