import React from 'react'
import {Box} from '@chakra-ui/react'
import Hero from './components/Hero'
import Navbar from './components/Navbar';
import Content from './components/Content';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer'

function App() {
  return (
    <Box mt='5' mx='10'>
      <Navbar/>
      <Hero />
      <Content />
      <Testimonials />
      <Footer />
    </Box>
  );
}

export default App;
