
import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    HStack,
    Stack,
    Button,
    Divider,
    Text,
    useColorModeValue,
    StackDivider,
  } 

from '@chakra-ui/react';
import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'
import { Heading } from '@chakra-ui/react'

const ClassInput = () => {
    return (
      <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
        <Flex
        minH={'100vh'}
        align={'center'}
        justify={'center'}
        bg={useColorModeValue('gray.50', 'gray.800')}>
        <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
          <Stack align={'center'}>
            <Text fontSize={'lg'} color={'gray.600'}>
              Please fill in course information accurately for a more accurate filtering process.
            </Text>
          </Stack>
          <Box
            rounded={'lg'}
            bg={useColorModeValue('white', 'gray.700')}
            boxShadow={'lg'}
            p={8}>
            <Stack spacing={4}>
              <HStack>
                <Box>
                  <FormControl id="Class ID">
                    <FormLabel>Class ID</FormLabel>
                    <Input type="text" />
                  </FormControl>
                </Box>
                <Box>
                  <FormControl id="Discussion ID">
                    <FormLabel>Discussion ID</FormLabel>
                    <Input type="text" />
                  </FormControl>
                </Box>
                <Box>
                  <FormControl id="Lab ID">
                    <FormLabel>Lab ID</FormLabel>
                    <Input type="text" />
                  </FormControl>
                </Box>
              </HStack>
              <FormControl id="Cource Code" isRequired>
                <FormLabel>Course Code</FormLabel>
                <Input type="text" />
              </FormControl>
              <FormControl id="Course Title" isRequired>
                <FormLabel>Course Title</FormLabel>
                <Input type="text" />
              </FormControl>
              <Stack spacing={10} pt={2}>
                <Button
                  loadingText="Submitting"
                  size="lg"
                  bg={'blue.400'}
                  color={'white'}
                  _hover={{
                    bg: 'blue.500',
                  }}>
                  Add Course
                </Button>
              </Stack>
              <Stack pt={6}>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
      <Flex>
        <Card>
          <CardHeader>
            <Heading size='md'>My Classes</Heading>
          </CardHeader>

          <CardBody>
            <Stack divider={<StackDivider />} spacing='4'>
              <Box>
                <Heading size='xs' textTransform='uppercase'>
                  COMPSCI 61A - Introduction to Program...
                </Heading>
                <Text color='purple.200' pt='2' fontSize='sm'>
                  Class # 13234   DIS 105  LAB 123
                </Text>
              </Box>
              <Box>
                <Heading size='xs' textTransform='uppercase'>
                  EECS 16A - Designing Information Device...
                </Heading>
                <Text color='purple.200' pt='2' fontSize='sm'>
                  Class # 51231   DIS 101  LAB 131
                </Text>
              </Box>
              <Box>
                <Heading size='xs' textTransform='uppercase'>
                  COMPSCI 61B - Data Structures
                </Heading>
                <Text color='purple.200' pt='2' fontSize='sm'>
                  Class # 12323   DIS 120  LAB 101
                </Text>
              </Box>
              <Box>
                <Heading size='xs' textTransform='uppercase'>
                  ANTHRO 2AC - Introduction to Archaeolo...
                </Heading>
                <Text color='purple.200' pt='2' fontSize='sm'>
                  Class # 12341   DIS 113 
                </Text>
              </Box>
            </Stack>
          </CardBody>
        </Card>
      </Flex>
    </Stack>
    );
  }
  
  export default ClassInput;
  