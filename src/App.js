import React, {useEffect, useState} from 'react';
import axios from 'axios';

import {Box, Center, Text, Flex} from '@chakra-ui/react';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Content from './components/Content';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

function App () {
  const [isLoadingComplete, setIsLoadingComplete] = useState (false);
  const [randomWord, setRandomWord] = useState ([]);
  useEffect (() => {
    const fetchRandomData = async () => {
      try {
        await axios
          .get ('https://random-words-api.vercel.app/word')
          .then (res => setRandomWord (res.data[0]))
          .catch (error => console.log (error));
      } catch (error) {
        console.log (error);
      }
    };

    const load = window.addEventListener ('load', () => {
      fetchRandomData ();
      setTimeout (() => {
        setIsLoadingComplete (true);
      }, 4000);
    });
  }, []);

  return (
    <Box mt="5" mx="10">
      {isLoadingComplete
        ? <Box>
            <Navbar />
            <Hero />
            <Content />
            <Testimonials />
            <Footer />
          </Box>
        :
        randomWord.length === 0 ? <Box> </Box> :
        <Flex
            direction="column"
            justifyContent="center"
            h="100vh"
            alignItems="center"
          >
            <Box mb="4">
              Word: {randomWord.word}
            </Box>

            <Box mb="4">
              Definition: {randomWord.definition}
            </Box>
            <Box>
              Pronunciation: {randomWord.pronunciation}
            </Box>
          </Flex>

          }

    </Box>
  );
}

export default App;
