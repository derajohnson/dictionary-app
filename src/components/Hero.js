import React, {useState} from 'react'
import axios from 'axios'
import {Box, Flex, Text, Image, Spacer} from '@chakra-ui/react'
import SearchInput from './SearchInput'
import girlImg from '../assets/girl.png'

const Hero = () => {

    return (
        <Box>
            <Flex flexDirection={{base:'column', md:'row'}}>
                <Box alignSelf='center' mt={{base: '8', md: '0'}}>
                    <Text fontSize='3xl' >
                        Search the meaning of any word. Anyday. Anytime. 
                    </Text>
                 <SearchInput/>
                </Box>
                <Spacer />
                <Box>
                    <Image src={girlImg} alt='girl searching'></Image>
                </Box>
            </Flex>
        </Box>
    )
} 


export default Hero