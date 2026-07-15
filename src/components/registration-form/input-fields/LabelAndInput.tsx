import { Text, VStack } from "@chakra-ui/react";
import { useState } from "react";
import AppInputField from "./AppInputField";
import { useLocation } from "react-router-dom";
import { checkIsCoordinatorPage } from "../../../util/checkCoordinatorPage";


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

    const location = useLocation();
    const isCoordinatorPage = checkIsCoordinatorPage(location);

    // TODO the coordinator page, has a different color gradient
    // hence, the color change, to contrast the with the bg.
    // see `GradientLayer.tsx` for details
    const labelColor = isCoordinatorPage ? "palette.life" : "palette.room";
    
    return (
        <VStack
            gap={"4px"}
            alignItems={"start"}
        >
            <Text
                textStyle={"orion"}
                fontWeight={isInputFocused ? "medium" : "normal"}
                color={labelColor}
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