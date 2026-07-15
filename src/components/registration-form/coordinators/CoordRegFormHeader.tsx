import { Center, Text } from "@chakra-ui/react";

const CoordRegFormHeader = () => {
    return (
        <Center
            w={"100%"}
            bg={"palette.room"}
            h={"48px"}
        >
            <Text
                color={"palette.life"}
                textStyle={"orion"}
            >
                Coordinators, Youth Camp '26
            </Text>
        </Center>
    )
}

export default CoordRegFormHeader