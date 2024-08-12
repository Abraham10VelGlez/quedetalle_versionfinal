import React, { useState, useEffect } from 'react';
import { SimpleGrid, GridItem } from '@chakra-ui/react'

import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
} from '@chakra-ui/react'
import Catalogo from './Catalogo';
import Cardprime_optimotbl from './Cardprime_optimotbl';
import Add from './Add';
export default function Basket() {

    const { quantity, cart, setCart, totalcosto } = Add();

    const { imgjson } = Catalogo()

    const [data, setData] = useState([]);
    useEffect(() => {
        const storedData = localStorage.getItem('v');

        if (storedData) {
            //console.log(storedData);
            setData(JSON.parse(storedData));
        }

    }, [])


    // Función para filtrar productos agregados basado en lista de productos
    const filterData = (imgjson, data) => {
        // Crear un conjunto de ids de data2 para una búsqueda más rápida
        const ids = new Set(imgjson.map(item => item.id));

        const categrorias = new Set(imgjson.map(item => item.categ));

        // Filtrar data1 para obtener solo los elementos con ids que están en data2

        return data.filter(item => ids.has(item.id) && categrorias.has(item.categ));
    };

    const filteredData = filterData(data, imgjson);
    console.log(filteredData);




    return (
        <>
            <br></br>
            {/*<center>
                <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={4} spacingX='40px' spacingY='20px'>
                    {filteredData.map((item, index) => (
                        <GridItem key={index}>
                            <Cardprime_optimo key={index} objt={item} />
                        </GridItem>
                    ))}
                </SimpleGrid>
            </center>*/
                //Facturación Quedetalle
            }
            <TableContainer>
                <Table variant='striped' colorScheme='teal'>
                    <TableCaption>Resumen del Pedido</TableCaption>
                    <Thead>
                        <Tr>
                            <Th>Producto</Th>
                            <Th>Precio</Th>
                            <Th isNumeric>Cantidad</Th>
                            <Th isNumeric>Total</Th>
                        </Tr>
                    </Thead>
                    <Tbody>

                        {cart.map((item, index) => (
                            <Tr key={index}>
                                <Td>
                                    <center>{item.title}
                                        <Cardprime_optimotbl key={index} objt={item} />
                                    </center>

                                </Td>
                                <Td isNumeric>${item.subtitle}</Td>
                                <Td isNumeric>{item.quantity}</Td>
                                <Td isNumeric>${item.subtitle * item.quantity}</Td>
                            </Tr>
                        ))}

                    </Tbody>

                </Table>
            </TableContainer >




            <TableContainer>
                <Table variant='striped' colorScheme='teal'>

                    <Thead>
                        <Tr>
                            <Th>Total de Productos {quantity}</Th>
                            <Th></Th>
                            <Th></Th>
                            <Th></Th>
                        </Tr>
                    </Thead>
                    <Tbody>

                    </Tbody>
                    <Tfoot>
                        <Tr>
                            <Th>Envío (Toluca)</Th>
                            <Th></Th>
                            <Th></Th>
                            <Th isNumeric>$99</Th>
                        </Tr>
                        <Tr>
                            <Th><b>Total *</b></Th>
                            <Th></Th>
                            <Th></Th>
                            <Th isNumeric>${totalcosto}</Th>
                        </Tr>
                    </Tfoot>
                </Table>
            </TableContainer >

        </>
    )

}