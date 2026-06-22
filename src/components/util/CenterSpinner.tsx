import { Center, Spinner } from "@chakra-ui/react"

const CenterSpinner = () => {
    return (
        <Center 
            w={"100%"}
            h={"100%"}
        >
            <Spinner 
                color="palette.lifeAlpha"
            />
        </Center>
    )
}

export default CenterSpinner