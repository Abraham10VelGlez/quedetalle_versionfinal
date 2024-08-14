import React, { useContext, useEffect } from 'react';
import { Image, Divider, Button, Heading, Stack, Text, Grid, GridItem, ButtonGroup, ModalCloseButton, ModalBody, ModalFooter } from '@chakra-ui/react';
import { Card, CardHeader, Center, CardBody, Box, useBreakpointValue } from '@chakra-ui/react'
import Add from './Add';
import { CartContext } from './context/ShoppingCartContext';
import { Link } from '@chakra-ui/react'
import {
    Modal,
    ModalOverlay,
    useDisclosure
} from '@chakra-ui/react'
import Modalcha from './Modalcha';
//export default function Cardprime_optimo({ objt }) {
//const { id, title, subtitle, description, urlimg, categ } = objt
export default function Cardprime_optimo({ id, title, subtitle, description, urlimg, categ, suburlmimg }) {
    const { adds, add_product, addbuy, addToCart, removeItem, views_product } = Add()


    ///llamar a mo context para que veamos cuantos prdoctos agregue, es acceso directo
    const { cart, setCart, jsonproducto, setJsonproducto } = useContext(CartContext);
    // funcion para saber cuantos elementos fueron seleccionados por producto
    const getquantityid = (id) => {
        return cart.find((item) => item.id === id)?.quantity || 0;
    }

    //retorna la ccantidad de elementos seleccionados
    const elemenselect = getquantityid(id);




    //ajustes de card
    const cardWidth = useBreakpointValue({ base: '100%', xs: '10%', sm: '95%', md: '95%'/*, lg: '50%'*/ });
    //ajustes de image
    const imgsixewidth = useBreakpointValue({ base: '100%', xs: '90px', sm: '90px', md: '140px', lg: '265px' });
    const imgsixeheigth = useBreakpointValue({ base: '100%', xs: '300px', sm: '300px', md: '300px', lg: '280px' });

    const textfontsizeavg = useBreakpointValue({ base: '1xl', sm: '1xl', md: '1xl', lg: '1xl' });

    //console.log(addbuy);




    return (

        <>





            <Card
                direction={{ base: 'column', sm: 'row', md: 'row', lg: 'row' }}
                overflow='hidden'
                variant='outline'

                width={cardWidth}
                borderWidth="1px"
                borderRadius="lg"

                boxShadow="lg"


            >
                <Modalcha id={id} categ={categ} urlimg={urlimg} suburlmimg={suburlmimg}></Modalcha>
                {/* categ={categ} urlimg={urlimg} suburlmimg={suburlmimg} */}

                <Stack className="cardiavg">
                    <CardBody  >

                        <Heading textTransform='uppercase' fontSize='1xl'>{title}</Heading>

                        <Text py='3' fontSize={textfontsizeavg}>
                            {description} jasdkjashdjkas djhas dhjas dhjas dhas <br></br>dhjas dhas dhjas djh asdhj
                        </Text>



                        <Text mb={2}>
                            {/*() => add_product({ id, title, subtitle, description, urlimg, categ })*/}
                            <Button isLoading={adds} onClick={() => addToCart({ id, title, subtitle, description, urlimg, categ, suburlmimg })} variant='solid' colorScheme='teal'>


                                {
                                    elemenselect > 0
                                        ? (
                                            <>
                                                {'Agregaste ' + elemenselect + ' al Carrito '}
                                                <i className="pi pi-cart-arrow-down"></i>
                                            </>
                                        )
                                        :
                                        <>
                                            {'Agregar al Carrito ' + ''}
                                            <i className="pi pi-cart-arrow-down"></i>
                                        </>
                                }

                            </Button>
                        </Text>

                        {
                            elemenselect > 0
                                ? (

                                    <Button isLoading={adds} onClick={() => removeItem(id)} variant='solid' colorScheme='red'>
                                        {'Eliminar'}
                                        <i className="pi pi-cart-minus"></i>
                                    </Button>

                                )
                                :
                                <>

                                </>
                        }





                    </CardBody>



                </Stack>


                {/*addbuy.map((product, index) => (
                    <li key={index}>{`ID: ${product.id}, Category: ${product.categ}`}</li>
                ))*/}

            </Card >








        </>





    )
}
