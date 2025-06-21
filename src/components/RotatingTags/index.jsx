import { Box } from "@chakra-ui/react";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Tag from "../Tag";

const MotionBox = motion.create(Box);

export function RotatingTags({ tags }) {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setIndex((prev) => (prev + 1) % tags.length);
        }, 2500);
        return () => clearInterval(timer);
    }, []);

    return (
        <Box position="relative" display="inline-block">
            <AnimatePresence mode="wait">
                <MotionBox
                    key={tags[index]}
                    position="absolute"
                    bottom="-18px"
                    rounded="full"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    initial={{ opacity: 0, y: 0 }}
                    animate={{ opacity: 1, y: -10 }}
                    exit={{ opacity: 0, y: 0 }}
                    transition={{ duration: 0.4 }}
                >
                    <Tag mb="0" px="2" py="1" textStyle="md">{tags[index]}</Tag>
                </MotionBox>
            </AnimatePresence>
        </Box>
    );
}
