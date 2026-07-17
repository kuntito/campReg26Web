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
import PhoneNumberInputField from "../input-fields/PhoneNumberInputField";
import { validatePhoneNumber } from "../../../util/validatePhoneNumber";
import { constructPhoneNumber } from "../../../util/constructPhoneNumber";


interface Props {
    dropdownOptions: CampersRegDropdownOptions;
}

// FIXME this assumes the first country code is, 1,
// in the database, 1 reps Nigeria's country code, +234, 
// if that changes, this breaks.
const DEFAULT_COUNTRY_CODE_ID = 1;

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
        countryCodeId: DEFAULT_COUNTRY_CODE_ID, 
        digitsPhoneNumber: "",
    });

    const isFormValid = 
        regData.firstName.trim() !== "" &&
        regData.lastName.trim() !== "" &&
        validateEmail(regData.email) &&
        regData.branchId !== null &&
        regData.genderId !== null &&
        regData.fellowshipId !== null &&
        regData.unitId !== null &&
        regData.countryCodeId !== null &&
        validatePhoneNumber(regData.digitsPhoneNumber);


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

        const reqBody: CamperDetailsReqBody = {
            firstName: regData.firstName,
            lastName: regData.lastName,
            email: regData.email,
            genderId: regData.genderId!,
            branchId: regData.branchId!,
            fellowshipId: regData.fellowshipId!,
            unitId: regData.unitId!,
            phoneNumber: constructPhoneNumber(
                regData.countryCodeId!,
                dropdownOptions,
                regData.digitsPhoneNumber
            ),
        }

        
        regCamper(reqBody);
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
            gap={"16px"}
            h={"100%"}
            justifyContent={"center"}
        >
            <VStack            
                gap={"24px"}
                justifyContent={"center"}
                opacity={isRegistering ? 0.5 : 1}
                pointerEvents={isRegistering ? "none" : "auto"}
            >
                <VStack
                    gap={0}
                >
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
                    <PhoneNumberInputField
                        countryCodes={
                            dropdownOptions.countryCodes.map((cc) => ({
                                id: cc.countryCodeId,
                                label: cc.countryCode,
                            }))
                        }
                        selectedId={regData.countryCodeId ?? DEFAULT_COUNTRY_CODE_ID}
                        onSelect={(id) => handleRegDataChange("countryCodeId")(id)}

                        value={regData.digitsPhoneNumber}
                        placeholder="8012345678"
                        onValueChange={handleRegDataChange("digitsPhoneNumber")}
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