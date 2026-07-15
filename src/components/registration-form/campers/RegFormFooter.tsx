import { Center } from "@chakra-ui/react";
import RegFormActions from "./RegFormActions";
import RegisteringBadge from "./RegisteringBadge";

interface Props {
    isRegistering: boolean;
    handleRegisterCamper: () => void;
    canRegister: boolean;   
}

const RegFormFooter = ({
    isRegistering,
    handleRegisterCamper,
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
                <RegFormActions 
                    handleRegisterCamper={handleRegisterCamper}
                    canRegister={canRegister}
                />
            }
        </Center>
    )
}

export default RegFormFooter