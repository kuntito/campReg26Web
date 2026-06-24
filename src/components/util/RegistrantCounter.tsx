import { io } from "socket.io-client";
import { envConfig } from "../../config/envConfig";
import { useEffect, useState } from "react";
import { Box, BoxProps, Text, Tooltip } from "@chakra-ui/react";

interface Props extends BoxProps {

}

const socket = io(envConfig.VITE_YC26_API_BASE_URL, {
    transports: ["websocket"],
});

const regCountSocketKey = "regCount";
const RegistrantCounter = ({
    ...boxProps
}: Props) => {
    const [regCount, setRegCount] = useState(0);
    const [animateNewCount, setAnimateNewCount] = useState(false);

    useEffect(() => {
        socket.on(
            regCountSocketKey,
            (newCount: number) => {
                setRegCount(newCount);

                setAnimateNewCount(true);
                setTimeout(() => setAnimateNewCount(false), 400);
            }
        );

        return () => {
            socket.off(regCountSocketKey);
        }
    }, []);

    return (
        <Tooltip
            label={"number of registered campers."}
            bg={"palette.room"}
            borderRadius={"8px"}
            px={"8px"}
            py={"4px"}
            sx={{
                fontSize: "10px",
                fontWeight: "normal",
                fontFamily: "monospace",
            }}
            boxShadow="md"
        >
            <Box 
                {...boxProps}
                cursor="pointer"
            >
                <Text
                    textStyle={"orion"}
                    textShadow="0px 1px 4px rgba(0,0,0,0.3)"
                    color={"palette.life"}
                    fontWeight={"bold"}
                    fontFamily={"monospace"}
                    transition="transform 0.2s ease"
                    transform={animateNewCount ? "scale(1.3)" : "scale(1)"}
                    animation="blink 0.7s ease-in-out infinite alternate"
                    sx={{
                        "@keyframes blink": {
                            "from": { opacity: 0.85 },
                            "to": { opacity: 0.2 },
                        }
                    }}
                >
                    {regCount}
                </Text>
            </Box>
        </Tooltip>
    );

}

export default RegistrantCounter;