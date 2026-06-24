import { Center } from "@chakra-ui/react";
import RegistrantCounter from "./RegistrantCounter";

interface MobileFrameProps {
    children?: React.ReactNode;
}

const MobileFrame = ({
    children
}: MobileFrameProps) => {
    return <Center
        width={"360px"}
        height={"640px"}
        borderWidth={"0.5px"}
        borderColor={"palette.branch"}
        borderRadius={"16px"}
        boxShadow={"sm"}
        overflow={"hidden"}
        position={"relative"}
    >
        {children}
        <RegistrantCounter
            position="absolute"
            top={"10px"}
            right={"16px"}
        />
    </Center>;
}

export default MobileFrame;