import { useToast } from "@chakra-ui/react";
import appToastConfig from "../../config/toastConfig";

interface SanitizedInputConfig {
    regex: RegExp;
    errorMessage: string;
}

/**
 * sanitizes input on every keystroke using the provided regex.
 * if any characters get stripped, it fires a toast with the error message.
 */
const useSanitizedInput = (
    onValueChange: (value: string) => void,
    config: SanitizedInputConfig,
) => {
    const toast = useToast();

    const handleValueChange = (
        e: React.ChangeEvent<HTMLInputElement>
    ) => {
        const newValue = e.target.value;
        const sanitizedValue = newValue.replace(
            config.regex,
            ""
        );
        onValueChange(sanitizedValue);
        if (sanitizedValue !== newValue ) {
            toast({
                ...appToastConfig,
                description: config.errorMessage,
                status: "info"
            })
        }
    }

    return { handleValueChange };
}

export default useSanitizedInput;