import NavBar from '../components/nav-bar';
import List from '../components/list';
import FilterView from '../components/filter-view';
import { Stack, VStack, Spacer} from '@chakra-ui/react';


export default function Matches() {
    return (
      <>
        <VStack>
          <NavBar homeImage={''} profileImage={''} />
          <Spacer/>
          <Stack>
            <FilterView/>
            <List/>
          </Stack>
      </VStack>
      </>
    );
  }
  