import { Box, Flex, Image, Stack, Text } from "@chakra-ui/react"
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import MiRNAImage from '@/assets/home/mainpage_highlight_miRNA.png'
import ThreeWJ from '@/assets/home/mainpage_highlight_3wj.png'
import SplitG4 from '@/assets/home/mainpage_highlight_splitG4.png'
import ThreeWJBlurred1 from '@/assets/home/mainpage_highlight_3wj_blurred1.png'
import ThreeWJBlurred2 from '@/assets/home/mainpage_highlight_3wj_blurred2.png'
import SplitG4Blurred from '@/assets/home/mainpage_highlight_splitG4_blurred.png'
import SensorS from '@/assets/home/mainpage_highlight_small_sensor.png'
import SensorL from '@/assets/home/mainpage_highlight_big_sensor.png'
import Arrow from '@/assets/home/arrow.svg'
import MachineLearning1 from '@/assets/home/atoms_1.svg'
import MachineLearning2 from '@/assets/home/atoms_2.svg'
import MachineLearning3 from '@/assets/home/atoms_3.svg'
import MachineLearning4 from '@/assets/home/atoms_4.svg'
import Carousel from "../../components/Carousel";
import Tag from "../../components/Tag";

const tags = ['miRNA #1', 'miRNA #2', 'miRNA #3', 'miRNA #4', 'miRNA #5']

const fadeInUp = {
    hidden: { opacity: 0, y: 3 },
    visible: (i) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: i * 0.4,
            duration: 0.6,
            ease: "easeOut",
        },
    }),
};

const MotionBox = motion(Box);
const MotionTag = motion(Tag);

const Pointer = ({ top, left, rotate, color = "content.tint1", width = 10, withEnd = false, endWidth = 4 }) => {
    return (
        <Box
            position="absolute"
            display="flex"
            alignItems="center"
            top={top}
            left={left}
            transform={`rotate(${rotate}deg)`}
        >
            <Box width={`${endWidth}px`} height={`${endWidth}px`} bg={color} borderRadius="100%" />
            <Box width={`${width}px`} borderRadius="8px" position="relative" left="-1px" height="1px" bg={color} />
            {withEnd ? <Box width={`${endWidth}px`} height={`${endWidth}px`} bg={color} borderRadius="100%" position="relative" left="-2px" /> : null}
        </Box>
    )
};

const AnimatedTagList = ({ tags }) => {
    const { ref, inView } = useInView({ triggerOnce: false, threshold: 1 });
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
                >learn more</Tag>
            </Stack>
            <Box flex="1 1 400px" mb="1">
                <Image width="100%" src={MiRNAImage} />
            </Box>
        </Flex>
    )
};

const Demonstrate = () => {
    const { ref, inView } = useInView({ triggerOnce: false, threshold: 1 });

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
                    <Pointer top="24px" left="6px" rotate="-45" />
                </Box>
                <Box position="absolute" left="62px" top="170px">
                    <Text color="content.tint1" textStyle="sm">Split G-quadruplex</Text>
                    <Pointer top="26px" left="104px" rotate="225" />

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
                >learn more</Tag>
            </Stack>
            <Demonstrate />
        </Flex>
    )
}

const MachineLearning = () => {
    const { ref, inView } = useInView({ triggerOnce: false, threshold: 1 });

    return (
        <Flex ref={ref} flex="1 1 auto" gap="6" position="relative">
            <MotionBox display="flex" flexDirection="column" gap="0" custom={0} variants={fadeInUp} initial="hidden" animate={inView ? "visible" : "hidden"}>
                <Image width="120px" src={MachineLearning4} />
                <Text
                    textAlign="center"
                    whiteSpace="pre-line"
                    textStyle="xs"
                >
                    {`Pre-trained\nMachine Learning\nModels`}
                </Text>
                <Image mt="auto" width="120px" src={MachineLearning4} />
                <Text
                    textAlign="center"
                    whiteSpace="pre-line"
                    textStyle="xs"
                >
                    {`Pre-trained\nMachine Learning\nModels`}
                </Text>
            </MotionBox>
            <Box position="relative">
                <MotionBox display="flex" flexDirection="column" alignItems="center" position="relative" custom={1} variants={fadeInUp} initial="hidden" animate={inView ? "visible" : "hidden"}>
                    <Flex alignItems="flex-start" position="relative">
                        <Image objectFit="contain" flex="0 0 auto" width="160px" src={MachineLearning1} />
                        <Image objectFit="contain" flex="0 0 auto" width="100px" position="relative" top="-30px" left="-26px" src={MachineLearning3} />
                        <Image position="absolute" top="-35px" right="72px" width="90px" src={Arrow} />
                    </Flex>
                    <Image width="110px" src={MachineLearning2} />
                </MotionBox>
                <MotionBox top="0" left="0" position="absolute" custom={2} variants={fadeInUp} initial="hidden" animate={inView ? "visible" : "hidden"}>
                    <Box position="absolute" top="0" left="20px" textAlign="right">
                        <Text color="content.tint1" textStyle="xs">User-defined</Text>
                        <Text color="content.primary" textStyle="xs">Target</Text>
                        <Pointer top="38px" left="56px" rotate="225" color="black" />
                    </Box>
                    <Box position="absolute" top="172px" left="24px" textAlign="right">
                        <Text color="content.tint1" textStyle="xs" fontWeight={600}>
                            Best <Text as="span" color="content.primary" fontWeight={400}>G4</Text>
                        </Text>
                        <Text whiteSpace="pre-line" color="content.primary" textStyle="xs">
                            {`Loop\nContent`}
                        </Text>
                        <Pointer top="12px" left="48px" width={36} rotate="135" color="black" />
                    </Box>
                </MotionBox>
                <MotionBox top="0" left="0" position="absolute" custom={3} variants={fadeInUp} initial="hidden" animate={inView ? "visible" : "hidden"}>
                    <Box position="absolute" top="48px" left="150px" textAlign="left">
                        <Text color="content.tint1" textStyle="xs" fontWeight={600}>
                            Best <Text as="span" color="content.primary" fontWeight={400}>3WJ</Text>
                        </Text>
                        <Text whiteSpace="nowrap" color="content.primary" textStyle="xs">
                            {`for exchange of Linker`}
                        </Text>
                        <Pointer top="-18px" left="-30px" width={32} rotate="90" color="black" />
                        <Box
                            position="absolute"
                            top="-2px"
                            left="-8px"
                            width="1px"
                            height="12px"
                            transform="rotate(-55deg)"
                            bg="black"
                            borderRadius="8px"
                        />
                    </Box>
                    <Box position="absolute" top="184px" left="180px" textAlign="left">
                        <Text color="content.tint1" textStyle="xs" fontWeight={600}>
                            Best <Text as="span" color="content.primary" fontWeight={400}>G4</Text>
                        </Text>
                        <Text color="content.primary" textStyle="xs">
                            {`Split Mode`}
                        </Text>
                        <Pointer top="6px" left="-24px" width={18} rotate="45" color="black" />
                    </Box>
                </MotionBox>
                <MotionBox top="0" left="0" position="absolute" custom={4} variants={fadeInUp} initial="hidden" animate={inView ? "visible" : "hidden"}>
                    <Box position="absolute" top="100px" left="18px" textAlign="right">
                        <Text color="content.tint1" textStyle="xs" fontWeight={600}>
                            Best <Text as="span" color="content.primary" fontWeight={400}>3WJ</Text>
                        </Text>
                        <Text whiteSpace="pre-line" color="content.primary" textStyle="xs">
                            {`Sequence\nDesign`}
                        </Text>
                        <Pointer top="-10px" left="54px" width={20} rotate="135" color="black" />
                    </Box>
                    <Box position="absolute" top="264px" left="80px" textAlign="left">
                        <Text color="content.tint1" textStyle="xs" fontWeight={600}>
                            Best <Text as="span" color="content.primary" fontWeight={400}>Linker Length</Text>
                        </Text>
                        <Pointer top="-10px" left="30px" width={12} rotate="45" color="black" />
                    </Box>
                </MotionBox>
                <MotionBox top="0" left="0" position="absolute" custom={5} variants={fadeInUp} initial="hidden" animate={inView ? "visible" : "hidden"}>
                    <Text width="250px" whiteSpace="pre-line" position="absolute" top="84px" left="80px" color="content.tint1" textStyle="xs" textAlign="center">
                        {`(for evaluation of\ncatalytic exchange of\nlinker strand)`}
                    </Text>
                    <Text width="200px" position="absolute" top="282px" left="32px" whiteSpace="pre-line" color="content.tint1" textStyle="xs" textAlign="center">
                        {`(for evaluation of optimal electrochemical signal generation)`}
                    </Text>
                </MotionBox>
            </Box>
        </Flex>
    )
}

const PageThree = () => {
    return (
        <Flex width="100%" justifyContent="center" gap="8">
            <Stack>
                <Box mt="auto" mb="24px" flex="0 0 auto" textAlign="left" textStyle="3xl">
                    <Text color="content.tint1" fontWeight={600}>
                        Machine Learning
                    </Text>
                    <Text color="content.tint1">
                        <Text as="span" color="content.secondary">for</Text> DNA Probe
                    </Text>
                    <Text color="content.tint1">
                        Design <Text as="span" color="content.secondary">& Optimal</Text>
                    </Text>
                    <Text color="content.secondary">
                        Signal Generation
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
                >learn more</Tag>
            </Stack>
            <MachineLearning />
        </Flex>
    )
}

const ElectrochemicalReaders = () => {
    const { ref, inView } = useInView({ triggerOnce: false, threshold: 1 });

    return (
        <Box ref={ref} position="relative">
            <MotionBox
                custom={1}
                variants={fadeInUp}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                position="relative"
            >
                <Box>
                    <Image width="220px" src={SensorS} bg="#f1f1f1" />
                </Box>
                <Box position="relative" top="-56px" left="110px">
                    <Image width="310px" src={SensorL} />
                </Box>
            </MotionBox>
            <MotionBox
                custom={2}
                variants={fadeInUp}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                position="absolute"
                top="0"
                left="0">
                <Box position="absolute" top="10px" left="172px" textAlign="left">
                    <Text color="content.tint1" textStyle="sm">Thumb Size Model</Text>
                    <Text
                        width="280px"
                        color="content.secondary"
                        whiteSpace="pre-line"
                        textStyle="sm"
                    >
                        {`with Remoter (left) & Connector (right)\n(Zensor ECWP100single)`}
                    </Text>
                    <Pointer rotate="-45" width={12} left="-22px" top="28px" />
                </Box>
                <Box position="absolute" top="242px" left="-154px" textAlign="right">
                    <Text color="content.tint1" textStyle="sm">Full Size Model</Text>
                    <Text
                        width="280px"
                        color="content.secondary"
                        whiteSpace="pre-line"
                        textStyle="sm"
                    >
                        {`with Touch Screen\n(Zensor ACIP100)`}
                    </Text>
                    <Pointer rotate="135" width={12} left="284px" top="20px" />
                </Box>
            </MotionBox>
            <MotionBox
                custom={3}
                variants={fadeInUp}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                position="absolute" top="0" left="0"
            >
                <Text position="absolute" top="5px" left="10px" textStyle="2xs" color="content.secondary">5.7cm</Text>
                <Text position="absolute" top="96px" left="68px" textStyle="2xs" color="content.secondary">6.1cm</Text>
                <Text position="absolute" top="192px" left="132px" textStyle="2xs" color="content.secondary">19.3cm</Text>
                <Text position="absolute" top="106px" left="320px" textStyle="2xs" color="content.secondary">11.2cm</Text>
                <Text position="absolute" top="172px" left="398px" textStyle="2xs" color="content.secondary">4.3cm</Text>
                <Pointer
                    position="absolute" top="14px" left="6px"
                    withEnd={true}
                    width={104}
                    endWidth={3}
                    color="border.secondary"
                    rotate={-10}
                />
                <Pointer
                    position="absolute" top="104px" left="76px"
                    withEnd={true}
                    width={80}
                    endWidth={3}
                    color="border.secondary"
                    rotate={28}
                />
                <Pointer
                    position="absolute" top="162px" left="132px"
                    withEnd={true}
                    width={160}
                    endWidth={3}
                    color="border.secondary"
                    rotate={-45}
                />
                <Pointer
                    position="absolute" top="128px" left="278px"
                    withEnd={true}
                    width={116}
                    endWidth={3}
                    color="border.secondary"
                    rotate={27}
                />
                <Pointer
                    position="absolute" top="178px" left="376px"
                    withEnd={true}
                    width={26}
                    endWidth={3}
                    color="border.secondary"
                    rotate={90}
                />
            </MotionBox>
        </Box>
    )
}
const PageFour = () => {
    return (
        <Flex width="100%" gap="4">
            <Stack>
                <Box mt="auto" mb="24px" flex="0 0 auto" textAlign="left" textStyle="4xl">
                    <Text letterSpacing="0.5px" color="content.secondary">
                        Utilizing Portable
                    </Text>
                    <Text letterSpacing="0.5px" color="content.tint1" fontWeight={600} whiteSpace="pre-line">
                        {`Electrochemical\nReaders`}
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
                >learn more</Tag>
            </Stack>
            <ElectrochemicalReaders />
        </Flex>
    )
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
                            witdth="760px"
                            height="380px"
                            p="6"
                            pt="8"
                            textAlign="center"
                        >
                            <Item />
                        </Box>
                    )
                }}
                containerProps={{
                    bg: "bg.primary",
                    borderRadius: "24px",
                }}
                infinite={false}
                hideNavButtons={true}
                indicatorPosition="right"
            />
        </Box>
    )
}

export default Approaches;