import { Box } from '@chakra-ui/react'
import React from 'react'
import Hero from './Hero';
import Content from './Content';
import Testimonials from './Testimonials';
import Footer from './Footer';

const Home = () => {
    return (
        <Box>
            <Hero />
            <Content />
            <Testimonials />
            <Footer/>
        </Box>
    )
}

export default Home