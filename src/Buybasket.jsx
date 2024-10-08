import React, { useState, useEffect } from 'react';
import 'primeicons/primeicons.css'; //icons
import 'primeflex/primeflex.css'; // flex
import { Grid, GridItem } from '@chakra-ui/react'
import Footer from './Footer';
import Logo from './Logo';
import Floatmenu from './Floatmenu';
import Cardsprime from './Cardsprime';
import { Stack, Text, Radio, Checkbox } from '@chakra-ui/react'
import { Flex, Box, Spacer, ButtonGroup, Heading, Button, Link } from '@chakra-ui/react'
import Combo from './Combo';
import Theme from './Theme';
import { useNavigate } from 'react-router-dom';
import Basket from './Basket';
export default function Byubasket() {

    const navigate = useNavigate();
    const linkpark = () => { navigate('/me') }

    return (
        <>
            <Grid
                templateAreas={`
                    "header header"                    
                  "nav main"
                  "nav footer"`}
                gridTemplateRows={'210px 1fr 80px'}
                gridTemplateColumns={'0px 1fr'}
                h='1400px'
                gap='1'
                color='blackAlpha.500'
                fontWeight='bold'
            >

                <GridItem pl='0' area={'header'}>
                    <center>

                        <Box p='1' bg='white.500'>
                            <Logo></Logo>
                        </Box>


                    </center>
                    {/*<Flex className="meniavg">
                        <Box p='4' className="meniavg">
                            asdasd
                        </Box>
                        <Spacer />
                        <Box p='4' className="meniavg">
                            <i className="pi pi-shopping-bag"></i>
                        </Box>
                    </Flex>*/}

                    <Flex className="meniavg" minWidth='max-content' alignItems='center' gap='8'>
                        <ButtonGroup gap='2' p='2'>
                            <Floatmenu />
                        </ButtonGroup>
                        <Spacer />
                        <ButtonGroup gap='2' p='3'>
                            <Theme colorScheme='teal'

                            >Theme</Theme>

                        </ButtonGroup>
                    </Flex>


                </GridItem>
               
                <GridItem pl='2' bg='white.100' area={'main'}>
                    <Basket></Basket>
                </GridItem>
                <GridItem pl='2' bg='white.100' area={'footer'}>
                    <center>
                        <Footer></Footer>
                    </center>

                </GridItem>
            </Grid>




        </>
    )
}