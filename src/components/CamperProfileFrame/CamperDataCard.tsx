import { HStack, Text, VStack } from "@chakra-ui/react"
import { CamperProfile } from "../../apiClient/getCamperProfile/getCamperProfile.types"

interface Props {
    profile: CamperProfile;
}

const CamperDataCard = ({
    profile
}: Props) => {
    const fullName = `${profile.firstName} ${profile.lastName}`;
    const genderName = profile.genderName;
    const fellowshipStr = `${profile.fellowshipName}s fellowship`.toLowerCase();
    const unitStr = `${profile.unitName} unit`.toLowerCase();
    const branchStr = `${profile.branchName} branch`.toLowerCase();
    return (
        <VStack
            bg={"palette.lifeAlpha"}
            borderRadius={"16px"}
            px={"16px"}
            py={"8px"}
            gap={"4px"}
            w={"100%"}
            alignItems={"start"}
        >
            <Text
                fontWeight={"bold"}
            >
                {fullName}
            </Text>
            <HStack>
                <Text>{genderName}</Text>
                <Text>·</Text>
                <Text>{fellowshipStr}</Text>
            </HStack>
            <Text>
                {unitStr}
            </Text>
            <Text>
                {branchStr}
            </Text>

        </VStack>
    )
}

export default CamperDataCard