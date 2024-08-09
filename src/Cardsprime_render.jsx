import React from 'react';
import { Image, useDisclosure, Button, Heading, Stack, Text, Grid, GridItem, ModalHeader, ModalCloseButton, ModalBody, ModalFooter } from '@chakra-ui/react';
import { Card, CardHeader, Center, CardBody, CardFooter, useBreakpointValue } from '@chakra-ui/react'

export default function Cardprime_optimo({ objt }) {


    const { title, subtitle, description, urlimg, categ } = objt
    //ajustes de card
    const cardWidth = useBreakpointValue({ base: '100%', xs: '10%', sm: '95%', md: '95%'/*, lg: '50%'*/ });
    //ajustes de image
    const imgsixewidth = useBreakpointValue({ base: '100%', xs: '90px', sm: '90px', md: '140px', lg: '265px' });
    const imgsixeheigth = useBreakpointValue({ base: '100%', xs: '300px', sm: '300px', md: '300px', lg: '280px' });

    const textfontsizeavg = useBreakpointValue({ base: '1xl', sm: '1xl', md: '1xl', lg: '1xl' });

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

            <Stack >
                <CardBody  >

                    <Heading textTransform='uppercase' fontSize='2xl'>{title}</Heading>

                    <Text py='3' fontSize={textfontsizeavg}>
                        {description} jasdkjashdjkas djhas dhjas dhjas dhas <br></br>dhjas dhas dhjas djh asdhj
                    </Text>



                </CardBody>
                <CardFooter>
                    <Center>
                        <Button variant='solid' colorScheme='teal'>
                            Agregar al Carrito &nbsp;
                            <i className="pi pi-cart-arrow-down"></i>
                        </Button>
                    </Center>
                </CardFooter>
            </Stack>
        </Card>






    )
}
