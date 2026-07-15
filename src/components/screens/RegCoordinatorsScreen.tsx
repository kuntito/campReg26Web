import { useEffect } from "react";
import useAppStore from "../../state-mgmt/appStore"
import ActionRefetchForm from "../registration-form/campers/ActionRefetchForm";
import CoordinatorsRegForm from "../registration-form/coordinators/CoordRegForm"
import CenterSpinner from "../util/CenterSpinner";

const RegCoordinatorsScreen = () => {
    const coordRegDropdownState = useAppStore(s => s.coordRegDropdownsState);
    const fetchCoordDropdowns = useAppStore(s => s.fetchCoordRegDropdowns);

    useEffect(() => {
        fetchCoordDropdowns();
    }, [])

    if (coordRegDropdownState.kind === 'idle') return null;
    if (coordRegDropdownState.kind === 'fetching') return <CenterSpinner />;
    if (coordRegDropdownState.kind === 'error') return (
        <ActionRefetchForm
            retryAction={() => {
                fetchCoordDropdowns();
            }} 
        />
    );
    
    return (
        <CoordinatorsRegForm 
            dropdownOptions={
                coordRegDropdownState.dropdownOptions
            }
        />
    )
}

export default RegCoordinatorsScreen