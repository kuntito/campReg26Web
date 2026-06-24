import { RegisteredCamperDetails } from "../../apiClient/registerCamper/registerCamper.types";
import AppDialog from "../util/AppDialog"
import RegistrationSuccess from "./RegistrationSuccess"

interface Props {
    isOpen: boolean;
    onDismiss: () => void;
    regCamperDetails: RegisteredCamperDetails;
}

const RegSuccessDialog = ({
    isOpen,
    onDismiss,
    regCamperDetails,
}: Props) => {
    const registrantName = `${regCamperDetails.firstName} ${regCamperDetails.lastName}`;

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