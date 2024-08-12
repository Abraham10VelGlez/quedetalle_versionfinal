import React, { useContext, useEffect } from 'react';
import { Image, useDisclosure, Button, Heading, Stack, Text, Grid, GridItem, ModalHeader, ModalCloseButton, ModalBody, ModalFooter } from '@chakra-ui/react';
import { Card, CardHeader, Center, CardBody, CardFooter, useBreakpointValue } from '@chakra-ui/react'
import Add from './Add';
import { CartContext } from './context/ShoppingCartContext';


//export default function Cardprime_optimo({ objt }) {
//const { id, title, subtitle, description, urlimg, categ } = objt
export default function Cardprime_optimo({ id, title, subtitle, description, urlimg, categ }) {
    const { adds, add_product, addbuy, addToCart, removeItem, views_product } = Add()


    ///llamar a mo context para que veamos cuantos prdoctos agregue, es acceso directo
    const [cart, setCart] = useContext(CartContext)
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

        <Card
            direction={{ base: 'column', sm: 'row', md: 'row', lg: 'row' }}
            overflow='hidden'
            variant='outline'

            width={cardWidth}
            borderWidth="1px"
            borderRadius="lg"

            boxShadow="lg"


        >
            <Image
                objectFit='cover'
                width={imgsixewidth}
                height={imgsixeheigth}
                src={categ + '/' + urlimg}
                alt='quedetalle'
            />

            <Stack className="cardiavg">
                <CardBody  >

                    <Heading textTransform='uppercase' fontSize='2xl'>{title}</Heading>

                    <Text py='3' fontSize={textfontsizeavg}>
                        {description} jasdkjashdjkas djhas dhjas dhjas dhas <br></br>dhjas dhas dhjas djh asdhj
                    </Text>



                </CardBody>
                <CardFooter>
                    <Center>
                        {/*() => add_product({ id, title, subtitle, description, urlimg, categ })*/}
                        <Button isLoading={adds} onClick={() => addToCart({ id, title, subtitle, description, urlimg, categ })} variant='solid' colorScheme='teal'>


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



                        {
                            elemenselect > 0
                                ? (

                                    <Button isLoading={adds} onClick={() => removeItem(id)} variant='solid' colorScheme='red'>
                                        {'Eliminar articulo'}
                                        <i className="pi pi-cart-minus"></i>
                                    </Button>

                                )
                                :
                                <>

                                </>
                        }


                    </Center>
                </CardFooter>
            </Stack>


            {/*addbuy.map((product, index) => (
                    <li key={index}>{`ID: ${product.id}, Category: ${product.categ}`}</li>
                ))*/}

        </Card >









    )
}
