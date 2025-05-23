import { Box, List, ListItem, Stack, Text } from "@chakra-ui/react";

const HintText = ({ children, color = 'content.tint1', fontWeight = 400 }) => {
    return (
        <Text as="span" color={color} fontWeight={fontWeight}>{children}</Text>
    )
}

const WhyContent = () => {
    return (
        <Stack gap="4">
            <Text textIndent="2em">
                Given the aforementioned challenges, our approach is to develop a <HintText fontWeight={600}>portable, user-friendly</HintText> <HintText>biosensor</HintText> for the early detection of CVDs. Our biosensing detection kit targets multiple <HintText color="content.red">miRNA</HintText> biomarkers and employs <HintText>DNA nanotechnology</HintText> to convert signals into interpretable electrochemical readings for a portable reader.
            </Text>
            <Text>
                With <HintText fontWeight={600}>HeartBeaters</HintText>, we provide:
            </Text>
        </Stack>
    )
};

export default WhyContent;