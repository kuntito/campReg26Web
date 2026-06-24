import { Text, Center, VStack } from "@chakra-ui/react"
import { ConstructionIcon } from "../icons/ConstructionIcon"
import { Link } from "react-router-dom"

const MyDetailsScreen = () => {
    return (
        <Center>
            <VStack
                gap={"16px"}
            >
                <ConstructionIcon 
                    boxSize={"138px"}
                    color={"palette.life"}
                />
                <Text
                    textStyle="blaze"
                    color={"palette.room"}
                    animation="blink 0.7s ease-in-out infinite alternate"
                    sx={{
                        "@keyframes blink": {
                            "from": { opacity: 0.85 },
                            "to": { opacity: 0.2 },
                        }
                    }}
                >
                    details coming soon...
                </Text>
                <Link
                    to={"/"}
                >
                    <Text
                        textStyle={"orion"}
                        color={"palette.room"}
                        textDecoration={"underline"}
                    >
                        back to registration
                    </Text>
                </Link>
            </VStack>
        </Center>
    )
}

export default MyDetailsScreen