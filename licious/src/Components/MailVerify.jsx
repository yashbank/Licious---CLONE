import { Center, Heading } from '@chakra-ui/react';
import {
  Button,
  FormControl,
  Flex,
  Input,
  Stack,
  useColorModeValue,
  HStack,
} from '@chakra-ui/react';
import { PinInput, PinInputField } from '@chakra-ui/react';
<<<<<<< HEAD
=======
import { Link as RouterLink } from 'react-router-dom';
>>>>>>> 2c6bd50d961072af61ce41437336a503551f2211

export default function VerifyEmailForm(): JSX.Element {
  return (
    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}>
      <Stack
        spacing={4}
        w={'full'}
        maxW={'sm'}
        bg={useColorModeValue('white', 'gray.700')}
        rounded={'xl'}
        boxShadow={'lg'}
        p={6}
        my={10}>
        <Center>
          <Heading lineHeight={1.1} fontSize={{ base: '2xl', md: '3xl' }}>
            Verify your Email
          </Heading>
        </Center>
        <Center
          fontSize={{ base: 'sm', sm: 'md' }}
          color={useColorModeValue('gray.800', 'gray.400')}>
          We have sent code to your email
        </Center>
        <Center
          fontSize={{ base: 'sm', sm: 'md' }}
          fontWeight="bold"
          color={useColorModeValue('gray.800', 'gray.400')}>
          username@mail.com
        </Center>
        <FormControl>
          <Center>
            <HStack>
              <PinInput>
                <PinInputField />
                <PinInputField />
                <PinInputField />
                <PinInputField />
              </PinInput>
            </HStack>
          </Center>
        </FormControl>
<<<<<<< HEAD
        <Stack spacing={6}>
=======
            <RouterLink to="/">
        <Stack spacing={6}>

>>>>>>> 2c6bd50d961072af61ce41437336a503551f2211
          <Button
            bg={'blue.400'}
            color={'white'}
            _hover={{
<<<<<<< HEAD
              bg: 'blue.500',
=======
                bg: 'blue.500',
>>>>>>> 2c6bd50d961072af61ce41437336a503551f2211
            }}>
            Verify
          </Button>
        </Stack>
<<<<<<< HEAD
=======
                </RouterLink>
>>>>>>> 2c6bd50d961072af61ce41437336a503551f2211
      </Stack>
    </Flex>
  );
}