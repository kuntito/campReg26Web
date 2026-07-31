import { VStack, Text, Box } from "@chakra-ui/react"
import HeaderCamperProfile from "./HeaderCamperProfile"
import ContentCamperProfile from "./ContentCamperProfile"
import { Link, useLocation } from "react-router-dom"
import useAppStore from "../../state-mgmt/appStore"

interface Props {

}

const CamperProfileFrame = () => {
    const location = useLocation();
    const backLink = location.pathname.includes("coord") 
        ? "/reg-coordinator" 
        : "/";

    const resetStateCamperProfile = useAppStore(s => s.resetStateCamperProfile);
        
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
                justifyItems={"center"}
                alignContent={"center"}
            >

                <ContentCamperProfile />
            </Box>
            <Link
                to={backLink}
                onClick={resetStateCamperProfile}
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