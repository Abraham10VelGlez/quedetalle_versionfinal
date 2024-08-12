import React from 'react';

import { useDisclosure, Button, Heading, Stack, Image, Text, Grid, GridItem, ModalHeader, ModalCloseButton, ModalBody, ModalFooter } from '@chakra-ui/react';
import Cardprime_optimo from './Cardsprime_render';
import { SimpleGrid, Box } from '@chakra-ui/react'
import Catalogo from './Catalogo';
export default function Cardsprime() {
    const { imgjson } = Catalogo()

    return (
        <>
            <br></br>
            {/*<Grid templateColumns='repeat(4, 5fr)' gap={3}>*/}
            {/*imgjson.map((product, index) => (
                    <GridItem key={index}   >
                        <Cardprime_optimo key={index} objt={product} />
                    </GridItem>
                ))*/}

            {/*</Grid>*/}
            <center>
                <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={4} spacingX='40px' spacingY='20px'>
                    {imgjson
                        .sort(() => Math.random() - 0.5) // Mezcla aleatoriamente el array
                        .map((product, index) => (
                            <GridItem key={index}>
                                {/*<Cardprime_optimo key={index} objt={product} />*/}
                                <Cardprime_optimo key={index} {...product} />
                            </GridItem>
                        ))}
                </SimpleGrid>
            </center>








        </>
    )
}
