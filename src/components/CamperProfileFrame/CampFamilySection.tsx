import { VStack, Text } from "@chakra-ui/react"
import ComingSoonText from "./ComingSoonText"

const CampFamilySection = () => {
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
                Camp Family
            </Text>
            <ComingSoonText />
        </VStack>
    )
}

export default CampFamilySection