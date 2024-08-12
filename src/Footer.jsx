import React, { useContext } from 'react';
import { Stack, Text } from '@chakra-ui/react'
import { CartContext } from './context/ShoppingCartContext';
export default function Footer() {

  //const [cart, setCart] = useContext(CartContext)

  return (

    <div className="grid "  >
      <div className="col-12 ">
        <Stack p='2' bg="pink.500">
          <Text fontSize='xs'>Dirección Calle Chalco, Toluca, Mexico, 50040. Tel. 722 458 8273. Correo electrónico quedetalle3@gmail.com
            QueDetalle ©2024 Created by AbrahamVG / ChakraUI {/*cart*/}</Text>
        </Stack>
        <div className="text-center" style={{ borderRadius: '5rem' }} >

        </div>
      </div>
    </div>


  )
}

