import { useEffect, useRef, useState } from 'react';
import { Box, Flex, Text } from '@chakra-ui/react';
import { throttle } from 'lodash';
import { motion, AnimatePresence } from 'framer-motion';
import FullHeightSectionContainer from "@/components/FullHeightSectionContainer";
import RedHeartWithTearDrop from '../../components/Heart';

const HintText = ({ children, color }) => {
    return (
        <Text as="span" fontWeight={600}
            color={color === 'red' ? 'content.red' : 'content.tint1'}>
            {children}
        </Text>
    )
}

const renderDescriptions = (index) => {
    switch (index) {
        case 1:
            return (
                <>
                    <Text color="content.primary" textStyle="xl">
                        and specifically for <HintText color="red">cardiovascular diseases (CVDs)</HintText>,
                    </Text>
                    <Text color="content.primary" textStyle="2xl">
                        CVDs result in approximately <HintText color="red">18 million</HintText> deaths each year
                    </Text>
                </>
            )
        case 2:
            return (
                <>
                    <Text color="content.primary" textStyle="xl">
                        as you are reading this …
                    </Text>
                    <Text color="content.primary" textStyle="2xl">
                        one person has already passed away due to <HintText color="red">CVDs</HintText>
                    </Text>
                </>
            )
        case 3:
            return (
                <>
                    <Text color="content.primary" textStyle="xl">
                        Current clinical methods may accurately identify <HintText color="red" fontWeight={400}>CVDs</HintText>, but …
                    </Text>
                    <Text color="content.primary" textStyle="2xl">
                        people often suffer from <b>late diagnosis</b> or <b>insufficient resources</b>
                    </Text>
                </>
            )
        case 0:
            return (
                <>
                    <Text color="content.primary" textStyle="xl">Did you know that…</Text>
                    <Text color="content.primary" textStyle="2xl">
                        <HintText color="red">1/3</HintText> of the mortality cases are from <HintText color="red">heart diseases </HintText>
                    </Text>
                </>
            )
        default:
            return null
    }
};

const DESCRIPTION_LENGTH = 4;

const MotionBox = motion.create(Box);

const SlideContainer = ({ children, ...props }) => {
    return <Flex minWidth="956px" gap="6" mb="10%" alignItems="center" {...props}>{children}</Flex>
}

function useWheelHandler(index, setIndex, isAnimating, setIsAnimating, locked, setLocked, setDirection) {
    const init = useRef(true);
    useEffect(() => {
        const handleWheel = throttle((e) => {
            const distance = e.deltaY;
            const scrollTop = distance < 0;
            const scrollDown = distance > 0;
            setDirection(scrollDown ? 'fromTop' : 'fromDown');

            if (!locked) return;
            e.preventDefault();
            if (isAnimating) return;

            if (init.current) {
                init.current = false;
                return;
            }

            let nextIndex = index;
            const atTop = index === 0;
            const atBottom = index === DESCRIPTION_LENGTH - 1;

            if (scrollDown && !atBottom) {
                nextIndex = index + 1;
            } else if (scrollTop && !atTop) {
                nextIndex = index - 1;
            } else {
                setLocked(false);
                document.body.style.overflow = '';
                return;
            }

            setIsAnimating(true);
            setIndex(nextIndex);

            setTimeout(() => {
                setIsAnimating(false);
            }, 1500);
        }, 1500);

        window.addEventListener('wheel', handleWheel, { passive: false });
        return () => {
            window.removeEventListener('wheel', handleWheel);
            handleWheel.cancel();
        };
    }, [locked, index, isAnimating]);
}

export default function StickyDescriptions() {
    const containerRef = useRef(null);
    const [index, setIndex] = useState(-1);
    const [locked, setLocked] = useState(false);
    const [isAnimating, setIsAnimating] = useState(false);
    const [direction, setDirection] = useState('');

    useEffect(() => {
        if (!containerRef.current) return;
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && direction === 'fromTop') {
                    const top = containerRef.current?.offsetTop - 70;
                    document.body.style.overflow = 'hidden';
                    window.scrollTo({ top, behavior: 'smooth' })
                    setLocked(true);
                } else if (!entry.isIntersecting) {
                    document.body.style.overflow = '';
                    setIndex(0)
                    setLocked(false);
                }
            },
            { threshold: 0.9 }
        );

        observer.observe(containerRef.current);

        return () => {
            document.body.style.overflow = '';
            observer.disconnect();
        };
    }, [direction]);

    useWheelHandler(index, setIndex, isAnimating, setIsAnimating, locked, setLocked, setDirection);

    return (
        <Box ref={containerRef}>
            <FullHeightSectionContainer>
                <SlideContainer>
                    <RedHeartWithTearDrop withAnimation={true} hideRightDrop={index === 0} />
                    <AnimatePresence mode="wait">
                        <MotionBox
                            key={index}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.4 }}
                        >
                            {renderDescriptions(index)}
                        </MotionBox>
                    </AnimatePresence>
                </SlideContainer>
            </FullHeightSectionContainer>
        </Box>
    );
}