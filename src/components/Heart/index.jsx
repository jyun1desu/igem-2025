import { Box, Image } from "@chakra-ui/react";
import { keyframes } from '@emotion/react';
import { useInView } from "react-intersection-observer";
import RedHeartImage from '@/assets/main-heart-red.png';
import HeartImage from '@/assets/main_heart.png';
import TearDrop from '@/assets/droplet-solid.svg';
import { useEffect, useState } from "react";

const drop = keyframes`
  0% {
    transform: translateY(-6px);
    opacity: 0;
  }
  100% {
    transform: translateY(4px);
    opacity: 1;
  }
`;

const animationOnce = `${drop} 0.5s ease-in-out forwards`;

export const HEART_IMAGE_WIDTH = '240px';

export const NormalHeart = () => {
    return (
        <Box flex={`0 0 ${HEART_IMAGE_WIDTH}`}>
            <Image src={HeartImage} />
        </Box>
    )
}

export const RedHeartWithTearDrop = ({
    withAnimation = false,
    hideRightDrop = false,
    disableLeftDropAnimation = false,
}) => {
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.5 });
    const [shouldAnimate, setShouldAnimate] = useState(false);

    useEffect(() => {
        if (inView && withAnimation) {
            setShouldAnimate(true);
        }
    }, [inView, withAnimation]);

    return (
        <Box ref={ref} position="relative" flex={`0 0 ${HEART_IMAGE_WIDTH}`}>
            <Image src={RedHeartImage} alt="red-heart" />

            <Image
                alt="left-drop"
                position="absolute"
                width="15px"
                src={TearDrop}
                left="72px"
                bottom="120px"
                animation={shouldAnimate && !disableLeftDropAnimation ? animationOnce : undefined}
                animationDelay="0.2s"
                opacity={withAnimation && !disableLeftDropAnimation ? 0 : 1}
            />
            {!hideRightDrop ? (
                <Image
                    alt="right-drop"
                    position="absolute"
                    width="15px"
                    src={TearDrop}
                    left="168px"
                    bottom="118px"
                    animation={shouldAnimate ? animationOnce : undefined}
                    animationDelay="0.2s"
                    opacity={withAnimation ? 0 : 1}
                />
            ) : null}
        </Box>
    );
};

export default RedHeartWithTearDrop;
