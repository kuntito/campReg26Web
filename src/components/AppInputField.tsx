import { Input, InputProps } from "@chakra-ui/react"

interface Props extends InputProps {

}

const AppInputField = ({
    ...inputProps
}: Props) => {
    return (
        <Input
            bg={"palette.lifeAlpha"}
            _focus={{ 
                bg: "palette.life",
                boxShadow: "none",
                borderColor: "palette.roomAlpha"
            }}
            _placeholder={{
                fontStyle: "italic",
                fontWeight: "thin",
            }}
            borderRadius={"16px"}
            w={"304px"}
            {...inputProps}
        />
    )
}

export default AppInputField