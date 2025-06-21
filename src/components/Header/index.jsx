import { Link, useLocation } from "react-router";
import { Box, Flex, Stack, Text } from "@chakra-ui/react"
import { useRef, useState } from "react";
import Logo from "../Logo";
import pages from "../../pages";

const HEADER_HEIGHT = 70;

const NavItem = ({ nav, isActive, isHovered, currentPath, setHoveredItem }) => {
    const { name, folder = [], path, label } = nav;
    const navButtonRef = useRef();

    const leftDistance = navButtonRef.current?.getBoundingClientRect()?.left || 0;
    return (
        <Box
            key={label}
            position="relative"
            p="4"
            onMouseEnter={() => {
                setHoveredItem(name)
            }}
            onMouseLeave={() => {
                setHoveredItem('')
            }}
        >
            <Link ref={navButtonRef}
                to={path
                    ? path
                    : folder[0].path
                }
                onClick={() => {
                    setHoveredItem('')
                }}
            >
                <Text
                    position="relative"
                    whiteSpace="nowrap"
                    color={isActive ? 'content.tint2' : 'content.primary'}
                    _hover={{
                        color: 'content.tint2',
                    }}
                >
                    {name}
                    <Box
                        as="span"
                        display="block"
                        position="absolute"
                        top="calc(100% + 2px)"
                        width={isHovered ? '100%' : 0}
                        height="2px"
                        bg="content.tint2"
                        borderRadius="10px"
                        transition="0.2s all"
                    />
                </Text>
            </Link>

            {
                folder.length ? (
                    <>
                        <Box
                            display={isHovered ? 'block' : 'none'}
                            top={`${HEADER_HEIGHT - 8}px`}
                            left="0"
                            position="fixed"
                            width="100dvw"
                            bg="white"
                        >
                            <Stack
                                gap="3"
                                position="relative"
                                left={`${leftDistance}px`}
                                pt="2"
                                pb="4"
                            >
                                {folder.map(child => {
                                    const { name, path, title } = child;
                                    const isActive = currentPath === path;
                                    return (
                                        <Link
                                            key={name}
                                            to={path}
                                            onClick={() => {
                                                setHoveredItem('')
                                            }}
                                        >
                                            <Text
                                                color={isActive ? 'content.tint2' : 'content.primary'}
                                                _hover={{
                                                    color: 'content.tint2',
                                                }}
                                                whiteSpace="nowrap"
                                            >
                                                {title}
                                            </Text>
                                        </Link>
                                    )
                                })}
                            </Stack>
                        </Box>
                    </>
                ) : null
            }
        </Box>
    )

};

const Header = () => {
    const { pathname: currentPath } = useLocation();
    const [hoveredItem, setHoveredItem] = useState('');

    return (
        <>
            <Flex
                minWidth="1100px"
                height={`${HEADER_HEIGHT}px`}
                alignItems="center"
                px="20"
                py="4"
                gap="12"
                zIndex={99}
                bg="white"
                position="fixed"
                width="100%"
            >
                <Box>
                    <Logo />
                </Box>
                <Flex ml="auto"
                    onMouseLeave={() => {
                        setHoveredItem('')
                    }}
                >{pages.map((nav) => {
                    const { name, path, folder = [] } = nav
                    const isActive = currentPath === path || folder.some(nav => nav.path === currentPath);
                    const isHovered = hoveredItem === name;

                    return (
                        <NavItem
                            key={name}
                            nav={nav}
                            currentPath={currentPath}
                            isActive={isActive}
                            isHovered={isHovered}
                            setHoveredItem={setHoveredItem}
                        />
                    );
                })}
                </Flex>
            </Flex >
        </>
    )
}

export default Header;
