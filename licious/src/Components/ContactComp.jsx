import {
    Container,
    SimpleGrid,
    Image,
    Flex,
    Heading,
    Text,
    Stack,
    StackDivider,
    Icon,
    useColorModeValue,
  } from '@chakra-ui/react';
  import {
    IoAnalyticsSharp,
    IoLogoBitcoin,
    IoSearchSharp,
  } from 'react-icons/io5';
  import { ReactElement } from 'react';
  
  interface FeatureProps {
    text: string;
    iconBg: string;
    icon?: ReactElement;
  }
  
  const Feature = ({ text, icon, iconBg }: FeatureProps) => {
    return (
      <Stack direction={'row'} align={'center'}>
        <Flex
          w={8}
          h={8}
          align={'center'}
          justify={'center'}
          rounded={'full'}
          bg={iconBg}>
          {icon}
        </Flex>
        <Text fontWeight={600}>{text}</Text>
      </Stack>
    );
  };
  
  export default function ContactComp() {
    return (
      <Container maxW={'5xl'} py={12}>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
          <Stack spacing={4}>
            <Text
              textTransform={'uppercase'}
              color={'blue.400'}
              fontWeight={600}
              fontSize={'sm'}
              bg={useColorModeValue('blue.50', 'blue.900')}
              p={2}
              alignSelf={'flex-start'}
              rounded={'md'}>
              Our Story
            </Text>
            <Heading>Delivered Fresh
Everyday</Heading>
            <Text color={'gray.500'} fontSize={'lg'}>
            House of Licious, Zed Pearl, No 12, Domlur Layout
Bangalore, Karnataka - 560071 <br />
<br /><hr /><br />

When it comes to food, what is more comforting than a home-cooked chicken meal? Chicken recipes are always a favourite in households, as they are an ideal meal for any day of the week. A common type of poultry, this ‘white meat’ is a supper staple and can be used to rustle up quite a few delicious recipes. From adding flavour as a side dish, to being the heart of your elaborate home-cooked feast, chicken can be prepared in many ways. You can enjoy it baked, roasted; or turn it into a biryani, korma, butter masala, pasta, soup and more. 
<br /> <br /><hr /><br />
Chicken provides a good amount of nutrition and is also affordable, making it an ideal choice among food enthusiasts, and households. This white meat is known to support good health by providing high levels of lean protein, carbohydrates and fat.
At Licious, we strive to bring you the best cuts of chicken. We believe that food is best enjoyed when it's fresh, which is why we are so particular about what we put on your plate. The poultry from Licious is pasture-raised and carefully selected by experts, before it makes its way to your kitchen. Try our hygienic cuts of chicken legs, chicken breast, chicken curry pieces and more, to complement every dish of your choices
            </Text>
            <Stack
              spacing={4}
              divider={
                <StackDivider
                  borderColor={useColorModeValue('gray.100', 'gray.700')}
                />
              }>
              <Feature
                icon={
                  <Icon as={IoAnalyticsSharp} color={'yellow.500'} w={5} h={5} />
                }
                iconBg={useColorModeValue('yellow.100', 'yellow.900')}
                text={'How is Licious chicken sourced? '}
              />
              <Feature
                icon={<Icon as={IoLogoBitcoin} color={'green.500'} w={5} h={5} />}
                iconBg={useColorModeValue('green.100', 'green.900')}
                text={'Why should I choose Licious chicken?'}
              />
              <Feature
                icon={
                  <Icon as={IoSearchSharp} color={'purple.500'} w={5} h={5} />
                }
                iconBg={useColorModeValue('purple.100', 'purple.900')}
                text={'How long can I store chicken in the refrigerator?'}
              />
            </Stack>
          </Stack>
          <Flex>
            <Image
              rounded={'md'}
              alt={'feature image'}
              src={
                'https://s3-ap-southeast-1.amazonaws.com/liciousdev/Banner/aboutus_web_1920.jpg'
              }
              objectFit={'cover'}
            />
          </Flex>
        </SimpleGrid>
      </Container>
    );
  }