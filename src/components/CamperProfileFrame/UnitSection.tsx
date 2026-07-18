import { Text, VStack } from "@chakra-ui/react"
import ComingSoonText from "./ComingSoonText";
import Markdown from "react-markdown";
import MarkdownContent from "../util/MarkdownContent";

interface Props {
    unitDutiesMdText: string | null;
}

const UnitSection = ({
    unitDutiesMdText
}: Props) => {
    const renderContent = () => {
        if (unitDutiesMdText) {
            return <MarkdownContent>{unitDutiesMdText}</MarkdownContent>;
        }
        return (
            <VStack
                gap={"10px"}
                w={"100%"}
                alignItems={"start"}
            >
                <Text
                    color={"palette.room"}
                    fontWeight={"medium"}
                >
                    Unit Duties
                </Text>
                <ComingSoonText />
            </VStack>
        );
    }

    return (
        <VStack
            gap={"10px"}
            w={"100%"}
            alignItems={"start"}
        >
            {/* <Text
                color={"palette.room"}
                fontWeight={"medium"}
            >
                Unit Duties
            </Text> */}
            { renderContent() }
        </VStack>
    )
}

export default UnitSection