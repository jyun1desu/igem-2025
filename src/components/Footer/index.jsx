import { Box, Flex, Stack, Text } from "@chakra-ui/react"
import { COPY_RIGHT, CONTACTS, PREVIOUS_TEAMS, SPONSORS } from "./const";
import { Link } from "react-router";
import Carousel from "../Carousel";

const Footer = () => {
    return (
        <Box
            as="footer"
            id="footer"
            mt="auto"
            px="20"
            py="8"
            bg="#f9f9f9ff"
        >
            <Flex gap="12">
                <Flex flex="0 0 50%" gap="6">
                    <Box>團隊 LOGO</Box>
                    <Box>
                        <Box>
                            <Text
                                letterSpacing="2px"
                                fontWeight={600}
                                textStyle="5xl"
                                color="content.tint1"
                            >HeartBeaters</Text>
                            <Text color="content.secondary" textStyle="2xs">
                                A nucleic acid-based biosensor for early diagnostic of <Text as="span" color="content.red">CVDs</Text>
                            </Text>
                        </Box>
                        <Box mt="4">
                            <Text textStyle="sm" color="content.tint1">
                                Contact Us
                            </Text>
                            <Flex gap="2" mt="1">
                                {
                                    CONTACTS.map((contact) => {
                                        const { platform } = contact;
                                        return (
                                            <Link key={platform}>
                                                <Flex
                                                    width="40px"
                                                    aspectRatio={1 / 1}
                                                    borderRadius="8px"
                                                    bg="white"
                                                    p="2"
                                                    alignItems="center"
                                                    justifyContent="center"
                                                >
                                                    {platform[0]}
                                                </Flex>
                                            </Link>
                                        )
                                    })
                                }
                            </Flex>
                        </Box>
                    </Box>
                </Flex>
                <Stack gap="6" flex="0 0 45%" overflow="hidden">
                    <Box>
                        <Text textStyle="sm" color="content.tint1">
                            Our Sponsors:
                        </Text>
                        <Box mt="2">
                            <Carousel
                                items={SPONSORS}
                                itemWidth={180}
                                gap={16}
                                hideIndicator={true}
                                renderItem={(sponsor) => {
                                    const { id } = sponsor;
                                    return (
                                        <Box
                                            width="180px"
                                            aspectRatio={3 / 2}
                                            flex="0 0 auto"
                                            bg="white"
                                            borderRadius="8px"
                                            autoPl
                                            p="2"
                                        >
                                            {id}
                                        </Box>
                                    )
                                }}
                            />
                        </Box>
                    </Box>
                    <Flex alignItems="flex-end" mt="auto">
                        <Box flex="1 1 50%">益閣 LOGO</Box>
                        <Stack flex="1 1 50%" gap="1">
                            <Text color="content.secondary" textStyle="2xs">Our previos teams</Text>
                            <>
                                {PREVIOUS_TEAMS.map(team => {
                                    return (
                                        <Text key={team} color="content.secondary" textStyle="2xs">{team}</Text>
                                    )
                                })}
                            </>
                        </Stack>
                    </Flex>
                </Stack>
            </Flex>
            <Box mt="8">
                <Text color="content.secondary" whiteSpace='pre-line' textStyle="2xs">
                    {COPY_RIGHT}
                </Text>
            </Box>
        </Box>
    )
}

export default Footer;
