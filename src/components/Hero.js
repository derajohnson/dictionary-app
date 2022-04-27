import React from 'react'
import {Box, Flex, Text, Image, Spacer, Input, Button} from '@chakra-ui/react'
import girlImg from '../assets/girl.png'

const Hero = () => {
    return (
        <Box>
            <Flex flexDirection={{base:'column', md:'row'}}>
                <Box alignSelf='center' mt={{base: '8', md: '0'}}>
                    <Text fontSize='3xl' >
                        Search the meaning of any word. Anyday. Anytime. 
                    </Text>
                    <form action="">
                        <Input placeholder='Search for a word' my='5'/>
                        <Button bgColor='purple.400' color='white' textAlign={{base: 'center', md: 'left'}}>
                            Search
                        </Button>
                    </form>
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