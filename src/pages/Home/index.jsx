import { Box, Flex, Stack, Text } from "@chakra-ui/react"
import FullHeightSectionContainer from "@/components/FullHeightSectionContainer";
import { RotatingTags } from "../../components/RotatingTags";
import Carousel from "../../components/Carousel";

const tags = ["fast", "accurate", "easy access", "portable", "cost-friendly"];

const HintText = ({ children }) => {
    return (
        <Text as="span" fontWeight={600} color="content.tint1">{children}</Text>
    )
}

const HeartBeatersText = () => {
    return (
        <Text
            letterSpacing="2px"
            fontWeight={600}
            fontSize="90px"
            color="content.tint1"
            lineHeight={1}
        >HeartBeaters</Text>
    )
};

const Home = () => {
    return (
        <Box>
            <FullHeightSectionContainer>
                <Flex gap="6" mb="10%">
                    <Box>團隊 LOGO</Box>
                    <Box>
                        <HeartBeatersText />
                        <Text color="content.primary" textStyle="md" mt="2">
                            A nucleic acid-based biosensor for early diagnostic of cardiovascular diseases <Text as="span" color="content.red">cardiovascular diseases</Text>
                        </Text>
                    </Box>
                </Flex>
            </FullHeightSectionContainer>
            <FullHeightSectionContainer flexDirection="column" justifyContent="flex-start" alignItems="center">
                <Text textAlign="center" color="content.secondary" textStyle="md">that is why we introduce</Text>
                <Flex gap="6" mx="auto" mt="15%" mb="auto">
                    <Box>團隊 LOGO</Box>
                    <Box>
                        <HeartBeatersText />
                        <Text color="content.secondary" textStyle="md" mt="2">
                            <Text as="span" mr="1">A nucleic acid-based biosensor for early diagnostic of <Text as="span" color="content.red">CVDs</Text> that is</Text>
                            <RotatingTags tags={tags} />
                        </Text>
                    </Box>
                </Flex>
            </FullHeightSectionContainer>
            <FullHeightSectionContainer flexDirection="column" justifyContent="flex-start" alignItems="center">
                <Text textAlign="center" color="content.secondary" textStyle="lg">
                    Our <HintText>diagnostic tool</HintText> is achieved by:
                </Text>
                <Box width="800px" mt="6">
                    <Carousel
                        items={['1', '2', '3', '4']}
                        renderItem={(item) => (
                            <Box
                                aspectRatio={5 / 3}
                                bg="bg.primary"
                                borderRadius="24px"
                                p="4"
                                textAlign="center"
                            >{item}</Box>
                        )}
                        infinite={false}
                        hideNavButtons={true}
                        indicatorPosition="right"
                    />
                </Box>
            </FullHeightSectionContainer>
        </Box>
    )
}

export default Home;
