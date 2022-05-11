import React, {useEffect, useState} from 'react';
import axios from 'axios';

import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {Box, Flex} from '@chakra-ui/react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import SearchedWord from './components/SearchedWord';

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
      <BrowserRouter>
        {isLoadingComplete
          ? <Box>
              <Navbar />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/search" element={<SearchedWord />} />
              </Routes>
            </Box>
          : randomWord.length === 0
              ? <Box> </Box>
              : <Flex
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
                </Flex>}
      </BrowserRouter>

    </Box>
  );
}

export default App;
