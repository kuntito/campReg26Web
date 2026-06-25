import { HStack } from "@chakra-ui/react";
import AppButton from "../../util/AppButton";
import { DropdownOption } from "./DropdownField";

interface Props {
    optionA: DropdownOption;
    optionB: DropdownOption;
    selectedId: number | null;
    onSelect: (id: number) => void;
}

const TwoOptionSelector = ({
    optionA,
    optionB,
    selectedId,
    onSelect,
}: Props) => {
    return (
        <HStack gap={"8px"}>
            {[optionA, optionB].map((option) => (
                <AppButton
                    key={option.id}
                    onClick={() => onSelect(option.id)}
                    bg={selectedId === option.id ? "palette.room" : "palette.lifeAlpha"}
                    color={selectedId === option.id ? "palette.life" : "palette.room"}
                    w={"148px"}
                >
                    {option.label}
                </AppButton>
            ))}
        </HStack>
    );
};

export default TwoOptionSelector;