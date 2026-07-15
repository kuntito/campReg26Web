import { Center } from "@chakra-ui/react";
import AppButton from "../../util/AppButton";
import RegisteringBadge from "../campers/RegisteringBadge";

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
        </Center>
    )
}

export default CoordRegFormFooter