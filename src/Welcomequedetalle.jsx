import React, { useState, useEffect, useContext, useMemo } from 'react';
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
import Floatmenucar from './Floatmenucar';
import { CartContext } from './context/ShoppingCartContext';
import Cardsprimeselect from './Cardsprimeselect';
export default function Welcome() {
    const navigate = useNavigate();
    const linkpark = () => { navigate('/cotizavg') }

    const { cart, setCart, jsonproducto, setJsonproducto } = useContext(CartContext);
    // el uso de useMemo sirve para memorizar el componente o los cálculos necesarios para renderizarlo.
    const memoizedCardsComponent = useMemo(() => {
        return jsonproducto.length > 0 ? <Cardsprimeselect /> : <Cardsprime />;
    }, [jsonproducto]);


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
                        <ButtonGroup gap='2' p='2'>
                            <Theme colorScheme='teal'
                            >Theme</Theme>

                            <Floatmenucar></Floatmenucar>
                        </ButtonGroup>
                    </Flex>


                </GridItem>
                {/*<GridItem pl='2' className="meniavg" color='black' area={'nav'} >

                    <br></br>
                    <Combo></Combo>




                </GridItem>*/}
                <GridItem pl='2' bg='white.100' area={'main'}>
                    {/*<Cardsprime /> */}

                    {
                        memoizedCardsComponent
                        //jsonproducto.length > 0 ? <Cardsprimeselect></Cardsprimeselect> : <Cardsprime />

                    }
                </GridItem>
                <GridItem pl='2' bg='white.100' area={'footer'}>
                    <br></br>
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