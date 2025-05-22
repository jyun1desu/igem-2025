import { Box, Flex, Text } from "@chakra-ui/react"

const FullHeightSectionContainer = ({ children, bg, ...props }) => {
    return (
        <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            px="28"
            py="12"
            bg={bg}
            width="100%"
            height="calc(100dvh - 70px)"
            {...props}
        >
            {children}
        </Box>
    )
}

const Home = () => {
    return (
        <Box pt="70px">
            <FullHeightSectionContainer>
                <Flex gap="6">
                    <Box>團隊 LOGO</Box>
                    <Box>
                        <Text
                            letterSpacing="2px"
                            fontWeight={600}
                            fontSize="90px"
                            color="content.tint1"
                            lineHeight={1}
                        >HeartBeaters</Text>
                        <Text color="content.secondary" textStyle="md" mt="3">
                        A nucleic acid-based biosensor for early diagnostic of cardiovascular diseases <Text as="span" color="content.red">cardiovascular diseases</Text>
                        </Text>
                    </Box>
                </Flex>
            </FullHeightSectionContainer>
        </Box>
    )
}

export default Home;
