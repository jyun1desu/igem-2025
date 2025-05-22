import { Box } from "@chakra-ui/react"

const SectionContainer = ({ children, bg }) => {
    return (
        <Box
            px="28"
            py="12"
            bg={bg}
            width="100%"
            height="calc(100dvh - 70px)"
        >
            {children}
        </Box>
    )
}

const Home = () => {
    return (
        <Box pt="70px">
            <SectionContainer></SectionContainer>
            <SectionContainer bg="content.tint1"></SectionContainer>
        </Box>
    )
}

export default Home;
