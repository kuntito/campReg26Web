import { VStack } from "@chakra-ui/react";
import { CoordRegDropdownOptions } from "../../../state-mgmt/slices/coordinatorRegFormSlice";
import CoordRegFormHeader from "./CoordRegFormHeader";
import CoordRegFormContent from "./CoordRegFormContent";

interface Props {
    dropdownOptions: CoordRegDropdownOptions;
}

const CoordinatorsRegForm = ({
    dropdownOptions,
}: Props) => {
    return (
        <VStack
            gap={0}
            h={"100%"}
            w={"100%"}
        >
            <CoordRegFormHeader />
            <CoordRegFormContent
                dropdownOptions={dropdownOptions}
            />
        </VStack>
    )
}

export default CoordinatorsRegForm