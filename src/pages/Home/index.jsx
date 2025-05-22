import { Box, Flex, Text } from "@chakra-ui/react"
import FullHeightSectionContainer from "@/components/FullHeightSectionContainer";

const Home = () => {
    return (
        <Box>
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
                        <Text color="content.primary" textStyle="md" mt="2">
                        A nucleic acid-based biosensor for early diagnostic of cardiovascular diseases <Text as="span" color="content.red">cardiovascular diseases</Text>
                        </Text>
                    </Box>
                </Flex>
            </FullHeightSectionContainer>
        </Box>
    )
}

export default Home;
