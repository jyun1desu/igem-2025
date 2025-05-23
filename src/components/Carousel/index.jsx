import { useEffect, useRef, useState, useMemo } from "react";
import { Box, Flex, Button, IconButton, ButtonGroup } from "@chakra-ui/react";

const GAP = 8;

const Carousel = ({
    items = [],
    renderItem,
    itemWidth,
    gap = GAP,
    autoplayInterval,
    infinite = true,
    hideIndicator = false,
    hideNavButtons = false,
    indicatorPosition = "center",
}) => {
    const containerRef = useRef(null);
    const [visibleCount, setVisibleCount] = useState(1);
    const [index, setIndex] = useState(infinite ? 1 : 0);
    const [isPaused, setIsPaused] = useState(false);
    const [isTransitioning, setIsTransitioning] = useState(true);

    const isSingleMode = !itemWidth;

    const totalLength = items.length;

    useEffect(() => {
        const calc = () => {
            if (containerRef.current && itemWidth) {
                const containerWidth = containerRef.current.offsetWidth;
                const count = Math.floor(containerWidth / (itemWidth + gap));
                setVisibleCount(Math.max(count, 1));
                setIndex(infinite ? count : 0);
            }
        };
        calc();
        window.addEventListener("resize", calc);
        return () => window.removeEventListener("resize", calc);
    }, [itemWidth, gap, infinite]);

    // Auto-play
    useEffect(() => {
        if (isPaused || !autoplayInterval || visibleCount === 0) return;
        const timer = setInterval(next, autoplayInterval);
        return () => clearInterval(timer);
    }, [isPaused, autoplayInterval, visibleCount]);

    // 處理 infinite 時的 clone
    const allItems = useMemo(() => {
        if (infinite && !isSingleMode) {
            const head = items.slice(-visibleCount);
            const tail = items.slice(0, visibleCount);
            return [...head, ...items, ...tail];
        }
        return items;
    }, [items, visibleCount, infinite, isSingleMode]);

    useEffect(() => {
        if (!infinite || isSingleMode) return;
        const el = containerRef.current;
        const handle = () => {
            setIsTransitioning(false);
            if (index >= totalLength + visibleCount) {
                setIndex(visibleCount);
            } else if (index === 0) {
                setIndex(totalLength);
            }
        };
        el?.addEventListener("transitionend", handle);
        return () => el?.removeEventListener("transitionend", handle);
    }, [index, visibleCount, totalLength, infinite, isSingleMode]);

    const maxIndex = Math.max(totalLength - visibleCount, 0);
    const next = () => {
        setIndex((prev) => {
            if (infinite || isSingleMode) return prev + 1;
            return Math.min(prev + 1, maxIndex);
        });
        setIsTransitioning(true);
    };

    const prev = () => {
        setIndex((prev) => {
            if (infinite || isSingleMode) return prev - 1;
            return Math.max(prev - 1, 0);
        });
        setIsTransitioning(true);
    };

    const goToPage = (p) => {
        setIndex(infinite ? visibleCount + p * visibleCount : p * visibleCount);
        setIsTransitioning(true);
    };

    const currentPage = useMemo(() => {
        if (isSingleMode) return (index + totalLength) % totalLength;
        if (infinite) {
            return Math.floor(((index - visibleCount + totalLength) % totalLength) / visibleCount);
        }
        return Math.floor(index / visibleCount);
    }, [index, visibleCount, totalLength, infinite, isSingleMode]);

    const pageCount = isSingleMode ? totalLength : Math.ceil(totalLength / visibleCount);

    const showLeftArrow = !hideNavButtons && (infinite || index > 0);
    const showRightArrow = !hideNavButtons && (infinite || index < maxIndex);

    const getIndicatorProps = () => {
        const props = { justify: "center", mt: 3 };
        switch (indicatorPosition) {
            case 'right':
                props.justify = "flex-end";
                props.mr = 8;
                break;
            case 'left':
                props.justify = "flex-start";
                props.ml = 8;
                break;
            default:

        }
        return props;
    };

    const containerWidth = containerRef.current?.offsetWidth || 0;
    const actualItemWidth = itemWidth ?? containerRef.current?.querySelector('[data-carousel-item]')?.offsetWidth ?? containerWidth;
    const totalItems = items.length;
    const totalWidth = totalItems * actualItemWidth + (totalItems - 1) * gap;
    const rawTranslateX = index * (actualItemWidth + gap);
    const maxTranslateX = Math.max(totalWidth - containerWidth, 0);

    const translateX = infinite
        ? rawTranslateX
        : Math.min(rawTranslateX, maxTranslateX);

    return (
        <Box
            position="relative"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
        >
            <Box overflow="hidden" ref={containerRef} px={isSingleMode ? `${gap / 2}px` : "0"}>
                <Flex
                    transition={isTransitioning ? "transform 0.6s ease" : "none"}
                    transform={`translateX(-${translateX}px)`}
                    gap={isSingleMode ? "0" : `${gap}px`}
                    style={{
                        willChange: "transform",
                        backfaceVisibility: "hidden",
                        transformStyle: "preserve-3d",
                        overflow: "visible",
                        perspective: "1000px",
                    }}
                >
                    {allItems.map((item, i) => (
                        <Box
                            key={i}
                            flex="0 0 auto"
                            overflow="hidden"
                            transform="translateZ(0)"
                            width={isSingleMode ? "100%" : `${itemWidth}px`}
                            mr={isSingleMode && i !== allItems.length - 1 ? `${gap}px` : "0"}
                        >
                            {renderItem(item)}
                        </Box>
                    ))}
                </Flex>
            </Box>
            {showLeftArrow && (
                <>
                    <Box
                        position="absolute"
                        top="0"
                        bottom="0"
                        left="0"
                        width="60px"
                        pointerEvents="none"
                        background="linear-gradient(to right, rgba(255,255,255,1), rgba(255,255,255,0))"
                        zIndex={0}
                    />
                    <IconButton
                        variant="outline"
                        bg="white"
                        borderRadius="full"
                        borderWidth="2px"
                        borderColor="content.tint1"
                        aria-label="Previous"
                        onClick={prev}
                        position="absolute"
                        top="50%"
                        left="12px"
                        transform="translateY(-50%)"
                        zIndex={1}
                        icon={<span>{"◀︎"}</span>}
                    />
                </>

            )}
            {showRightArrow && (
                <>
                    <IconButton
                        variant="outline"
                        borderRadius="full"
                        borderWidth="2px"
                        bg="white"
                        borderColor="content.tint1"
                        aria-label="Next"
                        onClick={next}
                        position="absolute"
                        top="50%"
                        right="12px"
                        transform="translateY(-50%)"
                        zIndex={1}
                        icon={<span>{"▶︎"}</span>}
                    />
                    <Box
                        position="absolute"
                        top="0"
                        bottom="0"
                        right="0"
                        width="60px"
                        pointerEvents="none"
                        background="linear-gradient(to left, rgba(255,255,255,1), rgba(255,255,255,0))"
                        zIndex={0}
                    />
                </>
            )}
            {!hideIndicator && (
                <Flex gap="2" {...getIndicatorProps()}>
                    {Array.from({ length: pageCount }).map((_, i) => (
                        <Button
                            key={i}
                            borderRadius="50%"
                            bg={i === currentPage ? "content.tint1" : "bg.primary"}
                            _hover={{ bg: "content.tint1" }}
                            onClick={() => goToPage(i)}
                            w="8px"
                            h="8px"
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
