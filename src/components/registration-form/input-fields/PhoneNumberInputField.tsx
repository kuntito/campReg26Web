import { Text, HStack, Input, Select, VStack } from "@chakra-ui/react";
import { DropdownOption } from "./DropdownField";
import AppInputField from "./AppInputField";
import { useState } from "react";
import useSanitizedInput from "../../../hooks/useSanitizedInput";

interface Props {
    countryCodes: DropdownOption[];
    selectedId: number;
    onSelect: (id: number) => void;

    value: string;
    onValueChange: (newValue: string) => void;
    placeholder: string;
    isInvalid?: boolean;
}

const PhoneNumberInputField = ({
    selectedId,
    onSelect,
    countryCodes,

    value,
    onValueChange,
    placeholder,
    isInvalid,
}: Props) => {
    const [isInputFocused, setInputFocused ] = useState(false);
    const [isSelectFocused, setSelectFocused] = useState(false);
    const isFocused = isInputFocused || isSelectFocused;

    const { handleValueChange } = useSanitizedInput(
        onValueChange,
        {
            regex: /[^\d]/g,
            errorMessage: "only digits are allowed.",
        }
    );
    
    return (
        <VStack
            gap={"4px"}
            alignItems={"start"}
        >
            <Text
                textStyle={"orion"}
                fontWeight={isFocused ? "medium" : "normal"}
                color={"palette.room"}
            >
                phone number
            </Text>
            <HStack
                gap={0}
                borderRadius={"16px"}
                bg={"palette.lifeAlpha"}
                overflow={"hidden"}

                boxShadow={isFocused ? "none" : "none"}
                borderWidth={isFocused ? "2px" : "0px"}
                borderColor={isFocused ? "palette.room" : "transparent"}
            >
                <Select
                    value={selectedId}
                    onChange={(e) => {
                        onSelect(Number(e.target.value))
                        e.target.blur();
                    }}
                    _focus={{
                        boxShadow: "none",
                        border: "none",
                    }}
                    border={"none"}
                    color={"palette.room"}
                    bg={"none"}
                    borderRadius={0}
                    w={"100px"}

                    onFocus={() => setSelectFocused(true)}
                    onBlur={() => setSelectFocused(false)}
                >
                    {countryCodes.map(op => (
                        <option key={op.id} value={op.id}>
                            {op.label}
                        </option>
                    ))}
                </Select>
                <Input
                    color={"palette.room"}
                    bg={"palette.lifeAlpha"}

                    _placeholder={{
                        fontStyle: "italic",
                        fontWeight: "thin",
                    }}
                    _focus={{
                        boxShadow: "none",
                        border: "none",
                    }}
                    border={"none"}
                    w={"200px"}
                    _autofill={{
                        boxShadow: "0 0 0px 1000px #FFFFFFCC inset",
                        textFillColor: "#1E2A49",
                    }}
                    borderRadius={0}
                    value={value}
                    onChange={handleValueChange}
                    placeholder={isInputFocused ? placeholder : ""}
                    onFocus={() => setInputFocused(true)}
                    onBlur={() => {
                        setInputFocused(false);
                    }}
                />
            </HStack>
        </VStack>
    )
}

export default PhoneNumberInputField