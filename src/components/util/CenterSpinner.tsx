import { Center, Spinner } from "@chakra-ui/react"

const CenterSpinner = () => {
    return (
        <Center 
            w={"100%"}
            h={"100%"}
        >
            <Spinner 
                color="palette.room"
            />
        </Center>
    )
}

export default CenterSpinner