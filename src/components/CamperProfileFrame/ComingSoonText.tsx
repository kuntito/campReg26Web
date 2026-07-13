import { Text } from "@chakra-ui/react"

const ComingSoonText = () => {
    return (
        <Text
            color={"palette.skylar"}
            fontStyle={"italic"}
            textStyle={"orion"}
            animation="blink 0.7s ease-in-out infinite alternate"
            sx={{
                "@keyframes blink": {
                    "from": { opacity: 0.85 },
                    "to": { opacity: 0.2 },
                }
            }}
        >
            coming soon...
        </Text>
    )
}

export default ComingSoonText