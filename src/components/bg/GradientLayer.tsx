import { Box, BoxProps } from "@chakra-ui/react"
import { useLocation } from "react-router-dom"
import { checkIsCoordinatorPage } from "../../util/checkCoordinatorPage";

interface Props extends BoxProps {

}

const GradientLayer = ({ ...boxProps }) => {
    const location = useLocation();
    const isCoordinatorPage = checkIsCoordinatorPage(location);

    const topGradientColor = isCoordinatorPage ? "#1E2A49" : "#939393";
    const bgGradient = `linear(to-b, ${topGradientColor}, #F9F9F9)`

    return (
        <Box
            {...boxProps}
            bgGradient={bgGradient}
        />
    )
}

export default GradientLayer