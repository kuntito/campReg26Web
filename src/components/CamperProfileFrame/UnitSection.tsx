import { HStack, Text, VStack } from "@chakra-ui/react"
import ComingSoonText from "./ComingSoonText";
import Markdown from "react-markdown";
import MarkdownContent from "../util/MarkdownContent";
import JoinUnitGc from "./JoinUnitGc";

interface Props {
    unitDutiesMdText: string | null;
    unitGroupChatLink: string | null;
}

const UnitSection = ({
    unitDutiesMdText,
    unitGroupChatLink
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
            <HStack
                justifyContent={"center"}
                w={"100%"}
                py={"8px"}
            >
                { unitGroupChatLink && (
                    <JoinUnitGc
                        link={unitGroupChatLink}
                    />
                )}
            </HStack>
        </VStack>
    )
}

export default UnitSection