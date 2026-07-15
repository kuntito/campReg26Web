import { useEffect } from "react";
import useAppStore from "../../state-mgmt/appStore";
import CenterSpinner from "../util/CenterSpinner";
import ActionRefetchForm from "../registration-form/campers/ActionRefetchForm";
import CampersRegForm from "../registration-form/campers/RegistrationForm";

const RegistrationScreen = () => {
    const regDropdownsState = useAppStore(s => s.campersRegDropdownsState);
    const fetchRegDropdowns = useAppStore(s => s.fetchRegDropdowns)
    useEffect(() => {
        fetchRegDropdowns();
    }, []);
    
    if (regDropdownsState.kind === 'idle') return null;
    if (regDropdownsState.kind === 'fetching') return <CenterSpinner />;
    if (regDropdownsState.kind === 'error') return (
        <ActionRefetchForm
            retryAction={() => {
                fetchRegDropdowns();
            }} 
        />
    )


    return (
        <CampersRegForm 
            dropdownOptions={
                regDropdownsState.dropdownOptions
            }
        />
    )
}

export default RegistrationScreen