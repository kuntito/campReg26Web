import { Box, Center, HStack, Text, VStack } from "@chakra-ui/react";
import { RegCountPerBranch } from "../../apiClient/getRegStatus/getRegStatus.types";

interface Props {
    regCountPerBranch: RegCountPerBranch;
}

const RegStatusCard = ({ 
    regCountPerBranch 
}: Props) => {

    const entries = Object.entries(regCountPerBranch)
        .sort((a, b) => b[1] - a[1]);

    const totalRegistered = Object.values(regCountPerBranch)
        .reduce((sum, count) => sum + count, 0);

    return (
        <Center
            w={"100%"}
            h={"100%"}
        >
            <VStack
                gap={"16px"}
            >
                <Text
                    animation="blink 0.7s ease-in-out infinite alternate"
                    sx={{
                        "@keyframes blink": {
                            "from": { opacity: 0.85 },
                            "to": { opacity: 0.2 },
                        }
                    }}
                >
                    {totalRegistered} registered
                </Text>
                <VStack
                    borderRadius={"16px"}
                    gap={0}
                    overflow={"hidden"}
                >
                    {entries.map(([branch, count]) => (
                        <HStack
                            key={branch}
                            gap={0}
                        >
                            <Box 
                                bg={"palette.room"}
                                width={"80px"}
                                pl={"8px"}
                            >
                                <Text
                                    color={"palette.life"}
                                >
                                    {branch}
                                </Text>
                            </Box>
                            <Box 
                                width={"120px"}
                                bg={"palette.life"}
                                justifyItems={"center"}
                                borderWidth={"0.5px"}
                            >
                                <Text
                                    color={"palette.room"}
                                >
                                    {count}
                                </Text>
                            </Box>
                        </HStack>
                    ))}
                </VStack>
            </VStack>
        </Center>
    );
};

export default RegStatusCard;