import React, { useEffect, useState } from 'react';
import { Stack, CheckboxGroup, Checkbox } from '@chakra-ui/react'
export default function Combo() {

    const [checkedItems, setCheckedItems] = React.useState([false, false])

    const allChecked = checkedItems.every(Boolean)
    const isIndeterminate = checkedItems.some(Boolean) && !allChecked


    const [selectedOptions, setSelectedOptions] = useState([]);

    const handleCheckboxChange = (values) => {
        setSelectedOptions(values);
        console.log(values);

    };

    return (

        <center>
            <CheckboxGroup value={selectedOptions} onChange={handleCheckboxChange} >
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