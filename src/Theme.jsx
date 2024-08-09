import React, { useState, useEffect } from "react";
import { Button, Spinner } from '@chakra-ui/react'
export default function Theme({ checked, onChange }) {

    const [themeChecked, setThemeChecked] = useState(checked || false);
    const [n, setn] = useState(false)

    useEffect(() => {
        //console.log(themeChecked);
        setTimeout(() => {
            setn(false)
            document.body.className = themeChecked ? 'night-mode' : 'day-mode';
        }, 400);
        if (onChange) {
            onChange(themeChecked);

        }

    }, [themeChecked, onChange]);

    const toggleTheme = () => {
        setThemeChecked(prevTheme => !prevTheme);
        setn(true)
    };
    //Theme &nbsp;
    return (

        <Button colorScheme='teal' onClick={toggleTheme} isLoading={n} spinner={<Spinner />} loadingText='Transition' >

            {themeChecked ? <i className="pi pi-sun"></i> : <i className="pi pi-moon"></i>}
        </Button>

    );
}