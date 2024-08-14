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
    <CartContext.Provider value={[cart, setCart, jsonproducto, setJsonproducto]}>
      {children}
    </CartContext.Provider>
  );
};
