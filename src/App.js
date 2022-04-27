import React from 'react'
import {Box} from '@chakra-ui/react'
import Home from './components/Home'
import Navbar from './components/Navbar';

function App() {
  return (
    <Box mt='5' mx='10'>
      <Navbar/>
      <Home />
    </Box>
  );
}

export default App;
