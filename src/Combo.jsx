import React, { useEffect, useState, useContext } from 'react';
import { Stack, CheckboxGroup, Checkbox } from '@chakra-ui/react'
import { CartContext } from './context/ShoppingCartContext';
import Catalogo from './Catalogo';
export default function Combo() {


    //acceso al context
    const { cart, setCart, jsonproducto, setJsonproducto } = useContext(CartContext);

    const { imgjson } = Catalogo()

    const [checkedItems, setCheckedItems] = React.useState([false, false])

    const allChecked = checkedItems.every(Boolean)
    const isIndeterminate = checkedItems.some(Boolean) && !allChecked


    const [selectedOptions, setSelectedOptions] = useState([]);

    const handleCheckboxChange = (values) => {
        //actualiza el estado de seleccion del boton
        setSelectedOptions(values);
        //console.log(values[0]);                
        // Usando filter() para encontrar todos los elementos
        const filteredItems = imgjson.filter((item) => item.categ === values[0]);
        //console.log(filteredItems); // Imprime todos los elementos que cumplen con la condición
        setJsonproducto(filteredItems)

    };

    return (

        <center>
            <CheckboxGroup value={selectedOptions} onChange={handleCheckboxChange} >
                <Stack pl={2} mt={3} spacing={4}>

                    <Checkbox
                        value="all"
                        isChecked={allChecked}
                        isIndeterminate={isIndeterminate}
                        onChange={(e) => setCheckedItems([e.target.checked, e.target.checked])}
                    >
                        Disponibles
                    </Checkbox>
                </Stack>
                <Stack pl={6} mt={3} spacing={4}>
                    <Checkbox
                        value="pl"
                        isChecked={checkedItems[0]}
                        onChange={(e) => setCheckedItems([checkedItems[2], e.target.checked])}
                    >
                        Playeras
                    </Checkbox>
                    <Checkbox
                        value="cj"
                        isChecked={checkedItems[0]}
                        onChange={(e) => setCheckedItems([checkedItems[3], e.target.checked])}
                    >
                        Cajas
                    </Checkbox>
                    <Checkbox
                        value="tm"
                        isChecked={checkedItems[0]}
                        onChange={(e) => setCheckedItems([checkedItems[4], e.target.checked])}
                    >
                        Termos
                    </Checkbox>

                    <Checkbox
                        value="tz"
                        isChecked={checkedItems[0]}
                        onChange={(e) => setCheckedItems([checkedItems[5], e.target.checked])}
                    >
                        Tazas
                    </Checkbox>

                </Stack>
            </CheckboxGroup>
        </center >



    )
}