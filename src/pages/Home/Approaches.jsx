import { Box, Flex, Image, Stack, Text } from "@chakra-ui/react"
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import MiRNAImage from '@/assets/home/mainpage_highlight_miRNA.png'
import ThreeWJ from '@/assets/home/mainpage_highlight_3wj.png'
import SplitG4 from '@/assets/home/mainpage_highlight_splitG4.png'
import ThreeWJBlurred1 from '@/assets/home/mainpage_highlight_3wj_blurred1.png'
import ThreeWJBlurred2 from '@/assets/home/mainpage_highlight_3wj_blurred2.png'
import SplitG4Blurred from '@/assets/home/mainpage_highlight_splitG4_blurred.png'
import Carousel from "../../components/Carousel";
import Tag from "../../components/Tag";

const tags = ['miRNA #1', 'miRNA #2', 'miRNA #3', 'miRNA #4', 'miRNA #5']

const fadeInUp = {
    hidden: { opacity: 0, y: 5 },
    visible: (i) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: i * 0.8,
            duration: 0.6,
            ease: "easeOut",
        },
    }),
};

const MotionBox = motion(Box);
const MotionTag = motion(Tag);

const AnimatedTagList = ({ tags }) => {
    const { ref, inView } = useInView({ triggerOnce: false, threshold: 1 });

    console.log(inView)
    return (
        <MotionBox
            ref={ref}
            display="grid"
            gridTemplateColumns="repeat(3, 1fr)"
            gap="2"
            mt="2"
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={{}}
        >
            {tags.map((tag, index) => (
                <MotionTag
                    key={tag}
                    custom={index}
                    variants={fadeInUp}
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                    colorVariant="red"
                    fontWeight={400}
                    textStyle="md"
                    m="0"
                    py="2px"
                    px="6px"
                >
                    {tag}
                </MotionTag>
            ))}
        </MotionBox>
    );
};

const PageOne = () => {
    return (
        <Flex justifyContent="center" gap="2" mt="auto">
            <Stack>
                <Box flex="0 0 auto" textAlign="left" textStyle="3xl">
                    <Text color="content.secondary">
                        Capturing Multiple
                    </Text>
                    <Text color="content.red">
                        CVD-related
                    </Text>
                    <Text color="content.red" fontWeight={600}>
                        MicroRNAs (miRNAs)
                    </Text>
                </Box>
                <AnimatedTagList tags={tags} />
                <Tag
                    alignSelf="flex-start"
                    colorVariant="red"
                    fontWeight={400}
                    textStyle="sm"
                    px="3"
                    py="2px"
                    mt="auto"
                    mb="0"
                >laern more</Tag>
            </Stack>
            <Box flex="1 1 400px" mb="1">
                <Image width="100%" src={MiRNAImage} />
            </Box>
        </Flex>
    )
};

const Demonstrate = () => {
    const { ref, inView } = useInView({ triggerOnce: false, threshold: 1 });

    const renderPointer = ({ top, left, rotate }) => {
        return (
            <Box
                position="absolute"
                display="flex"
                alignItems="center"
                top={top}
                left={left}
                transform={`rotate(${rotate}deg)`}
            >
                <Box width="4px" height="4px" bg="content.tint1" borderRadius="100%" />
                <Box width="10px" height="1px" bg="content.tint1" />
            </Box>
        )
    }
    return (
        <Flex ref={ref} position="relative" flex="1 1 100%" flexDirection="column" px="6">
            <MotionBox custom={0} variants={fadeInUp} initial="hidden" animate={inView ? "visible" : "hidden"}>
                <Image width="180px" ml="40px" src={ThreeWJ} />
                <Image width="120px" ml="140px" mt="24px" src={SplitG4} />
            </MotionBox>
            <MotionBox custom={1}
                variants={fadeInUp}
                initial="hidden"
                animate={inView ? "visible" : "hidden"} position="absolute" left="0" top="0" width="100%" height="100%">
                <Image
                    width="140px"
                    position="absolute"
                    top="180px"
                    left="-12px"
                    src={ThreeWJBlurred1}
                />
                <Image
                    width="120px"
                    position="absolute"
                    top="80px"
                    right="-12px"
                    src={ThreeWJBlurred2}
                />
                <Image
                    width="100px"
                    position="absolute"
                    top="-24px"
                    left="-24px"
                    src={SplitG4Blurred}
                />
            </MotionBox>
            <MotionBox
                custom={2}
                variants={fadeInUp}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                position="absolute"
                left="0"
                top="0"
            >
                <Box left="204px" top="68px" position="absolute">
                    <Text color="content.tint1" textStyle="sm">Three-way Junction</Text>
                    {renderPointer({
                        top: "24px",
                        left: "6px",
                        rotate: -45,
                    })}
                </Box>
                <Box position="absolute" left="62px" top="170px">
                    <Text color="content.tint1" textStyle="sm">Split G-quadruplex</Text>
                    {renderPointer(
                        {
                            top: "26px",
                            left: "104px",
                            rotate: 225,
                        }
                    )}
                </Box>
            </MotionBox>
        </Flex>
    )
}

const PageTwo = () => {
    return (
        <Flex width="100%" justifyContent="center" gap="6">
            <Stack>
                <Box mt="auto" mb="24px" flex="0 0 auto" textAlign="left" textStyle="3xl">
                    <Text color="content.secondary">
                        Leveraging
                    </Text>
                    <Text color="content.tint1">
                        DNA Nanotechnologies:
                    </Text>
                    <Text color="content.tint1" fontWeight={600}>
                        Three-way Junction
                        <Text as="span" whiteSpace="pre-line" color="content.secondary" fontWeight={400}>{` & \n`}</Text>
                        <Text as="span" whiteSpace="nowrap">
                            Split G-quadruplexes
                        </Text>
                    </Text>
                </Box>
                <Tag
                    alignSelf="flex-start"
                    colorVariant="tint"
                    fontWeight={400}
                    textStyle="sm"
                    px="3"
                    py="2px"
                    mt="auto"
                    mb="0"
                >laern more</Tag>
            </Stack>
            <Demonstrate />
        </Flex>
    )
}
const PageThree = () => {
    return 'PageThree'
}
const PageFour = () => {
    return 'PageFour'
}

const Approaches = ({ ...props }) => {
    return (
        <Box {...props}>
            <Carousel
                items={[PageOne, PageTwo, PageThree, PageFour]}
                gap={0}
                renderItem={(item) => {
                    const Item = item;
                    return (
                        <Box
                            display="flex"
                            whiteSpace="nowrap"
                            witdth="750px"
                            height="360px"
                            bg="bg.primary"
                            borderRadius="24px"
                            p="6"
                            pt="8"
                            textAlign="center"
                        >
                            <Item />
                        </Box>
                    )
                }}
                infinite={false}
                hideNavButtons={true}
                indicatorPosition="right"
            />
        </Box>
    )
}

export default Approaches;