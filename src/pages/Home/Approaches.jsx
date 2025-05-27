import { Box, Flex, Image, Stack, Text } from "@chakra-ui/react"
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import MiRNAImage from '@/assets/home/mainpage_highlight_miRNA.png'
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
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

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
                    <Text >
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

const PageTwo = () => {
    return 'PageT'
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