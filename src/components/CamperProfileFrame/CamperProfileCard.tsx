import { Divider, VStack } from "@chakra-ui/react";
import { CamperProfile } from "../../apiClient/getCamperProfile/getCamperProfile.types"
import CamperDataCard from "./CamperDataCard";
import UnitSection from "./UnitSection";
import RoomSection from "./RoomSection";
import CampFamilySection from "./CampFamilySection";

interface Props {
    profile: CamperProfile;
}

const CamperProfileCard = ({
    profile
}: Props) => {
    return (
        <VStack
            w={"100%"}
            h={"100%"}
            gap={"32px"}
        >
            <CamperDataCard profile={profile} />
            <VStack
                flex={1}
                w={"100%"}
                alignItems={"start"}
                divider={<Divider borderColor="palette.skylar" />}
            >
                <UnitSection unitDutiesMdText={profile.unitDutiesMdText} />
                <RoomSection />
                <CampFamilySection />
            </VStack>

        </VStack>
    )
}

export default CamperProfileCard