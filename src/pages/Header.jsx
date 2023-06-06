import { Box, Flex, Heading, IconButton, Menu, MenuButton, MenuList, MenuItem } from '@chakra-ui/react';
import { FiMenu } from 'react-icons/fi';
import softwareBackground from '../images/software-background.jpg';


const Header = () => {
  return (
    <Box
  bgImage={`url(${softwareBackground})`}
  bgPosition="center"
  bgSize="cover"
  py={12}
>

<Flex justifyContent="space-between" alignItems="center" px={6} mx="auto" maxW="800px">
        <Heading as="h1" fontSize="46px" color="white">
          ADA School
        </Heading>
        <Menu>
          <MenuButton as={IconButton} aria-label="Menu" icon={<FiMenu />} color="white" variant="ghost" fontSize="39px" />
          <MenuList>
            <MenuItem>Quiénes somos</MenuItem>
            <MenuItem>Nuestra Misión</MenuItem>
            <MenuItem>Cómo hacer parte del equipo</MenuItem>
          </MenuList>
        </Menu>
      </Flex>
    </Box>
  );
}


export default Header;
