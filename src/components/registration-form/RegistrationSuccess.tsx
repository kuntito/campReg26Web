import { VStack, Center, Text } from "@chakra-ui/react"
import { CheckIcon } from "../icons/CheckIcon";

interface Props {
    registrantName: string;
}

const RegistrationSuccess = ({
    registrantName,
}: Props) => {
    return (
        <Center>
            <VStack
                gap={"16px"}
            >
                <CheckIcon 
                    boxSize={"138px"}
                    color={"palette.life"}
                />
                <VStack>
                    <Text
                        textStyle={"blaze"}
                        fontWeight={"bold"}
                        color={"palette.room"}
                        textShadow={"0px 1px 4px rgba(0,0,0,0.2)"}
                    >
                        {registrantName}
                    </Text>
                    <Text
                        color={"palette.room"}
                        textStyle={"blaze"}
                    >
                        you're registered
                    </Text>
                    <Text
                        color={"palette.room"}
                        textStyle={"orion"}
                    >
                        confirmation has been sent to your mail
                    </Text>
                </VStack>
            </VStack>
        </Center>
    )
}

export default RegistrationSuccess