import { VStack, Text, HStack, Box } from '@chakra-ui/react'
import MarkdownContent from './util/MarkdownContent';
import ComingSoonText from './CamperProfileFrame/ComingSoonText';

interface Props {
    nameCoordinator: String;
    familyName: string | null;
    familyInfoMdText: string | null;
}

export const CardCoordinatorInfo = ({
    nameCoordinator,
    familyName,
    familyInfoMdText,
}: Props) => {
    const hasFamilyData = familyName != null && familyInfoMdText != null;

    return (
        <VStack
            bg={"palette.life"}
            borderRadius={"16px"}
            padding={"16px"}
            alignItems={"start"}
            w={"304px"}

        >
            <VStack
                alignItems={"start"}
                w={"100%"}
                gap={0}
            >            
                <Text
                    textStyle={"orion"}
                    >
                    hello 👋,
                </Text>
                <Text
                    textStyle={"orion"}
                    fontWeight={5300}
                >
                    {nameCoordinator}
                </Text>
            </VStack>
            <Box 
                h={"12px"}
            />
            {hasFamilyData && (
                <>
                    <VStack
                        alignItems={"start"}
                        gap={0}
                    >
                        <Text>
                            your family is{" "}
                            <Text as="span" color="palette.skylar" fontWeight="medium">
                                {familyName}
                            </Text>.
                        </Text>
                        <Text>
                            as a coordinator, you're also expected to learn about the life of {familyName}.
                            <br/>
                            <br/>
                            
                            to guide your study, focus on:
                        </Text>

                    </VStack>
                    <MarkdownContent
                        color={"palette.skylar"}
                    >
                        {familyInfoMdText}
                    </MarkdownContent>                
                </>
            )}
            {!hasFamilyData && (
                <HStack>
                    <Text
                        textStyle={"orion"}
                    >
                        your details are 
                    </Text>
                    <ComingSoonText />
                </HStack>
            )}
        </VStack>
    )
}
