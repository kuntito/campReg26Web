import { Box, Center, Image } from '@chakra-ui/react'
import GradientLayer from './bg/GradientLayer'
import { ParticleLayer } from './bg/ParticleLayer'
import MobileFrame from './util/MobileFrame';
import { Outlet, useNavigate } from 'react-router-dom';
import useAppStore from '../state-mgmt/appStore';
import { useEffect, useState } from 'react';
import RegSuccessDialog from './registration-form/campers/RegSuccessDialog';
import { RegisteredCamperDetails } from '../apiClient/registerCamper/registerCamper.types';

interface Props {
    children?: React.ReactNode;
}

// FIXME, i extracted this solely for displaying the success dialog after registration
// works for campers and coordinators
// i could call it `RegisteredCamperDetails`, but an object already exists for that
// referring to the details of a registered campers. and by campers, i mean not-coordinators.
// hence, the object has `unit` and `fellowship` information, which doesn't pertain to coordinators.
// a refactor would have to consider these differences.
type CamperName = {
    firstName: string;
    lastName: string;
}

// TODO start here, write the dialog for successful coordinator registration.
const AppShell = ({
    children
}: Props) => {
    const navigateTo = useNavigate();

    const regCamperStatus = useAppStore(s => s.regCamperStatus);
    const regCoordState = useAppStore(s => s.regCoordState);
    const resetRegCoordState = useAppStore(s => s.resetRegCoordState);

    const fetchCamperProfile = useAppStore(s => s.fetchCamperProfile);

    const [isRegSuccessDiagOpen, setRegSuccessDiagOpen] = useState(false);
    const [
        registeredCamperName, 
        setRegisteredCamperName
    ] = useState<CamperName | null>(null);

    const dialog_dismiss_timeout_ms = 5000;

    useEffect(() => {
        if (regCamperStatus.kind === 'success') {
            setRegSuccessDiagOpen(true);

            const { firstName, lastName } = regCamperStatus.registeredCamperDetails;
            setRegisteredCamperName({
                firstName,
                lastName
            });
            fetchCamperProfile(regCamperStatus.registeredCamperDetails.email);
            navigateTo("/my-details");

            setTimeout(() => {
                handleDialogDismiss();
            }, dialog_dismiss_timeout_ms);
        } else if (regCoordState.kind === 'success') {
            setRegSuccessDiagOpen(true);

            const { firstName, lastName } = regCoordState.registeredCoordDetails;
            setRegisteredCamperName({
                firstName,
                lastName
            });

            resetRegCoordState();
            setTimeout(() => {
                handleDialogDismiss();
            }, dialog_dismiss_timeout_ms);

        }
    }, [regCamperStatus.kind, regCoordState.kind]);

    const handleDialogDismiss = () => {
        setRegSuccessDiagOpen(false);
        setRegisteredCamperName(null);
    }

    return (
        <Box 
            position={"relative"}
            w={"100%"}
            h={"100vh"}
        >
            <GradientLayer
                position="absolute"
                inset={0}        
                />
            <Center
                position="absolute"
                inset={0}
            >
                <Image
                    src='/algc_logo.png'
                    opacity={0.05}
                    boxSize={"200px"}
                />
            </Center>
            <Center
                position={"absolute"}
                top={0}
                left={0}
                right={0}
                flexDirection={"column"}
                minH={"100vh"}
                overflowY={"auto"}
            >
                <MobileFrame>
                    <Outlet />
                </MobileFrame>
            </Center>
            {
                registeredCamperName &&             
                <RegSuccessDialog 
                    isOpen={isRegSuccessDiagOpen}
                    onDismiss={handleDialogDismiss}
                    firstName={registeredCamperName.firstName}
                    lastName={registeredCamperName.lastName}
                />
            }
            <ParticleLayer />
        </Box>
    )
}

export default AppShell