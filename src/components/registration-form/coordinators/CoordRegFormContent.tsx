import { useEffect, useState } from "react";
import { CoordRegDropdownOptions } from "../../../state-mgmt/slices/coordinatorRegFormSlice"
import { CoordRegData } from "../../../models";
import { validateEmail } from "../../../util/validateEmail";
import useAppStore from "../../../state-mgmt/appStore";
import { CoordDetailsReqBody } from "../../../apiClient/registerCoordinator/registerCoordinator.types";
import { useToast, VStack } from "@chakra-ui/react";
import appToastConfig from "../../../config/toastConfig";
import NameInputField from "../input-fields/NameInputField";
import EmailInputField from "../input-fields/EmailInputField";
import DropdownField from "../input-fields/DropdownField";
import CoordRegFormFooter from "./CoordRegFormFooter";

interface Props {
    dropdownOptions: CoordRegDropdownOptions;
}

const emptyCoordRegData = {
    firstName: "",
    lastName: "",
    email: "",
    branchId: null,
    genderId: null,
    lodgeOptionId: null,
};

const CoordRegFormContent = ({
    dropdownOptions
}: Props) => {
    const [regData, setRegData] = useState<CoordRegData>(emptyCoordRegData);

    const isFormValid = 
        regData.firstName.trim() !== "" &&
        regData.lastName.trim() !== "" &&
        validateEmail(regData.email) &&
        regData.branchId !== null &&
        regData.genderId !== null &&
        regData.lodgeOptionId !== null;

    const handleRegDataChange = (
        formField: keyof CoordRegData
    ) => (
        value: CoordRegData[typeof formField]
    ) => {
        setRegData(prev => ({
            ...prev,
            [formField]: value
        }));
    }

    const toast = useToast();
    const regState = useAppStore(s => s.regCoordState);
    const resetState = useAppStore(s => s.resetRegCoordState);
    const isRegistering = regState.kind === 'awaiting response';


    const regCoordinator = useAppStore(s => s.regCoordinator);
    const handleRegisterCoordinator = () => {
        if (!isFormValid) return;
        if (isRegistering) return;
        regCoordinator(regData as CoordDetailsReqBody);
    }

    useEffect(() => {
        switch (regState.kind) {
            case 'success':
                toast({
                    ...appToastConfig,
                    description: 'success!',
                    status: "success"
                })
                resetState();
                setRegData(emptyCoordRegData);
                break;
            case 'error':
                toast({
                    ...appToastConfig,
                    description: regState.reason,
                    status: "error"
                })
                resetState();
                break;
            case 'awaiting response':
                // show loading
                break;
            case 'idle':
                // do nothing
                break;
        }
    }, [regState]);

    return (
        <VStack
            gap={"32px"}
            h={"100%"}
            justifyContent={"center"}
        >
            <VStack            
                gap={"32px"}
                justifyContent={"center"}
                opacity={isRegistering ? 0.5 : 1}
                pointerEvents={isRegistering ? "none" : "auto"}
            >
                <VStack>
                    <NameInputField
                        label={"first name"}
                        value={regData.firstName}
                        onValueChange={handleRegDataChange("firstName")}
                    />
                    <NameInputField
                        label={"last name"}
                        value={regData.lastName}
                        onValueChange={handleRegDataChange("lastName")}
                    />
                    <EmailInputField 
                        value={regData.email}
                        onValueChange={handleRegDataChange("email")}
                    />
                </VStack>
                <VStack
                    gap={"12px"}
                >
                    <DropdownField
                        label="your gender"
                        floatingLabel="gender"
                        options={
                            dropdownOptions.genders.map((g) => ({
                                id: g.genderId,
                                label: g.genderName,
                            }))
                        }
                        selectedId={regData.genderId}
                        onSelect={(id) => handleRegDataChange("genderId")(id)}
                    />
                    <DropdownField 
                        label="your state"
                        floatingLabel="state"
                        options={dropdownOptions.branches.map((b) => ({
                            id: b.branchId,
                            label: b.branchName,
                        }))}
                        selectedId={regData.branchId}
                        onSelect={(id) => handleRegDataChange("branchId")(id)}
                    />
                    <DropdownField 
                        label="are you sleeping in camp hostel?"
                        floatingLabel="lodging arrangements"
                        options={dropdownOptions.lodgeOptions.map((lopt) => ({
                            id: lopt.lodgeOptionId,
                            label: lopt.lodgeOptionText,
                        }))}
                        selectedId={regData.lodgeOptionId}
                        onSelect={(id) => handleRegDataChange("lodgeOptionId")(id)}
                    />
                </VStack>
            </VStack>
            <CoordRegFormFooter
                isRegistering={isRegistering}
                handleRegisterCoord={handleRegisterCoordinator}
                canRegister={isFormValid}
            />
        </VStack>
    )
}

export default CoordRegFormContent