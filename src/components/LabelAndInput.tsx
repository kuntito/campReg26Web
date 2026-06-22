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
}


const LabelAndInput = ({
    label,
    value,
    placeholder,
    onChange,
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
                onBlur={() => setInputFocused(false)}
            />
        </VStack>
    )
}

export default LabelAndInput