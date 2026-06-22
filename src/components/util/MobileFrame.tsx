import { Center } from "@chakra-ui/react";

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
    >
        {children}
    </Center>;
}

export default MobileFrame;