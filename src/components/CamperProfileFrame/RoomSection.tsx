import { VStack, Text } from "@chakra-ui/react"
import ComingSoonText from "./ComingSoonText"

const RoomSection = () => {
    return (
        <VStack
            gap={"4px"}
            w={"100%"}
            alignItems={"start"}
        >
            <Text
                color={"palette.room"}
                fontWeight={"medium"}
            >
                Room
            </Text>
            <ComingSoonText />
        </VStack>
    )
}

export default RoomSection