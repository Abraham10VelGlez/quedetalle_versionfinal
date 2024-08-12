import React, { createContext, useState } from "react";

export const CartContext = createContext(null);
export const ShoppingCartProvider = ({ children }) => {
  //console.log(children);
  //const [cart, setCart] = useState("Abraham");
  // para mantener los prodoctos usar esete estaddo
  const [cart, setCart] = useState([]);

  return (
    <CartContext.Provider value={[cart, setCart]}>
      {children}
    </CartContext.Provider>
  );
};
