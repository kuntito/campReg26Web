import { Center, VStack, Text } from "@chakra-ui/react"
import AppIconButton from "../util/AppIconButton"
import { RefreshIcon } from "../icons/RefreshIcon"
import useAppStore from "../../state-mgmt/appStore"

const ActionRefetchForm = () => {
    const fetchRegDropdowns = useAppStore(s => s.fetchRegDropdowns);

    return (
        <Center
            w={"100%"}
            h={"100%"}
        >
            <VStack>
                <Text
                    textStyle={"orion"}
                    color={"palette.life"}
                >
                    something went wrong, retry.
                </Text>
                <AppIconButton
                    icon={<RefreshIcon boxSize={"24px"} />}
                    iconColor="palette.life"
                    iconColorWhenHovered="palette.branch"
                    onClick={fetchRegDropdowns}
                />
            </VStack>
        </Center>
    )
}

export default ActionRefetchForm