import { Center, useToast, VStack } from "@chakra-ui/react";
import { useEffect } from "react";
import appToastConfig from "../../config/toastConfig";
import useAppStore from "../../state-mgmt/appStore";
import RegStatusCard from "../RegStatusFrame/RegStatusCard";
import AppButton from "../util/AppButton";
import CenterSpinner from "../util/CenterSpinner";


const ContentRegStatus = () => {
    const stateRegStatus = useAppStore(s => s.stateRegStatus);
    const resetFoo = useAppStore(s => s.resetStateRegStatus);
    const fetchRegStatus = useAppStore(s => s.fetchRegStatus);

    const isFetching = stateRegStatus.kind === 'fetching';
    const toast = useToast();

    useEffect(() => {
        if (stateRegStatus.kind === 'error') {
            toast({
                ...appToastConfig,
                description: stateRegStatus.reason,
                status: "error"
            });
            resetFoo();
        }
    }, [stateRegStatus]);

    useEffect(() => {
        fetchRegStatus()
    }, [])

    const handleRefresh = () => {
        if (isFetching) return;
        fetchRegStatus();
    }

    const renderContent = () => {
        switch(stateRegStatus.kind) {
            case 'idle':
                return null;
            case 'fetching':
                return <CenterSpinner />;
            case 'success':
                return (
                    <Center
                        w={"100%"}
                        h={"100%"}
                    >
                        <VStack
                            gap={"24px"}
                        >
                            <RegStatusCard 
                                regCountPerBranch={stateRegStatus.regCountPerBranch} 
                            />
                            <AppButton
                                onClick={handleRefresh}
                                isDisabled={isFetching}
                            >
                                refresh
                            </AppButton>
                        </VStack>
                    </Center>

                );
            case 'error':
                return null;
        }
    }

    return renderContent();
}

export default ContentRegStatus