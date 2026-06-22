import { UseToastOptions } from "@chakra-ui/react";
import ms from "ms";

const appToastConfig: UseToastOptions = {
    isClosable: true,
    position: "top",
    duration: ms("2s"),
};

export default appToastConfig;