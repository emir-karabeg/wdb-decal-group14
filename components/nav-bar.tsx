import { Box } from '@chakra-ui/react';

interface navBarProps {
  homeImage: string;
  profileImage: string;
}

const NavBar = (props: navBarProps) => {
  return (
    <>
      <img src={props.homeImage} />
      <img src={props.profileImage} />
    </>
  );
};

export default NavBar;
