import React, { useState, useEffect } from "react";
import { Button } from '@chakra-ui/react'
export default function Theme({ checked, onChange }) {

    const [themeChecked, setThemeChecked] = useState(false);

    const btnclimax = () => {

        if (themeChecked) {
            console.log("activado");
            document.body.className = themeChecked ? 'night-mode' : 'day-mode';
            setThemeChecked(false)
        } else {
            console.log("activado");
            document.body.className = themeChecked ? 'night-mode' : 'day-mode';
            setThemeChecked(true)

        }

    }

    return (

        <Button colorScheme='teal'
            onClick={btnclimax}
        >
            Theme &nbsp;
            { themeChecked ? <i className="pi pi-sun"></i> : <i className="pi pi-moon"></i> }
        </Button>

    );
}