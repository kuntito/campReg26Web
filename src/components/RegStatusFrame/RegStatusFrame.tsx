import { VStack } from "@chakra-ui/react"
import ContentRegStatus from "./ContentRegStatus"
import HeaderRegStatus from "./HeaderRegStatus"

const RegStatusFrame = () => {
    return (
        <VStack
            gap={0}
            h={"100%"}
            w={"100%"}
        >
            <HeaderRegStatus />
            <ContentRegStatus />
        </VStack>
    )
}

export default RegStatusFrame