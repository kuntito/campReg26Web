import { Text, VStack } from "@chakra-ui/react";
import { useState } from "react";
import AppInputField from "./AppInputField";


interface Props {
    label: string;
    value: string;
    placeholder?: string;
    onChange: (
        e: React.ChangeEvent<HTMLInputElement>
    ) => void;
    onBlur?: () => void;
    isInvalid?: boolean;
}


const LabelAndInput = ({
    label,
    value,
    placeholder,
    onChange,
    onBlur,
    isInvalid,
}: Props) => {

    const [isInputFocused, setInputFocused ] = useState(false);

    
    return (
        <VStack
            gap={"4px"}
            alignItems={"start"}
        >
            <Text
                textStyle={"orion"}
                fontWeight={isInputFocused ? "medium" : "normal"}
            >
                {label}
            </Text>
            <AppInputField
                value={value}
                onChange={onChange}
                placeholder={isInputFocused ? placeholder : ""}
                onFocus={() => setInputFocused(true)}
                onBlur={() => {
                    setInputFocused(false);
                    onBlur?.();
                }}
                isInvalid={isInvalid}
            />
        </VStack>
    )
}

export default LabelAndInput