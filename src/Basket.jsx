import React, { useState, useEffect } from 'react';
import Cardprime_optimo from './Cardsprime_render';
import { SimpleGrid, GridItem } from '@chakra-ui/react'
import Catalogo from './Catalogo';
export default function Basket() {

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
            <center>
                <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={4} spacingX='40px' spacingY='20px'>
                    {filteredData.map((item, index) => (
                        <GridItem key={index}>
                            <Cardprime_optimo key={index} objt={item} />
                        </GridItem>
                    ))}
                </SimpleGrid>
            </center>

        </>
    )

}