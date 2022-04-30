import React, {useState, useEffect} from 'react';
import SearchInput from './SearchInput';
import axios from 'axios';
import {Box, Center, Divider, Flex, Text, useToast} from '@chakra-ui/react';

const SearchedWord = () => {
  const [searchedWord, setSearchedWord] = useState ([]);
  const toast = useToast ();
  let word = window.localStorage.getItem ('word');
  useEffect (
    () => {
      const fetchWord = async () => {
        try {
          await axios
            .get (`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
            .then (res => setSearchedWord (res.data[0]))
            .catch (error => handleError (error.response.data.message));
        } catch (error) {
          console.log (error);
        }
      };
      fetchWord ();
    },
    [word]
  );

  const handleError = err => {
    toast ({
      title: 'An error occured',
      description: err,
      status: 'error',
      duration: 9000,
      isClosable: true,
    });
  };

  console.log (searchedWord);
  return (
    <Box>
      <Center mb="5">
        <SearchInput />
      </Center>
      <Divider />
      <Box>
        {searchedWord.length === 0
          ? <Box> </Box>
          : <Box>
              {searchedWord.meanings.map ((value, index) => {
                return (
                  <Box>
                    <Text fontSize="3xl" mt="5">{searchedWord.word}</Text>

                    <Text mb="4">
                      {searchedWord.meanings[index].partOfSpeech}
                    </Text>

                    {searchedWord.phonetics.map ((value, index) => {
                      return (
                        <Flex mb="4">
                          <Text>{searchedWord.phonetics[index].text}</Text>
                          <audio controls>
                            <source src={searchedWord.phonetics[index].audio} />
                          </audio>

                        </Flex>
                      );
                    })}
                    <Text fontSize="2xl">Definition:</Text>

                    {searchedWord.meanings[
                      index
                    ].definitions.map ((value, i) => {
                      return (
                        <Box mb="4">

                          <ul>
                            <li>
                              {' '}
                              {
                                searchedWord.meanings[index].definitions[i]
                                  .definition
                              }
                            </li>
                          </ul>
                        </Box>
                      );
                    })}

                    <Text fontSize="2xl">Synonyms</Text>
                    {searchedWord.meanings[index].synonyms.map ((value, i) => {
                      return (
                        <Box>
                          <Text>
                            - {searchedWord.meanings[index].synonyms[i]}
                          </Text>

                        </Box>
                      );
                    })}

                    <Text fontSize="2xl" mt="4">Examples</Text>

                    {searchedWord.meanings[
                      index
                    ].definitions.map ((value, i) => {
                      return (
                        <Box mb="4">
                          <ul>
                            <li>
                              {' '}
                              {
                                searchedWord.meanings[index].definitions[i]
                                  .example
                              }
                            </li>
                          </ul>
                        </Box>
                      );
                    })}
                  </Box>
                );
              })}

            </Box>}

      </Box>
    </Box>
  );
};

export default SearchedWord;
