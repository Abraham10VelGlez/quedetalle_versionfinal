import React, { useState, useEffect, useContext } from 'react';
import { CartContext } from './context/ShoppingCartContext';
import Catalogo from './Catalogo';
export default function Add() {

    const [adds, setadds] = useState(false)
    const [addbuy, setaddbuy] = useState([])


    //acceso al context
    const { cart, setCart, jsonproducto, setJsonproducto } = useContext(CartContext);





    //funcion para agregar elementos
    const addToCart = ({ id, title, subtitle, description, urlimg, categ, suburlmimg }) => {
        //representa cantidad de elementos en el estado _ inicial de productos
        setCart((currItems) => {
            // verficar si se encunetra
            const isItemsFound = currItems.find((item) => item.id === id);
            if (isItemsFound) {
                // se intera
                return currItems.map((item) => {
                    if (item.id === id) {
                        // se incrementan en una unidad
                        return { ...item, quantity: item.quantity + 1 };
                    } else {
                        return item;
                    }
                });
            } else {
                // si es la primera ves se agrega al carrito
                return [...currItems, { id, quantity: 1, subtitle, title, urlimg, categ, suburlmimg }];
            }
        });
    };

    //funcion poara quitar productos
    const removeItem = (id) => {
        setCart((currItems) => {
            // buscar el prodcuto en el carrito, si es id es igual al parametro
            if (currItems.find((item) => item.id === id)?.quantity === 1) {
                //entonces filtrar y remover
                return currItems.filter((item) => item.id !== id);
                // si no
            } else {
                // entonces se retorna un nuevo arreglo con una funcion de flecha
                return currItems.map((item) => {
                    // si el id es igual
                    if (item.id === id) {
                        //se regresa los elementos menos 1 unidad
                        return { ...item, quantity: item.quantity - 1 };
                    } else {
                        // si no retorna al prodcto
                        return item;
                    }
                });
            }
        });
    };

    ///llamar a mo context para que veamos cuantos prdoctos agregue, es acceso directo
    //const [cart, setCart] = useContext(CartContext)

    const quantity = cart.reduce((acumulador, elementoactual) => {
        return acumulador + elementoactual.quantity;
    }, 0);


    //contar total de costo de productos selecccionados
    const totalcosto = cart.reduce((acumulador, elementoactual) => {
        // arranca en 0, acumulador + el objeto.valor de cantidad * objeto.valor del precio
        return acumulador + elementoactual.quantity * elementoactual.subtitle
    }, 0);



    const views_product = ({ id, title, subtitle, description, urlimg, categ }) => {
        setCart((currItems) => {
            // verficar si se encunetra el primer elemento
            const isItemsFound = currItems.find((item) => item.id === id);
            //console.log(isItemsFound);

            if (isItemsFound) {
                // se intera
                return [...currItems, { id, title, subtitle, description, urlimg, categ }];
            } else {
                // si es la primera ves se agrega al carrito
                return [...currItems, { id, title, subtitle, description, urlimg, categ }];
            }
        });
    }


    const add_product = ({ id, title, subtitle, description, urlimg, categ }) => {
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

    const [filter, setFilter] = useState(''); // Estado para el filtro


    const { imgjson } = Catalogo()
    const see_info = (id) => {        
        //const filteredData = imgjson.filter(item => item.id === id)
        return imgjson.filter(item => item.id === id)
        //console.log(filteredData);        
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
        addToCart,
        removeItem,
        quantity,
        cart, setCart, totalcosto, views_product, see_info

    }

}