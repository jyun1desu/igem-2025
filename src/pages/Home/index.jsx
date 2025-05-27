import { Box, Flex, Text } from "@chakra-ui/react"
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import FullHeightSectionContainer from "@/components/FullHeightSectionContainer";
import { RotatingTags } from "../../components/RotatingTags";
import Carousel from "../../components/Carousel";
import { EXPLORE_MORE_LINKS } from "./const";
import RedHeartWithTearDrop, { NormalHeart } from "../../components/Heart";

const tags = ["fast", "accurate", "easy access", "portable", "cost-friendly"];

export const MotionBox = motion(Box);
export const MotionText = motion(Text);

const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

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
    const { ref: section1Ref, inView: section1InView } = useInView({ triggerOnce: true, threshold: 0.3 });
    const { ref: section2Ref, inView: section2InView } = useInView({ triggerOnce: true, threshold: 0.3 });
    const { ref: section3Ref, inView: section3InView } = useInView({ triggerOnce: true, threshold: 0.3 });
    const { ref: section4Ref, inView: section4InView } = useInView({ triggerOnce: true, threshold: 0.3 });
    const { ref: section5Ref, inView: section5InView } = useInView({ triggerOnce: true, threshold: 0.3 });

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
                    <MotionBox
                        ref={section1Ref}
                        variants={fadeInUp}
                        initial="hidden"
                        animate={section1InView ? "visible" : "hidden"}
                    >
                        <Text color="content.primary" textStyle="xl">Did you know that…</Text>
                        <Text color="content.primary" textStyle="2xl">
                            <HintText color="red">1/3</HintText> of the mortality cases are from <HintText color="red">heart diseases </HintText>
                        </Text>
                    </MotionBox>
                </SlideContainer>
            </FullHeightSectionContainer>
            <FullHeightSectionContainer>
                <SlideContainer>
                    <RedHeartWithTearDrop withAnimation={true} disableLeftDropAnimation={true} />
                    <MotionBox
                        ref={section2Ref}
                        variants={fadeInUp}
                        initial="hidden"
                        animate={section2InView ? "visible" : "hidden"}
                    >
                        <Text color="content.primary" textStyle="xl">
                            and specifically for <HintText color="red">cardiovascular diseases (CVDs)</HintText>,
                        </Text>
                        <Text color="content.primary" textStyle="2xl">
                            CVDs result in approximately <HintText color="red">18 million</HintText> deaths each year
                        </Text>
                    </MotionBox>
                </SlideContainer>
            </FullHeightSectionContainer>
            <FullHeightSectionContainer>
                <SlideContainer>
                    <RedHeartWithTearDrop withAnimation={false} />
                    <MotionBox
                        ref={section3Ref}
                        variants={fadeInUp}
                        initial="hidden"
                        animate={section3InView ? "visible" : "hidden"}
                    >
                        <Text color="content.primary" textStyle="xl">
                            as you are reading this …
                        </Text>
                        <Text color="content.primary" textStyle="2xl">
                            one person has already passed away due to <HintText color="red">CVDs</HintText>
                        </Text>
                    </MotionBox>
                </SlideContainer>
            </FullHeightSectionContainer>
            <FullHeightSectionContainer>
                <SlideContainer>
                    <RedHeartWithTearDrop withAnimation={false} />
                    <MotionBox
                        ref={section4Ref}
                        variants={fadeInUp}
                        initial="hidden"
                        animate={section4InView ? "visible" : "hidden"}
                    >
                        <Text color="content.primary" textStyle="xl">
                            Current clinical methods may accurately identify <HintText color="red" fontWeight={400}>CVDs</HintText>, but …
                        </Text>
                        <Text color="content.primary" textStyle="2xl">
                            people often suffer from <b>late diagnosis</b> or <b>insufficient resources</b>
                        </Text>
                    </MotionBox>
                </SlideContainer>
            </FullHeightSectionContainer>
            <FullHeightSectionContainer flexDirection="column" justifyContent="flex-start" alignItems="center">
                <Text textAlign="center" color="content.secondary" textStyle="xl">that is why we introduce</Text>
                <MotionBox
                    ref={section5Ref}
                    variants={fadeInUp}
                    initial="hidden"
                    animate={section5InView ? "visible" : "hidden"}
                >
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
                </MotionBox>
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
