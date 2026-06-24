import { Center, Text } from "@chakra-ui/react"

const RegisteringBadge = () => (
    <Center
        bg={"palette.room"}
        color={"palette.life"}
        px={"16px"}
        borderRadius={50}
        height={"40px"}
    >
        <Text
            textStyle="orion"
            fontWeight={"medium"}
        >
            registering...
        </Text>
    </Center>
)

export default RegisteringBadge