import { VStack, Text, Box, Center } from "@chakra-ui/react"
import { useState } from "react";
import NameInputField from "./NameInputField";
import EmailInputField from "./EmailInputField";
import { RegDropdownOptions } from "../state-mgmt/appStore";
import DropdownField from "./DropdownField";
import { RegistrationData } from "../models";
import AppButton from "./AppButton";


interface Props {
    dropdownOptions: RegDropdownOptions;
}

const RegistrationForm = ({
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
            gap={0}
            h={"100%"}
            w={"100%"}
        >
            <Center
                w={"100%"}
                bg={"palette.room"}
                h={"48px"}
            >
                <Text
                    color={"palette.life"}
                    textStyle={"blaze"}
                >
                    Youth Camp '26
                </Text>
            </Center>
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
                        label="your unit"
                        options={dropdownOptions.units.map((u) => ({
                            id: u.unitId,
                            label: u.unitName,
                        }))}
                        onSelect={(id) => handleRegDataChange("unitId")(id)}
                    />
                    <DropdownField 
                        label="your fellowship"
                        options={dropdownOptions.fellowships.map((f) => ({
                            id: f.fellowshipId,
                            label: f.fellowshipName,
                        }))}
                        onSelect={(id) => handleRegDataChange("fellowshipId")(id)}
                    />
                    <DropdownField 
                        label="your branch"
                        options={dropdownOptions.branches.map((b) => ({
                            id: b.branchId,
                            label: b.branchName,
                        }))}
                        onSelect={(id) => handleRegDataChange("branchId")(id)}
                    />
                    <DropdownField
                        label="your sex"
                        options={dropdownOptions.sex.map((s, index) => ({
                            id: index,
                            label: s,
                        }))}
                        onSelect={(id) => handleRegDataChange("sex")(dropdownOptions.sex[id])}
                    />
                </VStack>
                <AppButton
                    onClick={() => {console.log(regData);
                    }}
                >
                    register
                </AppButton>
            </VStack>
        </VStack>
    )
}

export default RegistrationForm