import React, { createContext, useState } from "react";

export const CartContext = createContext(null);
export const ShoppingCartProvider = ({ children }) => {
  //console.log(children);
  //const [cart, setCart] = useState("Abraham");
  // para mantener los prodoctos usar esete estaddo
  const [cart, setCart] = useState([]);

  //actualizar combo x producto
  const [jsonproducto, setJsonproducto] = useState([])
  
  return (
    //<CartContext.Provider value={[cart, setCart]}>
    
    /* esta forma de colocar los estados entre {} y quitar el uso de [] es para Mejor Práctica: Usar un Objeto para el Valor del Contexto.
    En lugar de devolver un array en el value, 
    es más claro y mantenible devolver un objeto
     que contenga todos los estados y funciones que deseas compartir en tu contexto. 
     Esto te permite acceder a cada estado por su nombre,
      lo cual es más intuitivo y evita posibles errores.
    */
    <CartContext.Provider value={{ cart, setCart, jsonproducto, setJsonproducto }}>
      {children}
    </CartContext.Provider>
  );
};
