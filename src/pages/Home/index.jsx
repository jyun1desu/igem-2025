import { Box, Flex, Text } from "@chakra-ui/react"
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import FullHeightSectionContainer from "@/components/FullHeightSectionContainer";
import { RotatingTags } from "../../components/RotatingTags";
import Carousel from "../../components/Carousel";
import { EXPLORE_MORE_LINKS } from "./const";
import { NormalHeart } from "../../components/Heart";
import Approaches from "./Approaches";
import StickyDescriptions from "./StickyDescriptions";

const tags = ["fast", "accurate", "easy access", "portable", "cost-friendly"];

export const MotionBox = motion.create(Box);
export const MotionText = motion.create(Text);

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

// export function useWheelScroll100dvh({ setIndex }) {
//     const isAnimating = useRef(false);

//     useEffect(() => {
//         const vhMinusOffset = window.innerHeight - 70;
//         document.body.style.overflow = 'hidden';

//         const handleWheel = throttle((e) => {
//             e.preventDefault();

//             if (isAnimating.current) return;
//             isAnimating.current = true;

//             const currentScroll = window.scrollY || window.pageYOffset;
//             const delta = e.deltaY;

//             let targetScroll = currentScroll;

//             if (delta > 0) {
//                 targetScroll = currentScroll + vhMinusOffset;
//             } else if (delta < 0) {
//                 targetScroll = currentScroll - vhMinusOffset;
//                 if (targetScroll < 0) targetScroll = 0;
//             }

//             window.scrollTo({
//                 top: targetScroll,
//                 behavior: "smooth",
//             });

//             setTimeout(() => {
//                 isAnimating.current = false;
//             }, 1000);
//         }, 1000);

//         window.addEventListener("wheel", handleWheel, { passive: false });

//         return () => {
//             document.body.style.overflow = '';
//             window.removeEventListener("wheel", handleWheel);
//             handleWheel.cancel();
//         };
//     }, []);
// }

const Home = () => {
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
            <StickyDescriptions />
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
                            <Text as="div" color="content.secondary" textStyle="xl" mt="2">
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
                <Approaches width="750px" mt="6" />
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
