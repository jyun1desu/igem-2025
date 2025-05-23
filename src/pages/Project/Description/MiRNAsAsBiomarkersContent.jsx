import { Box, List, ListItem, Stack, Text } from "@chakra-ui/react";

const HintText = ({ children, fontWeight = 400 }) => {
    return (
        <Text as="span" color="content.red" fontWeight={fontWeight}>{children}</Text>
    )
}

const MiRNAsAsBiomarkersContent = () => {
    return (
        <Stack gap="4">
            <Text textIndent="2em">
                New diagnostic tools for cardiovascular diseases (CVDs) are currently in development, with ongoing efforts to identify novel biomarkers, such as small molecules, proteins, and antibodies, that can provide a definitive diagnosis. While protein-based (e.g., troponins, natriuretic peptides) and lipid-based (e.g., cholesterol, triglycerides) biomarkers are commonly used for CVD detection, they are often detected at later stages when the disease has already progressed. This late diagnosis is a major contributor to CVD-related mortality, as interventions become less effective at advanced stages.
            </Text>
            <Text textIndent="2em">
                A promising group of early-stage biomarkers gaining attention in CVD diagnostics is <HintText fontWeight={600}>microRNAs (miRNAs)</HintText>. These small RNA molecules, 19 to 25 nucleotides in length, are consistently present in bodily fluids such as blood and plasma, where they regulate gene expression and influence cellular processes like inflammation, apoptosis, and vascular remodeling. Unlike protein and lipid biomarkers, miRNA dysregulation occurs at earlier stages of CVD progression, making them a potential early warning system for cardiovascular disease. Studies suggest that disease-specific miRNA expression patterns could allow for earlier detection and intervention, reducing the risk of severe complications. By identifying dysregulated miRNA levels early, it may be possible to prevent disease progression before irreversible damage occurs.            </Text>
            <Text textIndent="2em"></Text>
        </Stack>
    )
};

export default MiRNAsAsBiomarkersContent;