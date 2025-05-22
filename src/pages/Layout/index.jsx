import { Outlet } from "react-router";
import { Box, Text } from "@chakra-ui/react"
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Layout = () => {
    return (
        <Box minHeight="100dvh" display="flex" flexDir="column">
            <Header flex="0 0 auto" />
            <Box flex="1 1 auto" px="28" py="12">
                <Outlet />
            </Box>
            <Footer flex="0 0 auto" />
        </Box>
    )
}

export default Layout;
