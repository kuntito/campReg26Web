import { useState } from "react";
import useSanitizedInput from "../../../hooks/useSanitizedInput";

import { Box, Text } from "@chakra-ui/react";
import LabelAndInput from "./LabelAndInput";

interface Props {
    value: string;
    onValueChange: (newValue: string) => void;
}

const EmailInputField = ({
    value,
    onValueChange,
}: Props) => {

    const {
        handleValueChange
    } = useSanitizedInput(
        onValueChange,
        {
            regex: /[^a-zA-Z0-9@._-]/g,
            errorMessage: "invalid email character"
        }
    )

    const [isInvalid, setIsInvalid] = useState(false);
    const handleBlur = () => {
        const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
        setIsInvalid(!isValid);
    };

    return (
        <Box
            position={"relative"}
        >
            <LabelAndInput 
                label="email"
                placeholder="example@gmail.com"
                value={value}
                onChange={handleValueChange}
                onBlur={handleBlur}
                isInvalid={isInvalid}
            />
            {isInvalid && (
                <Text
                    textStyle={"hush"}
                    color="red"
                    paddingLeft={"8px"}
                    paddingTop={"4px"}
                    position={"absolute"}
                >
                    type a valid email
                </Text>
            )}
        </Box>
    )
}

export default EmailInputField