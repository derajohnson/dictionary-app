import React from 'react';
import {
  Box,
  Flex,
  Heading,
  useColorMode,
  Button,
  Spacer,
  useColorModeValue,
  IconButton,
} from '@chakra-ui/react';
import {FaMoon, FaSun} from 'react-icons/fa';

const Navbar = () => {
  const {toggleColorMode} = useColorMode ();
  const text = useColorModeValue ('dark', 'light');
  const SwitchIcon = useColorModeValue ( FaSun, FaMoon);
  return (
    <Box>
      <Flex>
        <Heading fontFamily="'Dancing Script', cursive">Glossary</Heading>
        <Spacer />
        <Box>
          <IconButton
            size="md"
            fontSize="lg"
            aria-label={`Switch to ${text} mode`}
            variant="ghost"
            color="current"
            marginLeft="2"
            onClick={toggleColorMode}
            _focus={{boxShadow: 'none'}}
            icon={<SwitchIcon />}
          />
        </Box>
      </Flex>
    </Box>
  );
};

export default Navbar;
