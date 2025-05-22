import { Box, Flex, Heading, Text } from "@chakra-ui/react"
import { Link, useLocation } from "react-router";

const Logo = () => {
    const { pathname } = useLocation();
    return (
        <Link to="/" onClick={() => {
            if (pathname === '/') {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }
        }}>
            <Flex
                alignItems="center"
                gap="2"
            >
                <Box>LOGO</Box>
                <Box>
                    <Text color="content.secondary" textStyle="2xs">Labi-Kcislk-Taiwan</Text>
                    <Heading color="content.tint1" textStyle="lg" lineHeight={1.1}>HeartBeaters</Heading>
                </Box>
            </Flex>
        </Link>
    )
}

export default Logo;