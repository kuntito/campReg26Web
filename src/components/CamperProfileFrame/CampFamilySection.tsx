import { VStack, Text } from "@chakra-ui/react"
import ComingSoonText from "./ComingSoonText"
import MarkdownContent from "../util/MarkdownContent";

interface Props {
    familyName: string | null,
    familyInfoMdText: string | null,
}

const CampFamilySection = ({
    familyName,
    familyInfoMdText
}: Props) => {
    const hasFamilyData = familyName != null && familyInfoMdText != null;
    return (
        <VStack
            gap={"4px"}
            w={"100%"}
            alignItems={"start"}
        >
            <Text
                color={"palette.room"}
                fontWeight={"medium"}
            >
                Camp Family{hasFamilyData && ` - ${familyName}`}
            </Text>
            {hasFamilyData && (
                <VStack
                    alignItems={"start"}
                >
                    <Text>
                        as part of this family, you're expected to learn about the life of {familyName}.
                        <br/>
                        <br/>
                        
                        to guide your study, focus on:
                    </Text>
                    <MarkdownContent>
                        {familyInfoMdText}
                    </MarkdownContent>
                </VStack>
            )}
            {!hasFamilyData && <ComingSoonText /> }
        </VStack>
    )
}

export default CampFamilySection