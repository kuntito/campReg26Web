import { Box, BoxProps } from "@chakra-ui/react"

interface Props extends BoxProps {

}

const GradientLayer = ({ ...boxProps }) => {
    return (
        <Box
            {...boxProps}
            bgGradient="linear(to-b, #939393, #F9F9F9)"
        />
    )
}

export default GradientLayer