import { Box, Flex, Text, Image } from "@chakra-ui/react"
import FullHeightSectionContainer from "@/components/FullHeightSectionContainer";
import OverviewImage from '@/assets/projects/overview.png'
import Part1 from '@/assets/projects/descripion_part_1.png'

const Design = () => {

    return (
        <Box>
            <FullHeightSectionContainer alignItems="flex-start">
                <Flex
                    mt="4"
                    width="100%"
                    maxWidth="1200px"
                    bg="bg.primary"
                    borderRadius="24px"
                    height="480px"
                    p="6"
                    gap="6"
                    alignItems="flex-end"
                >
                    <Text
                        mt="auto"
                        textStyle="5xl"
                        fontWeight={700}
                        whiteSpace="pre-line"
                        letterSpacing="0.5px"
                    >
                        Overview
                    </Text>
                    <Box flex="1 1 auto" p="4" height="100%">
                        <Image width="100%" height="100%" objectFit="contain" src={OverviewImage} alt="overview" />
                    </Box>
                </Flex>
            </FullHeightSectionContainer>
            <FullHeightSectionContainer>
                <Image src={Part1} />
            </FullHeightSectionContainer>
        </Box>
    )
}

export default Design;
