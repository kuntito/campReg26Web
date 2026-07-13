import { VStack, Text, Box } from "@chakra-ui/react"
import HeaderCamperProfile from "./HeaderCamperProfile"
import ContentCamperProfile from "./ContentCamperProfile"
import { Link } from "react-router-dom"

interface Props {

}

const CamperProfileFrame = () => {
    return (
        <VStack
            gap={0}
            h={"100%"}
            w={"100%"}
        >
            <HeaderCamperProfile />
            <Box 
                flex={1}
                w="100%"
                px={"16px"}
                py={"24px"}
            >

                <ContentCamperProfile />
            </Box>
            <Link
                to={"/"}
            >
                <Text
                    textStyle={"orion"}
                    color={"palette.room"}
                    textDecoration={"underline"}
                    pb={"20px"}
                >
                    back to registration
                </Text>
            </Link>
        </VStack>
    )
}

export default CamperProfileFrame