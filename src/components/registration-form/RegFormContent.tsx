import { VStack } from "@chakra-ui/react";
import { useState } from "react";
import { RegistrationData } from "../../models";
import AppButton from "../util/AppButton";
import DropdownField from "./input-fields/DropdownField";
import EmailInputField from "./input-fields/EmailInputField";
import { RegDropdownOptions } from "../../state-mgmt/appStore";
import NameInputField from "./input-fields/NameInputField";


interface Props {
    dropdownOptions: RegDropdownOptions;
}

const RegFormContent = ({
    dropdownOptions,
}: Props) => {
    const [regData, setRegData] = useState<RegistrationData>({
        firstName: "",
        lastName: "",
        email: "",
        branchId: null,
        sex: null,
        fellowshipId: null,
        unitId: null,
    });

    const isFormValid = 
        regData.firstName.trim() !== "" &&
        regData.lastName.trim() !== "" &&
        regData.email.trim() !== "" &&
        regData.branchId !== null &&
        regData.sex !== null &&
        regData.fellowshipId !== null &&
        regData.unitId !== null;

    const handleStringChange = (
        formField: keyof RegistrationData
    ) => (
        value: string
    ) => {
        setRegData({
            ...regData,
            [formField]: value
        });
    }

    const handleRegDataChange = (
        formField: keyof RegistrationData
    ) => (
        value: RegistrationData[typeof formField]
    ) => {
        setRegData({
            ...regData,
            [formField]: value
        });
    }

    return (
        <VStack
            gap={"32px"}
            h={"100%"}
            justifyContent={"center"}
        >
            <VStack>
                <NameInputField
                    label={"first name"}
                    value={regData.firstName}
                    onValueChange={handleStringChange("firstName")}
                />
                <NameInputField
                    label={"last name"}
                    value={regData.lastName}
                    onValueChange={handleStringChange("lastName")}
                />
            </VStack>
            <EmailInputField 
                value={regData.email}
                onValueChange={handleStringChange("email")}
            />
            <VStack
                gap={"12px"}
            >
                <DropdownField
                    label="your gender"
                    floatingLabel="gender"
                    options={dropdownOptions.sex.map((
                        s: string,
                        index: number
                    ) => ({
                        id: index,
                        label: s,
                    }))}
                    onSelect={(id) => handleRegDataChange("sex")(dropdownOptions.sex[id])}
                />
                <DropdownField 
                    label="your branch"
                    floatingLabel="branch"
                    options={dropdownOptions.branches.map((b) => ({
                        id: b.branchId,
                        label: b.branchName,
                    }))}
                    onSelect={(id) => handleRegDataChange("branchId")(id)}
                />
                <DropdownField 
                    label="your fellowship"
                    floatingLabel="fellowship"
                    options={dropdownOptions.fellowships.map((f) => ({
                        id: f.fellowshipId,
                        label: f.fellowshipName,
                    }))}
                    onSelect={(id) => handleRegDataChange("fellowshipId")(id)}
                />
                <DropdownField 
                    label="your unit"
                    floatingLabel="unit"
                    options={dropdownOptions.units.map((u) => ({
                        id: u.unitId,
                        label: u.unitName,
                    }))}
                    onSelect={(id) => handleRegDataChange("unitId")(id)}
                />
            </VStack>
            <AppButton
                onClick={
                    () => {console.log(regData);}
                }
                isDisabled={!isFormValid}
            >
                register
            </AppButton>
        </VStack>
    )
}

export default RegFormContent