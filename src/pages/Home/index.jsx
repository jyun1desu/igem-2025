import { Box, Flex, Image, Stack, Text } from "@chakra-ui/react"
import FullHeightSectionContainer from "@/components/FullHeightSectionContainer";
import { RotatingTags } from "../../components/RotatingTags";
import Carousel from "../../components/Carousel";
import { EXPLORE_MORE_LINKS } from "./const";
import RedHeartWithTearDrop, { NormalHeart } from "../../components/Heart";

const tags = ["fast", "accurate", "easy access", "portable", "cost-friendly"];

const HintText = ({ children, color }) => {
    return (
        <Text as="span" fontWeight={600}
            color={color === 'red' ? 'content.red' : 'content.tint1'}>
            {children}
        </Text>
    )
}

const HeartBeatersText = () => {
    return (
        <Text
            letterSpacing="2px"
            fontWeight={600}
            fontSize="108px"
            color="content.tint1"
            lineHeight={1}
        >HeartBeaters</Text>
    )
};

const SlideContainer = ({ children, ...props }) => {
    return <Flex minWidth="956px" gap="6" mb="10%" alignItems="center" {...props}>{children}</Flex>
}

const Home = () => {
    return (
        <Box>
            <FullHeightSectionContainer>
                <SlideContainer>
                    <NormalHeart />
                    <Box>
                        <HeartBeatersText />
                        <Text color="content.primary" textStyle="xl" mt="2">
                            A nucleic acid-based biosensor for early diagnostic of <Text as="span" color="content.red">cardiovascular diseases</Text>
                        </Text>
                    </Box>
                </SlideContainer>
            </FullHeightSectionContainer>
            <FullHeightSectionContainer>
                <SlideContainer>
                    <RedHeartWithTearDrop withAnimation={true} hideRightDrop={true} />
                    <Box>
                        <Text color="content.primary" textStyle="xl">Did you know that…</Text>
                        <Text color="content.primary" textStyle="2xl">
                            <HintText color="red">1/3</HintText> of the mortality cases are from <HintText color="red">heart diseases </HintText>
                        </Text>
                    </Box>
                </SlideContainer>
            </FullHeightSectionContainer>
            <FullHeightSectionContainer>
                <SlideContainer>
                    <RedHeartWithTearDrop withAnimation={true} disableLeftDropAnimation={true} />
                    <Box>
                        <Text color="content.primary" textStyle="xl">
                            and specifically for <HintText color="red">cardiovascular diseases (CVDs)</HintText>,
                        </Text>
                        <Text color="content.primary" textStyle="2xl">
                            CVDs result in approximately <HintText color="red">18 million</HintText> deaths each year
                        </Text>
                    </Box>
                </SlideContainer>
            </FullHeightSectionContainer>
            <FullHeightSectionContainer>
                <SlideContainer>
                    <RedHeartWithTearDrop withAnimation={false} />
                    <Box>
                        <Text color="content.primary" textStyle="xl">
                            as you are reading this …
                        </Text>
                        <Text color="content.primary" textStyle="2xl">
                            one person has already passed away due to <HintText color="red">CVDs</HintText>
                        </Text>
                    </Box>
                </SlideContainer>
            </FullHeightSectionContainer>
                        <FullHeightSectionContainer>
                <SlideContainer>
                    <RedHeartWithTearDrop withAnimation={false} />
                    <Box>
                        <Text color="content.primary" textStyle="xl">
                            Current clinical methods may accurately identify <HintText color="red" fontWeight={400}>CVDs</HintText>, but …
                        </Text>
                        <Text color="content.primary" textStyle="2xl">
                            people often suffer from <b>late diagnosis</b> or <b>insufficient resources</b>
                        </Text>
                    </Box>
                </SlideContainer>
            </FullHeightSectionContainer>
            <FullHeightSectionContainer flexDirection="column" justifyContent="flex-start" alignItems="center">
                <Text textAlign="center" color="content.secondary" textStyle="xl">that is why we introduce</Text>
                <SlideContainer gap="6" mx="auto" mt="12%" mb="auto">
                    <NormalHeart />
                    <Box>
                        <HeartBeatersText />
                        <Text color="content.secondary" textStyle="xl" mt="2">
                            <Text as="span" mr="1">A nucleic acid-based biosensor for early diagnostic of <Text as="span" color="content.red">CVDs</Text> that is</Text>
                            <RotatingTags tags={tags} />
                        </Text>
                    </Box>
                </SlideContainer>
            </FullHeightSectionContainer>
            <FullHeightSectionContainer flexDirection="column" justifyContent="flex-start" alignItems="center">
                <Text textAlign="center" color="content.secondary" textStyle="xl">
                    Our <HintText>diagnostic tool</HintText> is achieved by:
                </Text>
                <Box width="800px" mt="6">
                    <Carousel
                        items={['1', '2', '3', '4']}
                        gap={0}
                        renderItem={(item) => (
                            <Box
                                aspectRatio={5 / 3}
                                bg="bg.primary"
                                borderRadius="24px"
                                p="4"
                                textAlign="center"
                            >{item}</Box>
                        )}
                        autoplayInterval={3000}
                        infinite={false}
                        hideNavButtons={true}
                        indicatorPosition="right"
                    />
                </Box>
            </FullHeightSectionContainer>
            <FullHeightSectionContainer flexDirection="column" minHeight="unset" pb="24">
                <Text textAlign="center" color="content.secondary" textStyle="xl">
                    Explore more
                </Text>
                <Box width="90%" maxWidth="1200px" mt="8">
                    <Carousel
                        items={EXPLORE_MORE_LINKS}
                        renderItem={(link) => (
                            <Box
                                as="a"
                                aspectRatio={7 / 8}
                                bg="bg.primary"
                                borderRadius="24px"
                                p="4"
                                textAlign="center"
                                display="flex"
                                alignItems="center"
                                justifyContent="center"
                                color="content.tint1"
                                width="200px"
                                textStyle="xl"
                            >
                                {link.label}
                            </Box>
                        )}
                        itemWidth={200}
                        gap={18}
                        infinite={false}
                        hideNavButtons={false}
                        hideIndicator={true}
                    />
                </Box>
            </FullHeightSectionContainer>
        </Box>
    )
}

export default Home;
