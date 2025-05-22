import { Outlet } from "react-router";
import { Box, Text } from "@chakra-ui/react"
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollIndicator from "@/components/ScrollIndicator";

const Layout = () => {
    return (
        <Box minHeight="100dvh" display="flex" flexDir="column">
            <Header flex="0 0 auto" />
            <Box flex="1 1 auto">
                <Outlet />
            </Box>
            <Footer flex="0 0 auto" />
            <ScrollIndicator />
        </Box>
    )
}

export default Layout;
