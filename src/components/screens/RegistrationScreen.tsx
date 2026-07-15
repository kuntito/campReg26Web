import { useEffect } from "react";
import useAppStore from "../../state-mgmt/appStore";
import CenterSpinner from "../util/CenterSpinner";
import ActionRefetchForm from "../registration-form/campers/ActionRefetchForm";
import RegistrationForm from "../registration-form/campers/RegistrationForm";

const RegistrationScreen = () => {
    const regDropdownsState = useAppStore(s => s.regDropdownsState);
    const fetchRegDropdowns = useAppStore(s => s.fetchRegDropdowns)
    useEffect(() => {
        fetchRegDropdowns();
    }, [])
    
    if (regDropdownsState.kind === 'idle') return null;
    if (regDropdownsState.kind === 'fetching') return <CenterSpinner />;
    if (regDropdownsState.kind === 'error') return <ActionRefetchForm />


    return (
        <RegistrationForm 
            dropdownOptions={
                regDropdownsState.dropdownOptions
            }
        />
    )
}

export default RegistrationScreen