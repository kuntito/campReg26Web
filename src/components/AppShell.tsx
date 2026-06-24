import { Box, Center, Image } from '@chakra-ui/react'
import GradientLayer from './bg/GradientLayer'
import { ParticleLayer } from './bg/ParticleLayer'
import MobileFrame from './util/MobileFrame';
import { Outlet } from 'react-router-dom';

interface Props {
    children?: React.ReactNode;
}

const AppShell = ({
    children
}: Props) => {
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
            <ParticleLayer />
        </Box>
    )
}

export default AppShell