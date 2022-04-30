import React, {useState} from 'react';
import axios from 'axios';
import {Box, Button, Center, Input} from '@chakra-ui/react';

const SearchInput = () => {
  const [search, setSearch] = useState ('');
  const handleSearch = e => {
    e.preventDefault ();
    window.localStorage.setItem('word', search);
    window.location.href = 'http://localhost:3000/search'

  };

  console.log (search);
  return (
    <Box>
      <form action='/' onSubmit={handleSearch} method='GET'>
        <Input
          placeholder="Search for a word"
          my="5"
          value={search}
          onChange={e => setSearch (e.target.value)}
          required
          name='search'
          id='search'
        />
        <Center>
        <Button
          bgColor="purple.400"
          color="white"
          textAlign={{base: 'center', md: 'left'}}
          type="submit"
        >
          Search
        </Button>
        </Center>
      
      </form>
    </Box>
  );
};

export default SearchInput;
