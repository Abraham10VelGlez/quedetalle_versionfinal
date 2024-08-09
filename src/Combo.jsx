import React from 'react';
import { Stack, Text, Radio, Checkbox } from '@chakra-ui/react'
export default function Combo() {

    const [checkedItems, setCheckedItems] = React.useState([false, false])

    const allChecked = checkedItems.every(Boolean)
    const isIndeterminate = checkedItems.some(Boolean) && !allChecked

    return (

        <center>
            <Stack pl={2} mt={3} spacing={4}>
                <Checkbox
                    isChecked={allChecked}
                    isIndeterminate={isIndeterminate}
                    onChange={(e) => setCheckedItems([e.target.checked, e.target.checked])}
                >
                    Disponibles
                </Checkbox>
            </Stack>
            <Stack pl={6} mt={3} spacing={4}>

                <Checkbox
                    isChecked={checkedItems[0]}
                    onChange={(e) => setCheckedItems([checkedItems[2], e.target.checked])}
                >
                    Playeras
                </Checkbox>
                <Checkbox
                    isChecked={checkedItems[0]}
                    onChange={(e) => setCheckedItems([checkedItems[3], e.target.checked])}
                >
                    Cajas
                </Checkbox>
                <Checkbox
                    isChecked={checkedItems[0]}
                    onChange={(e) => setCheckedItems([checkedItems[4], e.target.checked])}
                >
                    Termos
                </Checkbox>

                <Checkbox
                    isChecked={checkedItems[0]}
                    onChange={(e) => setCheckedItems([checkedItems[5], e.target.checked])}
                >
                    Tazas
                </Checkbox>
            </Stack>
        </center>



    )
}