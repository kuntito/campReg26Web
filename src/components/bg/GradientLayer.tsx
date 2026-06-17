import { Box } from "@chakra-ui/react"

const GradientLayer = () => {
    return (
        <Box
            position="absolute"
            inset={0}
            bgGradient="linear(to-b, #939393, #F9F9F9)"
            zIndex={0}
        />
    )
}

export default GradientLayer