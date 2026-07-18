import { Text, Center, VStack, useToast } from "@chakra-ui/react";
import useAppStore from "../../state-mgmt/appStore"
import PhoneNumberInputField from "../registration-form/input-fields/PhoneNumberInputField"
import AppButton from "../util/AppButton";
import { useEffect, useState } from "react";
import { DEFAULT_COUNTRY_CODE_ID } from "../registration-form/campers/RegFormContent";
import { validatePhoneNumber } from "../../util/validatePhoneNumber";
import { CountryCodeApi } from "../../apiClient/getRegDropdowns/getRegDropdowns.types";
import { constructPhoneNumber } from "../../util/constructPhoneNumber";
import appToastConfig from "../../config/toastConfig";

type FormData = {
    countryCodeId: number | null;
    /** the digits after the country code */
    digitsPhoneNumber: string;
}

interface Props {
    camperId: number;
}

// FIXME, i've hard-coded these values here
// but they map directly to db values at time of writing.
// i don't anticipate it'd change and is simpler to do this.
// than figuring out how to reliably fetch country codes for this form.
const countryCodes: CountryCodeApi[] = [
    { countryCodeId: 1, countryCode: "+234" },
    { countryCodeId: 2, countryCode: "+44" },
    { countryCodeId: 3, countryCode: "+1" },
];

const AddPhoneNumberAction = ({
    camperId,
}: Props) => {

    const [regData, setRegData] = useState<FormData>({
        countryCodeId: DEFAULT_COUNTRY_CODE_ID, 
        digitsPhoneNumber: "",
    });

    const isFormValid = validatePhoneNumber(regData.digitsPhoneNumber);

    const handleRegDataChange = (
        formField: keyof FormData
    ) => (
        value: FormData[typeof formField]
    ) => {
        setRegData(prev => ({
            ...prev,
            [formField]: value
        }));
    }

    const stateAddPhoneNumber = useAppStore(s => s.stateAddPhoneNumber);
    const isUpdating = stateAddPhoneNumber.kind === 'updating';

    const addPhoneNumber = useAppStore(s => s.addPhoneNumber);
    const handleAddPhoneNumber = async () => {
        if (!isFormValid) return;
        if (isUpdating) return;

        const phoneNumber = constructPhoneNumber(
            regData.countryCodeId!,
            countryCodes,
            regData.digitsPhoneNumber
        )
        addPhoneNumber({
            camperId: camperId,
            phoneNumber: phoneNumber
        });
    }

    const toast = useToast();
    const markPhoneNumberRegistered = useAppStore(s => s.markPhoneNumberRegistered);
    const resetAddPhoneNumberState = useAppStore(s => s.resetAddPhoneNumberState);

    useEffect(() => {
        if (stateAddPhoneNumber.kind === 'success') {
            markPhoneNumberRegistered();
            resetAddPhoneNumberState();
        } else if (
            stateAddPhoneNumber.kind === 'error'
        ) {
            toast({
                ...appToastConfig,
                description: stateAddPhoneNumber.reason,
                status: "error"
            });
            resetAddPhoneNumberState();
        }

    }, [stateAddPhoneNumber])

    return (
        <VStack
            gap={"32px"}
            h={"100%"}
            justifyContent={"center"}
        >
            <PhoneNumberInputField
                countryCodes={
                    countryCodes.map((cc) => ({
                        id: cc.countryCodeId,
                        label: cc.countryCode,
                    }))
                }
                selectedId={regData.countryCodeId ?? DEFAULT_COUNTRY_CODE_ID}
                onSelect={(id) => handleRegDataChange("countryCodeId")(id)}

                value={regData.digitsPhoneNumber}
                placeholder="8012345678"
                onValueChange={handleRegDataChange("digitsPhoneNumber")}
            />
            {
                isUpdating
                ? (
                    <Center
                        bg={"palette.room"}
                        color={"palette.life"}
                        px={"16px"}
                        borderRadius={50}
                        height={"40px"}
                    >
                        <Text
                            textStyle="orion"
                            fontWeight={"medium"}
                        >
                            updating..
                        </Text>
                    </Center>
                )
                : (
                    <AppButton
                        onClick={handleAddPhoneNumber}
                        isDisabled={!isFormValid}
                    >
                        submit
                    </AppButton>
                )
            }
        </VStack>
    )
}

export default AddPhoneNumberAction