import { RegisteredCamperDetails } from "../../../apiClient/registerCamper/registerCamper.types";
import AppDialog from "../../util/AppDialog"
import RegistrationSuccess from "./RegistrationSuccess"

interface Props {
    isOpen: boolean;
    onDismiss: () => void;
    firstName: string;
    lastName: string;
}

const RegSuccessDialog = ({
    isOpen,
    onDismiss,
    firstName,
    lastName,
}: Props) => {
    const registrantName = `${firstName} ${lastName}`;

    return (
        <AppDialog
            isOpen={isOpen}
            onDismiss={onDismiss}
            body={
                <RegistrationSuccess 
                    registrantName={registrantName}
                />
            }
        />
    )
}

export default RegSuccessDialog