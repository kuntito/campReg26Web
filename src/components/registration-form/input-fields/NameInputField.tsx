import useSanitizedInput from "../../../hooks/useSanitizedInput";
import LabelAndInput from "./LabelAndInput";

interface NameInputProps {
    label: string;
    value: string;
    onValueChange: (newValue: string) => void;
}

const NameInputField = ({
    label,
    value,
    onValueChange,
}: NameInputProps) => {

    const { handleValueChange } = useSanitizedInput(
        onValueChange,
        {
            regex: /[^A-Za-z-]/g,
            errorMessage: "only alphabets and hyphen allowed",
        }
    )

    return (
        <LabelAndInput
            label={label}
            value={value}
            onChange={handleValueChange}
        />
    )
}

export default NameInputField;