import { Center, VStack, Text } from "@chakra-ui/react"
import AppIconButton from "../../util/AppIconButton"
import { RefreshIcon } from "../../icons/RefreshIcon"
import useAppStore from "../../../state-mgmt/appStore"

interface Props {
    retryAction: () => void;
}

const ActionRefetchForm = ({
    retryAction
}: Props) => {
    
    const color = "palette.room";
    const colorOnHover = "palette.roomAlpha";
    return (
        <Center
            w={"100%"}
            h={"100%"}
        >
            <VStack>
                <Text
                    textStyle={"orion"}
                    color={color}
                >
                    something went wrong, retry.
                </Text>
                <AppIconButton
                    icon={<RefreshIcon boxSize={"24px"} />}
                    iconColor={color}
                    iconColorWhenHovered={colorOnHover}
                    onClick={retryAction}
                />
            </VStack>
        </Center>
    )
}

export default ActionRefetchForm