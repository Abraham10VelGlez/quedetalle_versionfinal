import React, { createContext, useState } from "react";

export const FiltroContext = createContext(null);
export const FiltroProvider = ({ children }) => {
  //console.log(children);
  //const [cart, setCart] = useState("Abraham");
  //actualizar combo x producto
  const [jsonproducto, setJsonproducto] = useState([])

  return (
    <FiltroContext.Provider value={[jsonproducto, setJsonproducto]}>
      {children}
    </FiltroContext.Provider>
  );
};
