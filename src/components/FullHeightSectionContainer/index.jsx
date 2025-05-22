import { Box, Flex, Text } from "@chakra-ui/react"

const FullHeightSectionContainer = ({ children, bg, ...props }) => {
    return (
        <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            px="28"
            py="12"
            bg={bg}
            width="100%"
            minHeight="calc(100dvh - 70px)"
            {...props}
        >
            {children}
        </Box>
    )
}

export default FullHeightSectionContainer;
