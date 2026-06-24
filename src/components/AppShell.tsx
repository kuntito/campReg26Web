import { Box, Center, Image } from '@chakra-ui/react'
import GradientLayer from './bg/GradientLayer'
import { ParticleLayer } from './bg/ParticleLayer'
import MobileFrame from './util/MobileFrame';
import { Outlet, useNavigate } from 'react-router-dom';
import useAppStore from '../state-mgmt/appStore';
import { useEffect, useState } from 'react';
import RegSuccessDialog from './registration-form/RegSuccessDialog';

interface Props {
    children?: React.ReactNode;
}

const AppShell = ({
    children
}: Props) => {
    const navigateTo = useNavigate();

    const regCamperStatus = useAppStore(s => s.regCamperStatus);

    const [isRegSuccessDiagOpen, setRegSuccessDiagOpen] = useState(false);
    const [
        registeredCamperDetails, 
        setRegisteredCamperDetails
    ] = useState<RegisteredCamperDetails | null>(null);

    useEffect(() => {
        if (regCamperStatus.kind === 'success') {
            setRegSuccessDiagOpen(true);
            setRegisteredCamperDetails(
                regCamperStatus.registeredCamperDetails
            )
            navigateTo("/my-details");
        }
    }, [regCamperStatus.kind])

    const handleDialogDismiss = () => {
        setRegSuccessDiagOpen(false);
        setRegisteredCamperDetails(null);
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
                registeredCamperDetails &&             
                <RegSuccessDialog 
                    isOpen={isRegSuccessDiagOpen}
                    onDismiss={handleDialogDismiss}
                    regCamperDetails={registeredCamperDetails}
                />
            }
            <ParticleLayer />
        </Box>
    )
}

export default AppShell