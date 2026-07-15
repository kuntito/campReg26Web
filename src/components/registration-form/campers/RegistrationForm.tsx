import { VStack } from "@chakra-ui/react";
import RegFormContent from "./RegFormContent";
import RegFormHeader from "./RegFormHeader";
import { CampersRegDropdownOptions } from "../../../state-mgmt/slices/regFormSlice";


interface Props {
    dropdownOptions: CampersRegDropdownOptions;
}

const CampersRegForm = ({
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

export default CampersRegForm