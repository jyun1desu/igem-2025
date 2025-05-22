import { useEffect, useRef, useState, useMemo } from "react";
import { Box, Flex, Button } from "@chakra-ui/react";

const GAP = 8;
const ITEM_WIDTH = 200;

const Carousel = ({
    gap = GAP,
    itemWidth = ITEM_WIDTH,
    items = [],
    renderItem,
    hideIndicator = false,
    autoplayInterval = 3500,
}) => {
    const containerRef = useRef(null);
    const [visibleCount, setVisibleCount] = useState(1);
    const [index, setIndex] = useState(1); // 預設用 1，但會在 useEffect 裡動態調整
    const [isPaused, setIsPaused] = useState(false);
    const [isTransitioning, setIsTransitioning] = useState(true);

    useEffect(() => {
        const calc = () => {
            if (containerRef.current) {
                const containerWidth = containerRef.current.offsetWidth;
                const count = Math.floor(containerWidth / (itemWidth + gap));
                setVisibleCount(count || 1);
                setIndex(count);
            }
        };
        calc();
        window.addEventListener("resize", calc);
        return () => window.removeEventListener("resize", calc);
    }, [itemWidth, gap]);

    useEffect(() => {
        if (isPaused) return;
        const timer = setInterval(() => {
            setIndex((prev) => prev + 1);
            setIsTransitioning(true);
        }, autoplayInterval);
        return () => clearInterval(timer);
    }, [isPaused, autoplayInterval]);

    const allItems = useMemo(() => {
        const clonedHead = items.slice(-visibleCount);
        const clonedTail = items.slice(0, visibleCount);
        return [...clonedHead, ...items, ...clonedTail];
    }, [items, visibleCount]);

    const totalLength = items.length;
    const pageCount = Math.ceil(totalLength / visibleCount);
    const currentPage = Math.floor(
        ((index - visibleCount + totalLength) % totalLength) / visibleCount
    );

    useEffect(() => {
        const handleTransitionEnd = () => {
            setIsTransitioning(false);
            if (index >= totalLength + visibleCount) {
                setIndex(visibleCount);
            } else if (index === 0) {
                setIndex(totalLength);
            }
        };

        const el = containerRef.current;
        el?.addEventListener("transitionend", handleTransitionEnd);
        return () => el?.removeEventListener("transitionend", handleTransitionEnd);
    }, [index, totalLength, visibleCount]);

    const goToPage = (p) => {
        setIndex(visibleCount + p * visibleCount);
        setIsTransitioning(true);
    };

    return (
        <Box
            width="100%"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
        >
            <Box overflow="hidden" ref={containerRef}>
                <Flex
                    transition={isTransitioning ? "transform 0.8s ease" : "none"}
                    transform={`translateX(-${(itemWidth + gap) * index}px)`}
                    gap={`${gap}px`}
                >
                    {allItems.map((item, i) => (
                        <Box key={i} width={`${itemWidth}px`} flex="0 0 auto">
                            {renderItem(item)}
                        </Box>
                    ))}
                </Flex>
            </Box>
            {!hideIndicator && (
                <Flex justify="center" mt="10px" gap="8px">
                    {Array.from({ length: pageCount }).map((_, i) => (
                        <Button
                            key={i}
                            size="xs"
                            borderRadius="50%"
                            bg={i === currentPage ? "black" : "gray.300"}
                            _hover={{ bg: "gray.500" }}
                            onClick={() => goToPage(i)}
                            w="10px"
                            h="10px"
                            minW="unset"
                            p="0"
                        />
                    ))}
                </Flex>
            )}
        </Box>
    );
};

export default Carousel;
