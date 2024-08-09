import React, { useState, useEffect } from 'react';
import 'primeicons/primeicons.css'; //icons
import 'primeflex/primeflex.css'; // flex
import { Grid, GridItem } from '@chakra-ui/react'
import Footer from './Footer';
import Logo from './Logo';
import Floatmenu from './Floatmenu';
import Cardsprime from './Cardsprime';
import { Stack, Text, Radio, Checkbox } from '@chakra-ui/react'
import { Flex, Box, Spacer, ButtonGroup, Heading, Button } from '@chakra-ui/react'
import Combo from './Combo';
import Theme from './Theme';
export default function Welcome() {







    return (
        <>
            <Grid
                templateAreas={`
                    "header header"                    
                  "nav main"
                  "nav footer"`}
                gridTemplateRows={'210px 1fr 80px'}
                gridTemplateColumns={'150px 1fr'}
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
                        <ButtonGroup gap='2'>
                            <Theme colorScheme='teal'
                               
                            >Theme</Theme>
                          
                            <Button colorScheme='teal'>Carrito &nbsp; <i className="pi pi-shopping-bag"></i></Button>
                        </ButtonGroup>
                    </Flex>


                </GridItem>
                <GridItem pl='2' className="meniavg" color='black' area={'nav'} >

                    <br></br>
                    <Combo></Combo>




                </GridItem>
                <GridItem pl='2' bg='white.100' area={'main'}>
                    <Cardsprime />
                </GridItem>
                <GridItem pl='2' bg='white.100' area={'footer'}>
                    <center>
                        <Footer></Footer>
                    </center>

                </GridItem>
            </Grid>
            {/* MENU */}
            {/* SLIDER */}
            {/* CONTENIDO */}
            {/* FOOTER*/}
            {/*<MenubarPrime ></MenubarPrime ><br />
      <br />
      <Logo></Logo>
      <br />
     <CarruselPrime />
      <br />
      
      <br />
      <br />
      <Footer />*/}



        </>
    )
}