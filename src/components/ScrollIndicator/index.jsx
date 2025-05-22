import { useEffect, useRef, useState } from 'react';
import { Box, Text } from '@chakra-ui/react';
import { keyframes } from '@emotion/react';
import { useLocation } from "react-router";

const bounce = keyframes`
  0% { transform: translateY(0); opacity: 1; }
  50% { transform: translateY(6px); opacity: 0.5; }
  100% { transform: translateY(0); opacity: 1; }
`;

const ScrollIndicator = ({ color = 'content.tint1', }) => {
  const [show, setShow] = useState(false);
  const [isScrollLocked, setIsScrollLocked] = useState(
    document.body.hasAttribute("data-scroll-lock")
  );
  const timeoutRef = useRef(null);
  const location = useLocation();

  const isFooterVisible = () => {
    const footer = document.querySelector("#footer");
    if (!footer) return false;
    const rect = footer.getBoundingClientRect();
    return rect.top < window.innerHeight;
  };

  const resetTimer = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);

    setShow(false);

    timeoutRef.current = setTimeout(() => {
      if (!isFooterVisible() && !isScrollLocked) {
        setShow(true);
      }
    }, 2500);
  };

  useEffect(() => {
    resetTimer();
  }, [location.pathname, isScrollLocked]);

  useEffect(() => {
    window.addEventListener("scroll", resetTimer);
    return () => {
      window.removeEventListener("scroll", resetTimer);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [isScrollLocked]);

  useEffect(() => {
    const observer = new MutationObserver(() => {
      setIsScrollLocked(document.body.hasAttribute("data-scroll-lock"));
    });

    observer.observe(document.body, {
      attributes: true,
      attributeFilter: ["data-scroll-lock"],
    });

    return () => observer.disconnect();
  }, []);

  return (
    <Box
      position="fixed"
      bottom="30px"
      left="50%"
      transform={show ? "translate(-50%, -10%)" : "translateX(-50%)"}
      zIndex="10"
      display="flex"
      flexDirection="column"
      alignItems="center"
      opacity={show ? 1 : 0}
      pointerEvents={show ? 'auto' : 'none'}
      transition="all 1s ease"
    >
      <Box
        border="2px solid"
        borderColor="border.primary"
        borderRadius="full"
        w="24px"
        h="40px"
        display="flex"
        justifyContent="center"
        alignItems="flex-start"
        pt="6px"
        position="relative"
      >
        <Box
          w="6px"
          h="6px"
          bg={color}
          borderRadius="full"
          animation={`${bounce} 2.5s infinite`}
        />
      </Box>
      <Text fontSize="xs" color="content.secondary" mt="1">
        scroll down to learn more
      </Text>
    </Box>
  );
}

export default ScrollIndicator;