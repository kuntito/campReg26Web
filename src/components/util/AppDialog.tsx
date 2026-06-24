import {
    AlertDialog,
    AlertDialogBody,
    AlertDialogCloseButton,
    AlertDialogContent,
    AlertDialogFooter,
    AlertDialogOverlay,
    HStack,
} from "@chakra-ui/react";
import { useRef } from "react";

interface Props {
    isOpen: boolean;
    onDismiss: () => void;
    body?: React.ReactNode;
    footer?: React.ReactNode;
}

const AppDialog = ({ isOpen, onDismiss, body, footer }: Props) => {
    const bgColor = "palette.branch";
    const cancelRef = useRef<HTMLButtonElement>(null);

    return (
        <AlertDialog
            motionPreset="scale"
            leastDestructiveRef={cancelRef}
            onClose={onDismiss}
            isOpen={isOpen}
            isCentered
            size={"sm"}
        >
            <AlertDialogOverlay />
            <AlertDialogContent
                borderRadius={"16px"}
                overflow={"hidden"}
            >
                <AlertDialogCloseButton />
                <AlertDialogBody
                    pt={"32px"}
                    bg={bgColor}
                >{body}</AlertDialogBody>
                <AlertDialogFooter
                    bg={bgColor}
                >
                    <HStack
                        w={"100%"}
                        justifyContent={"center"}
                    >
                        {footer}
                    </HStack>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    );
};

export default AppDialog;
