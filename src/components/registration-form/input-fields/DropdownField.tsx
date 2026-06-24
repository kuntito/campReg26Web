import { Text, Select, VStack, Box } from "@chakra-ui/react";
import { useState } from "react";

export interface DropdownOption {
    id: number;
    label: string;
}

interface Props {
    label: string;
    floatingLabel: string;
    options: DropdownOption[];
    selectedId: number | null;
    onSelect: (id: number) => void;
}

const DropdownField = ({
    label,
    floatingLabel,
    options,
    selectedId,
    onSelect
}: Props) => {
    const [isFocused, setIsFocused] = useState(false);

    const showFloatingLabel = selectedId != null && !isFocused

    return (
        <Box
            position={"relative"}
        >
            <Select
                placeholder={label}
                value={selectedId ?? ""}
                onChange={(e) => {
                    onSelect(Number(e.target.value))
                    e.target.blur();
                }}
                bg={"palette.lifeAlpha"}
                borderRadius={"16px"}
                color={"palette.room"}
                w={"304px"}
                _focus={{ 
                    bg: "palette.life",
                    boxShadow: "none",
                    // TODO 
                    // borderColor and borderWidth should be hoisted for dropdowns and input
                    borderColor: "palette.room",
                    borderWidth: "2px"
                }}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
            >
                {options.map(op => (
                    <option key={op.id} value={op.id}>
                        {op.label}
                    </option>
                ))}
            </Select>
            {showFloatingLabel && (
                <Box
                    position={"absolute"}
                    top={"-10px"}
                    left={"8px"}
                    zIndex={1}
                    borderRadius={50}
                >
                    <Text
                        textStyle={"hush"}
                        fontFamily={"monospace"}
                        color={"palette.room"}
                        textShadow="0px 1px 2px rgba(0,0,0,0.3)"
                    >
                        {floatingLabel}
                    </Text>
                </Box>
            )}
        </Box>
    )
}

export default DropdownField;