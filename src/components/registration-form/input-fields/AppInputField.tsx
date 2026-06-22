import { Input, InputProps } from "@chakra-ui/react"

interface Props extends InputProps {

}

const AppInputField = ({
    ...inputProps
}: Props) => {
    return (
        <Input
            color={"palette.room"}
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
            _autofill={{
                boxShadow: "0 0 0px 1000px #FFFFFFCC inset",
                textFillColor: "#1E2A49",
            }}
            {...inputProps}
        />
    )
}

export default AppInputField