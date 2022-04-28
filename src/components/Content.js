import { Box, Center, Flex, Text, Image, Spacer } from '@chakra-ui/react'
import React from 'react'

import working from '../assets/working.png'
import plan from '../assets/plan.png'
import walking from '../assets/searching.png'

const Content = () => {
    return(
        <Box>
            <Center mb='10'>
                <Text fontSize='3xl' fontWeight='bold' color='purple.400'>Why you should use <span>Glossary</span></Text>
            </Center>
            <Flex flexDirection={{base:'column', md:'row'}}>
                <Box>
                    <Image src={working} alt='girl using laptop'/>
                </Box>
                <Spacer/>
                <Box alignSelf='center'>
                    <Text>Using Glossary helps you with spelling, pronounciation, grammer, word families, prepositions, phrasal verbs, idioms, collocations, and more!</Text>
                </Box>
            </Flex>

            <Flex flexDirection={{base:'column', md:'row'}}>
            <Box alignSelf='center' mr={{base: '0', md:'20'}} order={{base: '1', md:'0'}}>
                <Text>
                    As a student, Glossary can help you understand your subject better, improve your communication, and improve your grades by making sure you are using words correctly.
                </Text>
            </Box>
            <Spacer/>
                <Box>
                    <Image src={plan} alt='person planning'/>
                </Box>
            </Flex>

            <Flex flexDirection={{base:'column', md:'row'}}>
            <Box>
            <Image src={walking} alt='man walking'/>
            </Box>
            <Spacer/>
                <Box alignSelf='center' ml={{base: '0', md:'20'}} >
                    <Text>
                        Have Glossary at the palm of your hands. One word can have different meaning. Glossary can help you know all the meanings and their different uses. 
                    </Text>
                </Box>
            </Flex>
        </Box>
    )
}

export default Content