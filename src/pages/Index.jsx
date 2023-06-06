
import Header from './Header';
import { Button, Flex, Heading, Input, useColorMode, useColorModeValue } from '@chakra-ui/react'
const IndexPage = () => {
    const { toggleColorMode } = useColorMode();
    const formBackground = useColorModeValue("gray.100", "gray.800");
    
    return (
        <>
        <Header />
        {
        <Flex height="100vh" alignItems="center" justifyContent="center">
            <Flex direction="column" background={formBackground} p={12} rounded={6}>
                <Heading mb={6}>Sign up</Heading>
                <Input placeholder='Your email' variant="filled" mb={3} type='email' />
                <Input placeholder="********" mb={6} type="password" />
                <Button mb={6} colorScheme='messenger'>Click</Button>
                <Button mb={3} onClick={toggleColorMode}>Toggle Color</Button>
            </Flex>
        </Flex> 
        }   
       </>

  )
}

export default IndexPage;