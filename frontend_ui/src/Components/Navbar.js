import { Avatar, Box, Button, Center, Flex, Menu, MenuButton, MenuDivider, MenuItem, MenuList, Stack, useColorMode, useColorModeValue, Image } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom';
import '../Styles/Comman.css';
import { ReactNode } from 'react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import './navbar.css';


const NavLink = ({ children }: { children: ReactNode }) => (
    <Link
        px={2}
        py={1}
        rounded={'md'}
        _hover={{
            textDecoration: 'none',
            bg: useColorModeValue('gray.200', 'gray.700'),
        }}
        href={'#'}>
        {children}
    </Link>
);


const Navbar = () => {
    const { colorMode, toggleColorMode } = useColorMode();

    return (
        <>
            <Box bg={useColorModeValue('goldenrod', 'gray.900')} px={4} mb="5%">
                <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
                    <Link to="/"> <Image className='icon' w="40px" src="./logo.svg" alt='logo' /> </Link>

                    <Link className='icon' to="/">Users</Link>
                    <Link className='icon' to="/posts">Posts</Link>

                    <Flex alignItems={'center'}>
                        <Stack direction={'row'} spacing={7}>
                            <Button className='icon' onClick={toggleColorMode}>
                                {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
                            </Button>

                            <Menu>
                                <MenuButton
                                    className='icon'
                                    as={Button}
                                    rounded={'full'}
                                    variant={'link'}
                                    cursor={'pointer'}
                                    minW={0}>
                                    <Avatar
                                        size={'sm'}
                                        src={"profile"}
                                    />
                                </MenuButton>
                                <MenuList alignItems={'center'}>
                                    <br />
                                    <Center>
                                        <Avatar
                                            size={'2xl'}
                                            src={"profile"}
                                        />
                                    </Center>
                                    <br />
                                    <MenuDivider />
                                    <MenuItem> <Link to="/" className='Link'>Users</Link></MenuItem>
                                    <MenuItem><Link to="/posts" className='Link'>Posts</Link></MenuItem>
                                </MenuList>
                            </Menu>
                        </Stack>
                    </Flex>
                </Flex>
            </Box>
        </>
    );
}

export default Navbar;