import NavBar from '../components/nav-bar';
import { Grid, GridItem, Box } from '@chakra-ui/react';

export default function Home() {
  return (
    <>
      <NavBar homeImage={''} profileImage={''} />
      <Grid gap={20} templateColumns="repeat(3, 1fr)"></Grid>
    </>
  );
}
