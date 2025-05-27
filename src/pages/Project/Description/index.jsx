import { Box, Flex, List, ListItem, Stack, Text } from "@chakra-ui/react"
import FullHeightSectionContainer from "@/components/FullHeightSectionContainer";
import { useActiveSection } from "@/hooks/useActiveSection";
import Tag from "@/components/Tag";
import BackgroundContent from "./BackgroundContent";
import DiagnosisOfCVDsContent from "./DiagnosisOfCVDsContent";
import MiRNAsAsBiomarkersContent from "./MiRNAsAsBiomarkersContent";
import WhyContent from "./WhyContent";

const SECTION_IDS = {
    BACKGROUND: 'BACKGROUND',
    DIAGNOSIS_OF_CVDS: 'DIAGNOSIS_OF_CVDS',
    MIRNAS_AS_BIOMARKERS: 'MIRNAS_AS_BIOMARKERS',
    WHY: 'WHY'
};

const SECTIONS = [
    SECTION_IDS.BACKGROUND,
    SECTION_IDS.DIAGNOSIS_OF_CVDS,
    SECTION_IDS.MIRNAS_AS_BIOMARKERS,
    SECTION_IDS.WHY
];

const SECTION_DATA = {
    [SECTION_IDS.BACKGROUND]: {
        label: 'Background',
        activeColor: 'content.red',
    },
    [SECTION_IDS.DIAGNOSIS_OF_CVDS]: {
        label: 'Diagnosis of CVDs',
        activeColor: 'content.red',
    },
    [SECTION_IDS.MIRNAS_AS_BIOMARKERS]: {
        label: 'MiRNAs as Biomarkers',
        activeColor: 'content.red',
    },
    [SECTION_IDS.WHY]: {
        label: 'Why HeartBeaters',
        activeColor: 'content.tint1',
    },
}

const SectionLink = ({ children, isActive, to, activeColor }) => {
    return (
        <Text
            as="button"
            textStyle="s"
            color={isActive ? activeColor : "content.primary"}
            cursor="pointer"
            _hover={{
                color: activeColor
            }}
            transition="color 0.5s"
            onClick={() => {
                const element = document.getElementById(to);
                if (element) {
                    const offset = -80;

                    const rect = element.getBoundingClientRect();
                    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

                    window.scrollTo({
                        top: rect.top + scrollTop + offset,
                        behavior: "smooth",
                    });
                }
            }}
        >{children}</Text>
    )
}

const Description = () => {
    const activeTab = useActiveSection({
        sectionIds: SECTIONS,
    })
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
                >
                    <Text
                        mt="auto"
                        textStyle="5xl"
                        fontWeight={700}
                        whiteSpace="pre-line"
                        letterSpacing="0.5px"
                    >
                        {`Project\nOverview`}
                    </Text>
                </Flex>
            </FullHeightSectionContainer>
            <FullHeightSectionContainer
                justifyContent="flex-start"
                alignItems="flex-start"
                pb="24"
            >
                <Flex alignItems="flex-start" gap="28">
                    <Box position="sticky" top="118px" flex="0 0 auto">
                        <List.Root
                            display="flex"
                            textStyle="s"
                            flexDirection="column"
                            gap="3"
                            variant="plain"
                            color="content.secondary"
                        >
                            {
                                SECTIONS.map(section => {
                                    const { label, activeColor } = SECTION_DATA[section]
                                    return (
                                        <ListItem>
                                            <SectionLink
                                                isActive={activeTab === section}
                                                as="button"
                                                to={section}
                                                activeColor={activeColor}
                                            >{label}</SectionLink>
                                        </ListItem>
                                    )
                                })
                            }
                        </List.Root>
                        <Text
                            as="button"
                            mt="8"
                            textStyle="xs"
                            color="content.secondary"
                            cursor="pointer"
                            onClick={() => {
                                window.scrollTo({
                                    top: 0,
                                    behavior: 'smooth'
                                })
                            }}
                        >
                            <span>⬆ back to the top</span>
                        </Text>
                    </Box>
                    <Stack gap="10">
                        <Box id={SECTION_IDS.BACKGROUND} >
                            <Tag colorVariant="red" mb="3">{SECTION_DATA[SECTION_IDS.BACKGROUND].label}</Tag>
                            <BackgroundContent />
                        </Box>
                        <Box id={SECTION_IDS.DIAGNOSIS_OF_CVDS} >
                            <Tag colorVariant="red" mb="3">{SECTION_DATA[SECTION_IDS.DIAGNOSIS_OF_CVDS].label}</Tag>
                            <DiagnosisOfCVDsContent />
                        </Box>
                        <Box id={SECTION_IDS.MIRNAS_AS_BIOMARKERS} >
                            <Tag colorVariant="red" mb="3">{SECTION_DATA[SECTION_IDS.MIRNAS_AS_BIOMARKERS].label}</Tag>
                            <MiRNAsAsBiomarkersContent />
                        </Box>
                        <Box id={SECTION_IDS.WHY}>
                            <Tag mb="2">{SECTION_DATA[SECTION_IDS.WHY].label}</Tag>
                            <WhyContent />
                        </Box>
                    </Stack>
                </Flex>
            </FullHeightSectionContainer>
        </Box>
    )
}

export default Description;
