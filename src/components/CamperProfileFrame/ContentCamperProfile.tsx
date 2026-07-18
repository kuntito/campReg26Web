import { useToast, VStack } from "@chakra-ui/react"
import EmailInputField from "../registration-form/input-fields/EmailInputField"
import { useEffect, useState } from "react"
import AppButton from "../util/AppButton";
import useAppStore from "../../state-mgmt/appStore";
import CenterSpinner from "../util/CenterSpinner";
import appToastConfig from "../../config/toastConfig";
import CamperProfileCard from "./CamperProfileCard";
import { validateEmail } from "../../util/validateEmail";
import AddPhoneNumberAction from "./AddPhoneNumberAction";

const ContentCamperProfile = () => {
    const [regEmail, setRegEmail] = useState<string>("");

    const isEmailValid = validateEmail(regEmail);

    const stateFetchCamperProfile = useAppStore(s => s.stateFetchCamperProfile);
    const resetStateCamperProfile = useAppStore(s => s.resetStateCamperProfile);
    const isFetching = stateFetchCamperProfile.kind === 'fetching';

    const fetchCamperProfile = useAppStore(s => s.fetchCamperProfile);
    const handleFetchCamperProfile = () => {
        if (!isEmailValid) return;
        if (isFetching) return;

        fetchCamperProfile(regEmail);
    }

    const toast = useToast();


    useEffect(() => {
        if (stateFetchCamperProfile.kind === 'success') {
            setRegEmail("");
        }
        if (stateFetchCamperProfile.kind === 'error') {
            toast({
                ...appToastConfig,
                description: stateFetchCamperProfile.reason,
                status: "error"
            })
            resetStateCamperProfile();
        }
    }, [stateFetchCamperProfile]);


    const renderContent = () => {
        switch(stateFetchCamperProfile.kind) {
            case 'idle':
                return (
                    <VStack
                        gap={"32px"}
                        h={"100%"}
                        justifyContent={"center"}
                    >
                        <EmailInputField 
                        label={"registration email"}
                            value={regEmail}
                            onValueChange={setRegEmail}
                        />
                        <AppButton
                            onClick={handleFetchCamperProfile}
                            isDisabled={!isEmailValid}
                        >
                            check your details
                        </AppButton>
                    </VStack>
                )
            case 'fetching':
                return <CenterSpinner />;
            case 'success':
                const doWeHaveTheirPhoneNumber = stateFetchCamperProfile.profile.isRegPhoneNumber;
                if (doWeHaveTheirPhoneNumber) {
                    return (
                        <CamperProfileCard profile={stateFetchCamperProfile.profile} />
                    );
                } else {
                    return (
                        <AddPhoneNumberAction
                            firstName={stateFetchCamperProfile.profile.firstName}
                            lastName={stateFetchCamperProfile.profile.lastName}
                            camperId={stateFetchCamperProfile.profile.camperId}
                        />
                    );
                }
            case 'error':
                return null;
        }
    }

    return renderContent();
}

export default ContentCamperProfile