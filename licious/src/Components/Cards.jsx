import {
    Box,
    Center,
    useColorModeValue,
    Heading,
    Text,
    Stack,
    Image,
  } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
  
  const IMAGE =
    'https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/6be8c5e9-8946-8b76-5340-991d476cd255/original/rtc_july_6images-13.jpg?format=webp';
  
  export default function Cards({text,img}) {

    
    return (
      <Center py={12}>
        <Box
        
          role={'group'}
          p={6}
          maxW={'330px'}
          w={'full'}
          bg={useColorModeValue('white', 'gray.800')}
          boxShadow={'2xl'}
          rounded={'lg'}
          pos={'relative'}
          zIndex={1}>
          <Box
            rounded={'lg'}
            mt={-12}
            pos={'relative'}
            height={'230px'}
            _after={{
              transition: 'all .3s ease',
              content: '""',
              w: 'full',
              h: 'full',
              pos: 'absolute',
              top: 5,
              left: 0,
              backgroundImage: {img},
              filter: 'blur(15px)',
              zIndex: -1,
            }}
            _groupHover={{
              _after: {
                filter: 'blur(20px)',
              },
            }}>
                <Link to="/">
            <Image
              rounded={'lg'}
              height={230}
              width={282}
              objectFit={'cover'}
              
              src={img}
              />
              </Link>
          </Box>
          <Stack pt={10} align={'center'}>
            <Text color={'gray.500'} fontSize={'sm'} textTransform={'uppercase'}>
              {text}
            </Text>
            
            
          </Stack>
        </Box>
      </Center>
    );
  }