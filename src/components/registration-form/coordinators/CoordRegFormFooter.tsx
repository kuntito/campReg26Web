import { Text, Center, VStack } from "@chakra-ui/react";
import AppButton from "../../util/AppButton";
import RegisteringBadge from "../campers/RegisteringBadge";
import { Link } from "react-router-dom";

interface Props {
    isRegistering: boolean;
    handleRegisterCoord: () => void;
    canRegister: boolean;   
}


const CoordRegFormFooter = ({
    isRegistering,
    handleRegisterCoord,
    canRegister,
}: Props) => {
    return (
        <Center
            w={"100%"}
        >   
            <VStack
                gap={"16px"}
            >
                {
                    isRegistering ? 
                    <RegisteringBadge />
                    :
                    <AppButton
                        onClick={handleRegisterCoord}
                        isDisabled={!canRegister}
                    >
                        register
                    </AppButton>
                }
                <Link
                    to={"/coord/my-details"}
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
        </Center>
    )
}

export default CoordRegFormFooter