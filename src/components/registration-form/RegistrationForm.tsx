import { VStack } from "@chakra-ui/react";
import RegFormContent from "./RegFormContent";
import RegFormHeader from "./RegFormHeader";
import { RegDropdownOptions } from "../../state-mgmt/slices/regFormSlice";


interface Props {
    dropdownOptions: RegDropdownOptions;
}

const RegistrationForm = ({
    dropdownOptions,
}: Props) => {


    return (
        <VStack
            gap={0}
            h={"100%"}
            w={"100%"}
        >
            <RegFormHeader />
            <RegFormContent
                dropdownOptions={dropdownOptions}
            />
        </VStack>
    )
}

export default RegistrationForm