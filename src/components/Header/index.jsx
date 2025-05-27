import { Link, useLocation } from "react-router";
import { Box, Flex, Stack, Text } from "@chakra-ui/react"
import { NAVS, navConfig } from "@/configs/navigation";
import { useRef, useState } from "react";
import Logo from "../Logo";

const HEADER_HEIGHT = 70;
const navsOrder = [NAVS.HOME, NAVS.TEAM, NAVS.PROJECT, NAVS.WET_LAB, NAVS.DRY_LAB, NAVS.OUR_MODEL, NAVS.HUMAN_PRACTICE];

const navs = navsOrder.map(navKey => {
    return navConfig[navKey]
});

const NavItem = ({ nav, isActive, isHovered, currentTab, setHoveredItem }) => {
    const { label, children = [], href } = nav;
    const navButtonRef = useRef();

    const leftDistance = navButtonRef.current?.getBoundingClientRect()?.left || 0;
    return (
        <Box
            key={label}
            position="relative"
            p="4"
            onMouseEnter={() => {
                setHoveredItem(href)
            }}
            onMouseLeave={() => {
                setHoveredItem('')
            }}
        >
            <Link ref={navButtonRef}
                to={!children.length
                    ? href
                    : `${href}/${children[0].slug}`
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
                    {label}
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
                children.length ? (
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
                                {children.map(child => {
                                    const { label, slug } = child;
                                    const isActive = currentTab === slug;
                                    return (
                                        <Link
                                            key={label}
                                            to={`${href}/${slug}`}
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
                                                {label}
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
    const location = useLocation();
    const [hoveredItem, setHoveredItem] = useState('');

    const segments = location.pathname.split("/");
    const [_, section, currentTab ]= segments;

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
                >{
                        navs.map((nav) => {
                            const { id, href = '' } = nav
                            const isActive = `/${section}` === href;
                            const isHovered = hoveredItem === href;

                            return (
                                <NavItem
                                    key={id}
                                    nav={nav}
                                    currentTab={currentTab}
                                    isActive={isActive}
                                    isHovered={isHovered}
                                    setHoveredItem={setHoveredItem}
                                />
                            );
                        })
                    }</Flex>
            </Flex >
        </>
    )
}

export default Header;
