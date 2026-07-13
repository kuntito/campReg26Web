import { Center, Text } from "@chakra-ui/react"

const HeaderRegStatus = () => {
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
                Registration Status
            </Text>
        </Center>
    )
}

export default HeaderRegStatus