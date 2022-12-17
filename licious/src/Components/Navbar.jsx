import {
    Box,
    Flex,
    Text,
    IconButton,
    Button,
    Stack,
    Collapse,
    Icon,
    Link,
    Popover,
    PopoverTrigger,
    PopoverContent,
    useColorModeValue,
    useBreakpointValue,
    useDisclosure,
  } from '@chakra-ui/react';
  import {Link as RouterLink} from "react-router-dom"
  import {
    
    
    PopoverHeader,
    PopoverBody,
    PopoverFooter,
    PopoverArrow,
    PopoverCloseButton,
  } from "@chakra-ui/react"
//   import AiOutlineShoppingCart from"react-icons"
//   import { AiOutlineShoppingCart } from 'react-icons/fa'
//   import { Icon, createIcon } from '@chakra-ui/react'
  import { Input } from '@chakra-ui/react'
  import {
    HamburgerIcon,
    CloseIcon,
    ChevronDownIcon,
    ChevronRightIcon,
  } from '@chakra-ui/icons';
  
  export default function Navbar() {
    const { isOpen, onToggle } = useDisclosure();
    
  
    return (
      <Box >
        <Flex
        h={'20'}
          bg={useColorModeValue('white', 'gray.800')}
          color={useColorModeValue('gray.600', 'white')}
          minH={'60px'}
          py={{ base: 2 }}
          px={{ base: 4 }}
          borderBottom={1}
          borderStyle={'solid'}
          borderColor={useColorModeValue('gray.200', 'gray.900')}
          align={'center'}>
          <Flex
            flex={{ base: 1, md: 'auto' }}
            ml={{ base: -2 }}
            display={{ base: 'flex', md: 'none' }}>
            <IconButton
              onClick={onToggle}
              icon={
                isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
              }
              variant={'ghost'}
              aria-label={'Toggle Navigation'}
            />
          </Flex>
          <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }}>
            <RouterLink to="/">

            <Text
              textAlign={useBreakpointValue({ base: 'center', md: 'left' })}
              fontFamily={'heading'}
              color={useColorModeValue('gray.800', 'white')}>
              <img src="https://www.licious.in/img/rebranding/licious-logo.svg" alt="Logo" />
            </Text>

                  </RouterLink>

           
              <Input w={"xl"} placeholder='Search for Any Delicious Product' style={{marginLeft:"80px"}} />
              {/* <cart/> */}
  
            <Flex display={{ base: 'none', md: 'flex' }} ml={10}>
              <DesktopNav />
            </Flex>
          </Flex>
  
          <Stack
            flex={{ base: 1, md: 0 }}
            justify={'flex-end'}
            direction={'row'}
            spacing={6}>
                <RouterLink to="/login">

                <Button
              as={'a'}
              fontSize={'sm'}
              fontWeight={400}
              variant={'link'}
              href={'#'}>
              Sign In
            </Button>
                  </RouterLink>
                  <RouterLink to="/login">

            <Button
              as={'a'}
              fontSize={'sm'}
              fontWeight={400}
              variant={'link'}
              href={'#'}>
                
                {/* <Popover>
  <PopoverTrigger>
  <Button
  as={'a'}
  fontSize={'sm'}
  fontWeight={400}
  variant={'link'}
  href={'#'}>
  Sign In
  </Button>
  </PopoverTrigger>
  <PopoverContent>
  <PopoverArrow />
  <PopoverCloseButton />
  <PopoverHeader>Confirmation!</PopoverHeader>
  <PopoverBody>Are you sure you want to have that milkshake?</PopoverBody>
  </PopoverContent>
</Popover> */}

            </Button>
</RouterLink>


            
            <Button
              display={{ base: 'none', md: 'inline-flex' }}
              fontSize={'sm'}
              fontWeight={600}
              color={'white'}
              bg={'pink.400'}
              href={'#'}
              _hover={{
                bg: 'pink.300',
              }}>
              Sign Up
            </Button>
            
          </Stack>
        </Flex>
  
        <Collapse in={isOpen} animateOpacity>
          <MobileNav />
        </Collapse>
      </Box>
    );
  }
  
  const DesktopNav = () => {
    const linkColor = useColorModeValue('gray.600', 'gray.200');
    const linkHoverColor = useColorModeValue('gray.800', 'white');
    const popoverContentBgColor = useColorModeValue('white', 'gray.800');
  
    return (
      <Stack direction={'row'} spacing={4}>
            
        {NAV_ITEMS.map((navItem) => (
            <Box key={navItem.label}>
            <Popover trigger={'hover'} placement={'bottom-start'}>
              <PopoverTrigger>
                <Link
                  p={2}
                  href={navItem.href ?? '#'}
                  fontSize={'sm'}
                  fontWeight={500}
                  color={linkColor}
                  _hover={{
                      textDecoration: 'none',
                      color: linkHoverColor,
                    }}>
                  {navItem.label}
                </Link>
              </PopoverTrigger>
  
                      <RouterLink to="/category">
              {navItem.children && (
                  <PopoverContent
                  border={0}
                  boxShadow={'xl'}
                  bg={popoverContentBgColor}
                  p={4}
                  rounded={'xl'}
                  minW={'sm'}>
                  <Stack>
                    {navItem.children.map((child) => (
                        <DesktopSubNav key={child.label} {...child} />
                        ))}
                  </Stack>
                </PopoverContent>
              )}
              </RouterLink>
            </Popover>
          </Box>
        ))}
      </Stack>
    );
  };
  
  const DesktopSubNav = ({ label, href, subLabel }: NavItem) => {
    return (
      <Link
        href={href}
        role={'group'}
        display={'block'}
        p={2}
        rounded={'md'}
        _hover={{ bg: useColorModeValue('pink.50', 'gray.900') }}>
        <Stack direction={'row'} align={'center'}>
          <Box>
            <Text
              transition={'all .3s ease'}
              _groupHover={{ color: 'pink.400' }}
              fontWeight={500}>
              {label}
            </Text>
            <Text fontSize={'sm'}>{subLabel}</Text>
          </Box>
          <Flex
            transition={'all .3s ease'}
            transform={'translateX(-10px)'}
            opacity={0}
            _groupHover={{ opacity: '100%', transform: 'translateX(0)' }}
            justify={'flex-end'}
            align={'center'}
            flex={1}>
            <Icon color={'pink.400'} w={5} h={5} as={ChevronRightIcon} />
          </Flex>
        </Stack>
      </Link>
    );
  };
  
  const MobileNav = () => {
    return (
      <Stack
        bg={useColorModeValue('white', 'gray.800')}
        p={4}
        display={{ md: 'none' }}>
                
            <RouterLink to="/category">
        {NAV_ITEMS.map((navItem) => (
            <MobileNavItem key={navItem.label} {...navItem} />
        ))}
            </RouterLink>
      </Stack>
    );
  };
  
  const MobileNavItem = ({ label, children, href }: NavItem) => {
    const { isOpen, onToggle } = useDisclosure();
  
    return (
      <Stack spacing={4} onClick={children && onToggle}>
        <Flex
          py={2}
          as={Link}
          href={href ?? '#'}
          justify={'space-between'}
          align={'center'}
          _hover={{
            textDecoration: 'none',
          }}>
          <Text
            fontWeight={600}
            color={useColorModeValue('gray.600', 'gray.200')}>
            {label}
          </Text>
          {children && (
            <Icon
              as={ChevronDownIcon}
              transition={'all .25s ease-in-out'}
              transform={isOpen ? 'rotate(180deg)' : ''}
              w={6}
              h={6}
            />
          )}
        </Flex>
  
        <Collapse in={isOpen} animateOpacity style={{ marginTop: '0!important' }}>
          <Stack
            mt={2}
            pl={4}
            borderLeft={1}
            borderStyle={'solid'}
            borderColor={useColorModeValue('gray.200', 'gray.700')}
            align={'start'}>
            {children &&
              children.map((child) => (
                <Link key={child.label} py={2} href={child.href}>
                  {child.label}
                </Link>
              ))}
          </Stack>
        </Collapse>
      </Stack>
    );
  };
  
  interface NavItem {
    label: string;
    subLabel?: string;
    children?: Array<NavItem>;
    href?: string;
  }
  
  const NAV_ITEMS: Array<NavItem> = [
    {
      label: 'Categories',
      children: [
        {
          label: "Today's Deals",
        //   subLabel: 'Trending Design to inspire you',
          href: '#',
        },
        {
          label: 'Chicken',
        //   subLabel: 'Up-and-coming Designers',
          href: '#',
        },
        {
            label: 'Mutton',
          //   subLabel: 'Up-and-coming Designers',
            href: '#',
          },
          {
            label: 'Fish And SeaFood',
          //   subLabel: 'Up-and-coming Designers',
            href: '#',
          },
          {
            label: 'Prawns',
          //   subLabel: 'Up-and-coming Designers',
            href: '#',
          },
          {
            label: 'Ready To Cook',
          //   subLabel: 'Up-and-coming Designers',
            href: '#',
          },
          {
            label: 'Eggs',
          //   subLabel: 'Up-and-coming Designers',
            href: '#',
          },
          {
            label: 'Spreads',
          //   subLabel: 'Up-and-coming Designers',
            href: '#',
          },
          {
            label: 'Cold Cuts',
          //   subLabel: 'Up-and-coming Designers',
            href: '#',
          },
      ],
    },
    {
      label: 'Login',
      children: [
        {
          label: "Login",
        //   subLabel: 'Find your dream design job',
          href: '/login',
        },
        // {
        //   label: 'Freelance Projects',
        //   subLabel: 'An exclusive list for contract work',
        //   href: '#',
        // },
      ],
    },

    
  ];

//   function cart()
//   {
//     <div>
// <AiOutlineShoppingCart/>
//     </div>
//   }