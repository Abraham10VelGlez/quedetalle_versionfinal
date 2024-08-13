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
    TableContainer, Button,
} from '@chakra-ui/react'
import Catalogo from './Catalogo';
import Cardprime_optimotbl from './Cardprime_optimotbl';
import Add from './Add';
export default function Basket() {

    const { quantity, cart, setCart, totalcosto, removeItem } = Add();

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
    //console.log(filteredData);




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
                <Table variant='striped' colorScheme='teal' size='sm'>
                    <TableCaption>Resumen del Pedido</TableCaption>
                    <Thead>
                        <Tr>
                            <Th><center>Cancelar</center></Th>
                            <Th><center>Producto</center></Th>
                            <Th><center>Precio</center></Th>
                            <Th isNumeric><center>Cantidad</center></Th>
                            <Th isNumeric>Total</Th>
                        </Tr>
                    </Thead>
                    <Tbody>

                        {cart.map((item, index) => (
                            <Tr key={index}>
                                <Td>
                                    <center>
                                        {
                                            item.id > 0
                                                ? (

                                                    <Button onClick={() => removeItem(item.id)} variant='solid' colorScheme='red'>
                                                        {'Eliminar'}
                                                        <i className="pi pi-cart-minus"></i>
                                                    </Button>

                                                )
                                                :
                                                <>

                                                </>
                                        }
                                    </center>

                                </Td>
                                <Td>
                                    <center>{item.title}
                                        <Cardprime_optimotbl key={index} objt={item} />
                                    </center>

                                </Td>
                                <Td isNumeric><center>${item.subtitle}</center></Td>
                                <Td isNumeric><center>{item.quantity}</center></Td>
                                <Td isNumeric><center>${item.subtitle * item.quantity}</center></Td>
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
                            <Th isNumeric>${totalcosto}</Th>
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
                            <Th isNumeric>${totalcosto + 99}</Th>
                        </Tr>
                    </Tfoot>
                </Table>
            </TableContainer >

        </>
    )

}