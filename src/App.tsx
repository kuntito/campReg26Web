import { Text, Flex, Box } from '@chakra-ui/react'
import { ParticleLayer } from './components/bg/ParticleLayer'
import GradientLayer from './components/bg/GradientLayer'

function App() {

  return (
    <Box    
        position={"relative"}
        w={"100%"}
        h={"100vh"}
    >
        <GradientLayer />
        <ParticleLayer />
        <Flex
            w={"100%"}
            h={"100%"}
            flexDirection={"column"}
        >

        </Flex>
    </Box>
  )
}

export default App