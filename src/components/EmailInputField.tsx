import useSanitizedInput from "../hooks/useSanitizedInput";
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

    return (
        <LabelAndInput 
            label="email"
            placeholder="example@gmail.com"
            value={value}
            onChange={handleValueChange}
        />
    )
}

export default EmailInputField