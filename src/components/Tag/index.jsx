
import { Text } from "@chakra-ui/react"

const Tag = ({ children, colorVariant = 'tint', ...props }) => {
    const colors = {
        tint: {
            bg: 'bg.secondary',
            color: 'content.tint1',
        },
        red: {
            bg: 'bg.red',
            color: 'content.red'
        }
    }
    return (
        <Text
            borderRadius="full"
            px="3"
            py="1"
            display="inline-flex"
            alignItems="center"
            justifyContent="center"
            whiteSpace="nowrap"
            fontWeight={600}
            mb="6"
            textStyle="lg"
            {...colors[colorVariant]}
            {...props}
        >{children}</Text>
    )
}

export default Tag;