import { Box, List, ListItem, Stack, Text } from "@chakra-ui/react";

const HintText = ({ children }) => {
    return (
        <Text as="span" color="content.red">{children}</Text>
    )
}

const DiagnosisOfCVDsContent = () => {
    return (
        <Stack gap="4">
            <Text textIndent="2em">
                There are several diagnostics that doctors and physicians use to diagnose cardiovascular diseases, where almost all methods require radiation (Diagnostics for Cardiovascular Diseases, Heart Disease | IAEA, 2016). Besides blood tests and a chest X-ray, tests to diagnose heart diseases can include:
            </Text>
            <List.Root variant="plain" textIndent="2em">
                <ListItem display="inline">
                    <b>(1) Electrocardiogram (EKG)</b>: records the electrical activity of your heart. Electrodes are placed on the
                    chest, arms, and legs. It then records the heart’s electrical signals, including its impulses, rhythm or
                    arrhythmias (Electrocardiogram, 2024).
                </ListItem>
                <ListItem display="inline">
                    <b>(2) Echocardiogram (ECG)</b>: uses sound waves to visualize and create pictures of the heart. This test can
                    show blood flow through the heart and heart valves (Echocardiogram (Echo), 2017).
                </ListItem>
                <ListItem display="inline">
                    <b>(3) Cardiac catheterization</b>: uses a long, thin tube called a catheter that is put into a blood vessel then
                    guided to the heart. The test is used to examine your heart valves or take samples of blood or heart
                    muscle (National Institutes of Health, 2022).
                </ListItem>
            </List.Root>
            <Text textIndent="2em">
                Current clinical diagnostic methods may accurately identify the presence of CVDs, yet many areas face significant challenges due to insufficient resources, these challenges include <HintText>lack</HintText> of medical facilities, <HintText>shortage</HintText> of professional personnel, or <HintText>limited</HintText> access to diagnostic equipment.
            </Text>
            <Text textIndent="2em"></Text>
        </Stack>
    )
};

export default DiagnosisOfCVDsContent;