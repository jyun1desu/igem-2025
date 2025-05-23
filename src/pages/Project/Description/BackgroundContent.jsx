import { Box, Stack, Text } from "@chakra-ui/react";

const HintText = ({ children }) => {
    return (
        <Text as="span" color="content.red">{children}</Text>
    )
}

const BackgroundContent = () => {
    return (
        <Stack gap="4">
            <Text textIndent="2em">
                <HintText as="span" color="content.red">
                    {`Cardiovascular diseases (CVDs) `}
                </HintText>
                have been a complex and serious problem all around the world. The World Health Organization points out that about 18 million people die from cardiovascular diseases around the world annually, taking up to about 31% of global mortality. Addressing cardiovascular diseases is crucial due to its global impact on public health. Effective solutions can significantly improve public health by saving lives, enhancing quality of life, and reducing healthcare expenditures.
            </Text>
            <Text textIndent="2em">
                <HintText as="span" color="content.red">
                    {`CVDs `}
                </HintText>
                are primarily caused by atherosclerosis, a condition where plaque—composed of fats, cholesterol, cellular waste, calcium, and fibrin—accumulates in arterial walls, leading to thickening and hardening. This disease buildup restricts blood flow, reducing oxygen and nutrients to the heart. Over time, it can lead to thrombosis, vessel blockage, stroke, myocardial infarction, and even death.
            </Text>
            <Text textIndent="2em">
                <HintText as="span" color="content.red">
                    {`CVDs `}
                </HintText>
                often develop silently, with symptoms appearing late or not at all. While some, like heart attacks, may have minimal symptoms, others manifest as dizziness, fatigue, shortness of breath, numbness, or chest pain. Severe cases may involve headaches, difficulty communicating, or temporary vision loss.
            </Text>
        </Stack>
    )
};

export default BackgroundContent;