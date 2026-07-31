import { Badge, Box, Center, HStack, Text, VStack } from "@chakra-ui/react";
import useAppStore from "../../state-mgmt/appStore";

const HeaderCamperProfile = () => {
    const stateFetchCamperProfile = useAppStore(s => s.stateFetchCamperProfile);

    const badgeText = stateFetchCamperProfile.kind === 'success'
    ? stateFetchCamperProfile.type === 'camper'
        ? "camper"
        : "coordinator"
    : null;

    return (
        <Center
            w={"100%"}
            bg={"palette.room"}
            h={"48px"}
        >
            { stateFetchCamperProfile.kind === 'success' ? (
                <HStack
                    alignItems={"center"}
                    gap={"24px"}
                >
                    <Text                    
                        color={"palette.life"}
                        textStyle={"blaze"}
                    >
                        Youth Camp '26'
                    </Text>
                    <VStack
                        pt={"6px"}
                    >
                        <Badge
                            bg={"palette.skylar"}
                            color={"palette.life"}
                            fontSize={"10px"}
                            px={"8px"}
                            borderRadius={"4px"}
                        >
                            {badgeText}
                        </Badge>
                    </VStack>
                </HStack>
            ) : (
                <Text
                    color={"palette.life"}
                    textStyle={"blaze"}
                >
                    National Youth Camp '26
                </Text>
            )}
        </Center>
    )
}

export default HeaderCamperProfile