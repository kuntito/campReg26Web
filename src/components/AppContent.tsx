import { useEffect } from "react";
import useAppStore from "../state-mgmt/appStore";
import CenterSpinner from "./util/CenterSpinner";
import RegistrationForm from "./RegistrationForm";

const AppContent = () => {
    const regDropdownsState = useAppStore(s => s.regDropdownsState);
    const fetchRegDropdowns = useAppStore(s => s.fetchRegDropdowns)
    useEffect(() => {
        fetchRegDropdowns();
    }, [])
    
    if (regDropdownsState.kind === 'fetching') return <CenterSpinner />;
    if (regDropdownsState.kind !== 'success') return null;

    return (
        <RegistrationForm 
            dropdownOptions={
                regDropdownsState.dropdownOptions
            }
        />
    )
}

export default AppContent