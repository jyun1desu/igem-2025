import { Box, Flex, Grid, GridItem, Image, Stack, Text } from "@chakra-ui/react"
import { Link } from "react-router";
import HeartImage from '@/assets/main_heart.png';
import { COPY_RIGHT, CONTACTS, PREVIOUS_TEAMS, SPONSORS } from "./const";
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
                <Grid templateColumns="auto 1fr" flex="0 0 50%" columnGap="2">
                    <GridItem display="flex" colStart={1} rowStart={1}>
                        <Image
                            width="100px"
                            src={HeartImage}
                            objectFit="contain"
                            my="auto"
                        />
                    </GridItem>
                    <GridItem display="flex" colStart={2} rowStart={1}>
                        <Box my="auto">
                            <Text
                                letterSpacing="2px"
                                fontWeight={600}
                                textStyle="5xl"
                                color="content.tint1"
                            >HeartBeaters</Text>
                            <Text color="content.secondary" textStyle="xs">
                                A nucleic acid-based biosensor for early diagnostic of <Text as="span" color="content.red">CVDs</Text>
                            </Text>
                        </Box>
                    </GridItem>
                    <GridItem colStart={2} rowStart={2}>
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
                    </GridItem>
                </Grid>
                <Stack gap="6" flex="1 1 45%" overflow="hidden">
                    <Box>
                        <Text textStyle="sm" color="content.tint1">
                            Our Sponsors:
                        </Text>
                        <Box mt="2">
                            <Carousel
                                items={SPONSORS}
                                itemWidth={160}
                                autoplayInterval={3000}
                                gap={12}
                                hideIndicator={true}
                                hideNavButtons={true}
                                renderItem={(sponsor) => {
                                    const { id, image, text } = sponsor;
                                    return (
                                        <Box
                                            width="160px"
                                            aspectRatio={3 / 2}
                                            flex="0 0 auto"
                                            bg="white"
                                            borderRadius="8px"
                                            p="2"
                                            position="relative"
                                        >
                                            <Image
                                                alt={id}
                                                width={text ? '75%' : '100%'}
                                                height="100%"
                                                src={image}
                                                objectFit="contain"
                                            />
                                            <Text
                                                textStyle="xs"
                                                position="absolute"
                                                right="8px"
                                                bottom="6px"
                                                color="content.secondary"
                                            >{text}</Text>
                                        </Box>
                                    )
                                }}
                            />
                        </Box>
                    </Box>
                    <Flex alignItems="flex-end" mt="auto">
                        <Box flex="1 1 50%">益閣 LOGO</Box>
                        <Stack flex="1 1 50%" gap="1">
                            <Text color="content.secondary" textStyle="2xs" fontWeight={600}>Our previos teams</Text>
                            <>
                                {PREVIOUS_TEAMS.map(team => {
                                    return (
                                        <Text textIndent="1em" key={team} color="content.secondary" textStyle="2xs">{team}</Text>
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
