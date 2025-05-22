import { Box, Flex, Grid, Image, List, ListItem, Text } from "@chakra-ui/react"
import FullHeightSectionContainer from "@/components/FullHeightSectionContainer";
import TeamMembersSection from "./TeamMemberSection";

const MeatTheTeam = () => {
    return (
        <Box>
            <FullHeightSectionContainer alignItems="flex-start">
                <Box
                    mt="4"
                    width="100%"
                    maxWidth="1200px"
                    bg="bg.primary"
                    borderRadius="24px"
                    height="400px"
                >group photo</Box>
            </FullHeightSectionContainer>
            <FullHeightSectionContainer 
            justifyContent="flex-start" 
            alignItems="flex-start"
            pb="24"
            >
                <TeamMembersSection />
            </FullHeightSectionContainer>
        </Box>
    )
}

export default MeatTheTeam;
