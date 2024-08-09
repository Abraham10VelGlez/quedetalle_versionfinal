import React, { useState, useEffect } from 'react';
export default function Add() {

    const [adds, setadds] = useState(false)
    const [addbuy, setaddbuy] = useState([])
    const add_product = ({ id, categ }) => {
        setadds(true)
        try {
            // Crear un nuevo objeto de producto
            const newProduct = { id, categ };
            // Actualizar el carrito agregando el nuevo producto
            setaddbuy(preaddby => [...preaddby, newProduct]);

            setTimeout(() => {
                setadds(false)
            }, 400);


        } catch (error) {
            setadds(false)
            console.log("error al agregar al carrito" + error);
        }

    }

    useEffect(() => {
        // Cargar los datos guardados del localStorage al montar el componente
        const savedData = JSON.parse(localStorage.getItem('v')) || [];
        setaddbuy(savedData);
    }, []);

    useEffect(() => {
        // Guardar los datos en el localStorage
        localStorage.setItem('v', JSON.stringify(addbuy));
    }, [addbuy]);





    return {
        add_product,
        adds,
        addbuy,
    }

}