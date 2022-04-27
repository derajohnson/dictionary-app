import React from 'react'
import {Box} from '@chakra-ui/react'
import Hero from './components/Hero'
import Navbar from './components/Navbar';
import Content from './components/Content';

function App() {
  return (
    <Box mt='5' mx='10'>
      <Navbar/>
      <Hero />
      <Content />
    </Box>
  );
}

export default App;
