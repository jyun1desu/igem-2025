import { Box, Flex, Grid, Image, List, ListItem, Text, Dialog, Portal, Button, CloseButton } from "@chakra-ui/react"
import { useActiveSection } from "@/hooks/useActiveSection";
import { ADVISORS, INSTRUCTORS_N_ASSISTANT, PRINCIPAL_INVESTIGATORS, STUDENTS } from "../const";

const SECTION_IDS = {
    STUDENTS: 'STUDENTS',
    ADVISORS: 'ADVISORS',
    PRINCIPAL_INVESTIGATORS: 'PRINCIPAL_INVESTIGATORS',
    INSTRUCTORS_N_ASSISTANT: 'INSTRUCTORS_N_ASSISTANT',
}

const SECTIONS = [SECTION_IDS.STUDENTS, SECTION_IDS.ADVISORS, SECTION_IDS.PRINCIPAL_INVESTIGATORS, SECTION_IDS.INSTRUCTORS_N_ASSISTANT];

const SectionLink = ({ children, isActive, to }) => {
    return (
        <Text
            as="button"
            textStyle="s"
            color={isActive ? "content.tint1" : "content.primary"}
            cursor="pointer"
            _hover={{
                color: "content.tint1"
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

const SectionTag = ({ children, ...props }) => {
    return (
        <Text
            bg="bg.secondary"
            borderRadius="full"
            px="3"
            py="1"
            display="inline-flex"
            alignItems="center"
            justifyContent="center"
            fontWeight={600}
            color="content.tint1"
            mb="6"
            textStyle="lg"
            {...props}
        >{children}</Text>
    )
}

const MemberCard = ({
    data,
}) => {
    const { image, title, name, previousTeam, role, participatedIn = [], bio, mbti, funFacts = [] } = data;
    return (
        <Dialog.Root placement="center">
            <Dialog.Trigger asChild>
                <Box as="button" cursor="pointer">
                    <Image
                        width="100%"
                        objectFit="cover"
                        aspectRatio={1 / 1}
                        bg="bg.primary"
                        src={image}
                        borderRadius="100%"
                    />
                    <Text textAlign="center" color="content.tint1" mt="2" textStyle="lg">{name}</Text>
                    {previousTeam ? <Text whiteSpace="pre-line" textAlign="center" color="content.tint1" textStyle="xs">{previousTeam}</Text> : null}
                    {role ? <Text whiteSpace="pre-line" textAlign="center" color="content.tint1" textStyle="xs">{role}</Text> : null}
                </Box>
            </Dialog.Trigger>
            <Portal>
                <Dialog.Backdrop />
                <Dialog.Positioner>
                    <Dialog.Content
                        css={{
                            bg: 'bg.dialog',
                            color: 'content.primary',
                            p: 8,
                            borderRadius: '24px',
                            maxWidth: '80%',
                            width: 'auto'
                        }}>
                        <Dialog.Body css={{ p: 0 }}>
                            <Flex alignItems="center" gap="6">
                                <Image flex="0 0 auto" width="320px" aspectRatio={3 / 4} borderRadius="16px" src={image} />
                                <Box flex="0 0 420px">
                                    <Flex alignItems="center" gap="3">
                                        <Text
                                            textStyle="5xl"
                                            fontWeight={600}
                                            color="content.tint1"
                                        >
                                            {name}
                                        </Text>
                                        {title
                                            ? <Text
                                                textStyle="sm"
                                                lineHeight={1.2}
                                                color="content.tint2"
                                                whiteSpace="pre-line"
                                                position="relative"
                                                top="4px"
                                            >{title}</Text>
                                            : null}
                                    </Flex>
                                    {participatedIn.length
                                        ? <Flex alignItems="center" textStyle="sm" mt="1" gap="1">
                                            <Text color="content.secondary">Participated in:</Text>
                                            <List.Root display="flex" flexDirection="row" gap="2" variant="plain">
                                                {participatedIn.map((p) => {
                                                    return (
                                                        <ListItem m="0">
                                                            <SectionTag px="2" py="1" m="0" textStyle="sm">{p}</SectionTag>
                                                        </ListItem>
                                                    )
                                                })}
                                            </List.Root>
                                        </Flex>
                                        : null}
                                    {bio
                                        ? <Text mt="6" textStyle="lg">{bio}</Text>
                                        : null}
                                    {mbti
                                        ? <Flex textStyle="md" mt="6" alignItems="center" gap="1">
                                            <Text>MBTI:</Text>
                                            <SectionTag bg="#7f7f7f26" color="#595959" px="2" py="1" m="0" textStyle="sm">{mbti}</SectionTag>
                                        </Flex>
                                        : null}
                                    {funFacts.length
                                        ?
                                        <Box textStyle="md" mt="2">
                                            <Text>Fun Fact:</Text>
                                            <List.Root mt="1">
                                                {funFacts.map((f) => {
                                                    return (
                                                        <ListItem position="relative" left="24px">
                                                            <Text>{f}</Text>
                                                        </ListItem>
                                                    )
                                                })}
                                            </List.Root>
                                        </Box>
                                        : null}
                                </Box>
                            </Flex>
                        </Dialog.Body>
                        <Dialog.CloseTrigger asChild>
                            <CloseButton size="md" />
                        </Dialog.CloseTrigger>
                    </Dialog.Content>
                </Dialog.Positioner>
            </Portal>
        </Dialog.Root >
    )
}

const TeamMembersSection = () => {
    const activeTab = useActiveSection({
        sectionIds: SECTIONS,
        thresholdRatio: 2.5
    })

    return (
        <Flex alignItems="flex-start" gap="28">
            <Box position="sticky" top="118px" flex="0 0 auto">
                <Text fontWeight={600} textStyle="2xl" color="content.primary">Meet the Team</Text>
                <Box mt="6">
                    <SectionLink
                        isActive={activeTab === SECTION_IDS.STUDENTS}
                        as="button"
                        to={SECTION_IDS.STUDENTS}
                    >Student Members</SectionLink>
                    <List.Root
                        display="flex"
                        textStyle="s"
                        flexDirection="column"
                        gap="3"
                        variant="plain"
                        color="content.secondary"
                        pt="3"
                        mt="3"
                        borderTop="2px solid"
                        borderColor="border.secondary"
                    >
                        <ListItem>
                            <SectionLink
                                isActive={activeTab === SECTION_IDS.ADVISORS}
                                as="button"
                                to={SECTION_IDS.ADVISORS}
                            >Advisors</SectionLink>
                        </ListItem>
                        <ListItem>
                            <SectionLink
                                as="button"
                                to={SECTION_IDS.PRINCIPAL_INVESTIGATORS}
                                isActive={activeTab === SECTION_IDS.PRINCIPAL_INVESTIGATORS}
                            >{`Principal Investigators (PIs)`}</SectionLink>
                        </ListItem>
                        <ListItem>
                            <SectionLink
                                as="button"
                                to={SECTION_IDS.INSTRUCTORS_N_ASSISTANT}
                                isActive={activeTab === SECTION_IDS.INSTRUCTORS_N_ASSISTANT}
                            >Instructors & Assistants</SectionLink></ListItem>
                    </List.Root>
                    <Text mt="8" textStyle="xs" color="content.secondary">Click to learn more!</Text>
                </Box>
            </Box>
            <Grid templateColumns="repeat(1, 1fr)" gap="20">
                <Box id={SECTION_IDS.STUDENTS}>
                    <Grid templateColumns="repeat(3, 1fr)" gap="16">
                        {STUDENTS.map((member) => {
                            return (
                                <MemberCard key={'STUDENTS' + member.name} data={member} />
                            )
                        })}
                    </Grid>
                </Box>
                <Box id={SECTION_IDS.ADVISORS}>
                    <SectionTag>Student Advisors</SectionTag>
                    <Grid templateColumns="repeat(4, 1fr)" gap="10">
                        {ADVISORS.map((member) => {
                            return (
                                <MemberCard key={'ADVISORS' + member.name} data={member} />
                            )
                        })}
                    </Grid>
                </Box>
                <Box id={SECTION_IDS.PRINCIPAL_INVESTIGATORS}>
                    <SectionTag>Principal Investigators</SectionTag>
                    <Grid templateColumns="repeat(4, 1fr)" gap="10">
                        {PRINCIPAL_INVESTIGATORS.map((member) => {
                            return (
                                <MemberCard key={'PRINCIPAL_INVESTIGATORS' + member.name} data={member} />
                            )
                        })}
                    </Grid>
                </Box>
                <Box id={SECTION_IDS.INSTRUCTORS_N_ASSISTANT}>
                    <SectionTag>Instructors & Assistant</SectionTag>
                    <Grid templateColumns="repeat(4, 1fr)" gap="10">
                        {INSTRUCTORS_N_ASSISTANT.map((member) => {
                            return (
                                <MemberCard key={'INSTRUCTORS_N_ASSISTANT' + member.name} data={member} />
                            )
                        })}
                    </Grid>
                </Box>
            </Grid>
        </Flex>
    )
};


export default TeamMembersSection;
