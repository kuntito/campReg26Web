import { Text, Flex, Box, Center } from '@chakra-ui/react'
import { ParticleLayer } from './components/bg/ParticleLayer'
import GradientLayer from './components/bg/GradientLayer'
import MobileFrame from './components/util/MobileFrame'

function App() {

  return (
    <Box    
        position={"relative"}
        w={"100%"}
        h={"100vh"}
    >
        <GradientLayer />
        <Center
            position={"absolute"}
            inset={0}
            flexDirection={"column"}
        >
            <MobileFrame
                children={<></>}
            />
        </Center>
        <ParticleLayer />

    </Box>
  )
}

export default App