import { HStack, Text, VStack } from "@chakra-ui/react"
import AppIconButton from "../util/AppIconButton"
import { WhatsappIcon } from "../icons/WhatsappIcon"

interface Props {
    link: string;
}

const JoinUnitGc = ({
    link
}: Props) => {
    return (
        <VStack
            gap={"2px"}
            w={"100%"}
        >
            <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
            >
                <HStack
                    bg={"palette.raze"}
                    color={"palette.life"}
                    gap={"10px"}
                    paddingX={"16px"}
                    paddingY={"6px"}
                    borderRadius={50}
                    cursor={"pointer"}
                    _hover={{
                        opacity: 0.7

                    }}
                    _active={{
                        opacity: 0.5
                    }}
                    transition="opacity 0.2s ease"
                >
                    <WhatsappIcon />
                    <Text
                        textStyle={"orion"}
                    >
                        join the group
                    </Text>
                </HStack>
            </a>
            <Text
                color={"palette.skylar"}
                textStyle={"hush"}
            >
                stay updated
            </Text>
        </VStack>
    )
}

export default JoinUnitGc