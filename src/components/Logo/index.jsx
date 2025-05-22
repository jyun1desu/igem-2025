import { Box, Flex, Heading, Text } from "@chakra-ui/react"
import { Link } from "react-router";

const Logo = () => {
    return (
        <Link to="/">
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