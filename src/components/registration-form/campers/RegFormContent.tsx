import { Box, useToast, VStack, Text, Center } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { RegistrationData } from "../../../models";
import AppButton from "../../util/AppButton";
import DropdownField from "../input-fields/DropdownField";
import EmailInputField from "../input-fields/EmailInputField";
import NameInputField from "../input-fields/NameInputField";
import { CampersRegDropdownOptions } from "../../../state-mgmt/slices/regFormSlice";
import useAppStore from "../../../state-mgmt/appStore";
import { CamperDetailsReqBody } from "../../../apiClient/registerCamper/registerCamper.types";
import appToastConfig from "../../../config/toastConfig";
import RegFormFooter from "./RegFormFooter";
import { validateEmail } from "../../../util/validateEmail";


interface Props {
    dropdownOptions: CampersRegDropdownOptions;
}

const RegFormContent = ({
    dropdownOptions,
}: Props) => {    
    const [regData, setRegData] = useState<RegistrationData>({
        firstName: "",
        lastName: "",
        email: "",
        branchId: null,
        genderId: null,
        fellowshipId: null,
        unitId: null,
    });

    const isFormValid = 
        regData.firstName.trim() !== "" &&
        regData.lastName.trim() !== "" &&
        validateEmail(regData.email) &&
        regData.branchId !== null &&
        regData.genderId !== null &&
        regData.fellowshipId !== null &&
        regData.unitId !== null;


    const handleRegDataChange = (
        formField: keyof RegistrationData
    ) => (
        value: RegistrationData[typeof formField]
    ) => {
        setRegData(prev => ({
            ...prev,
            [formField]: value
        }));
    }

    const regCamper = useAppStore(s => s.regCamper)
    const handleRegisterCamper = () => {
        if (!isFormValid) return;
        if (isRegistering) return;
        regCamper(regData as CamperDetailsReqBody);
    };


    const toast = useToast();
    const regStatus = useAppStore(s => s.regCamperStatus);
    const resetRegStatus = useAppStore(s => s.resetRegStatus);
    const isRegistering = regStatus.kind === 'awaiting response';
    useEffect(() => {
        switch (regStatus.kind) {
            case 'success':
                toast({
                    ...appToastConfig,
                    description: 'success!',
                    status: "success"
                })
                resetRegStatus();
                break;
            case 'error':
                toast({
                    ...appToastConfig,
                    description: regStatus.reason,
                    status: "error"
                })
                resetRegStatus();
                break;
            case 'awaiting response':
                // show loading
                break;
            case 'idle':
                // do nothing
                break;
        }
    }, [regStatus])

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
                        label="your fellowship"
                        floatingLabel="fellowship"
                        options={dropdownOptions.fellowships.map((f) => ({
                            id: f.fellowshipId,
                            label: f.fellowshipName,
                        }))}
                        selectedId={regData.fellowshipId}
                        onSelect={(id) => handleRegDataChange("fellowshipId")(id)}
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
                        label="your unit"
                        floatingLabel="unit"
                        options={dropdownOptions.units.map((u) => ({
                            id: u.unitId,
                            label: u.unitName,
                        }))}
                        selectedId={regData.unitId}
                        onSelect={(id) => handleRegDataChange("unitId")(id)}
                    />
                </VStack>
            </VStack>
            <RegFormFooter
                isRegistering={isRegistering}
                handleRegisterCamper={handleRegisterCamper}
                canRegister={isFormValid}
            />
        </VStack>
    )
}

export default RegFormContent