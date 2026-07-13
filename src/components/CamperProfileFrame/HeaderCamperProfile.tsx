import { Center, Text } from "@chakra-ui/react";

const HeaderCamperProfile = () => {
    return (
        <Center
            w={"100%"}
            bg={"palette.room"}
            h={"48px"}
        >
            <Text
                color={"palette.life"}
                textStyle={"blaze"}
            >
                National Youth Camp '26
            </Text>
        </Center>
    )
}

export default HeaderCamperProfile