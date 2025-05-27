import { Outlet, useLocation } from "react-router";
import { Box, Text } from "@chakra-ui/react"
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollIndicator from "@/components/ScrollIndicator";
import { useEffect } from "react";

const Layout = () => {
    const location = useLocation();

    useEffect(() => {
        window.scrollTo({ top: 0 });
    }, [location.pathname])

    const color = ['/project/description'].includes(location.pathname) ? "content.red" : "content.tint1"

    return (
        <Box minHeight="100dvh" display="flex" flexDir="column">
            <Header flex="0 0 auto" />
            <Box flex="1 1 auto" pt="70px">
                <Outlet />
            </Box>
            <Footer flex="0 0 auto" />
            <ScrollIndicator color={color} />
        </Box>
    )
}

export default Layout;
