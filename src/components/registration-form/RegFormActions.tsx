import { VStack, Text } from "@chakra-ui/react"
import AppButton from "../util/AppButton"
import { Link } from "react-router-dom";;

interface Props {
    handleRegisterCamper: () => void;
    canRegister: boolean;    
}

const RegFormActions = ({
    handleRegisterCamper,
    canRegister,
}: Props) => {
    return (
        <VStack>
            <AppButton
                onClick={handleRegisterCamper}
                isDisabled={!canRegister}
            >
                register
            </AppButton>
            <Link
                to={"/my-details"}
            >
                <Text
                    textStyle={"orion"}
                    color={"palette.room"}
                    textDecoration={"underline"}
                >

                    i've registered
                </Text>
            </Link>
        </VStack>
    )
}

export default RegFormActions