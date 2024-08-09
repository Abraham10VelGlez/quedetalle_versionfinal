import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from '@chakra-ui/react'
import React from 'react';
import { useDisclosure, Button, RadioGroup, Stack, Box, FormLabel, Input, InputGroup, InputLeftAddon, InputRightAddon, Select, Textarea } from '@chakra-ui/react';
import Combo from './Combo';
import Basket from './Basket';



export default function Floatmenucar() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const firstField = React.useRef()
  //const sizes = ['xs', 'sm', 'md', 'lg', 'xl', 'full']
  const sizes = ['xs', 'sm', 'md', 'lg', 'xl']
  return (
    <>
      <Button colorScheme='teal' onClick={onOpen}>
        Carrito &nbsp;
        <i className="pi pi-shopping-bag"></i>
      </Button>
      <Drawer
        isOpen={isOpen}
        placement='right'
        initialFocusRef={firstField}
        onClose={onClose}
        size={sizes}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader borderBottomWidth='1px'>
            Carrito de compras
          </DrawerHeader>

          <DrawerBody>
            <Stack spacing='24px'>
              <Box>
                <Basket></Basket>
              </Box>
            </Stack>

          </DrawerBody>

          <DrawerFooter borderTopWidth='1px'>
            <Button colorScheme='red' variant='outline' mr={3} onClick={onClose}>
              Cancelar compra
            </Button>
            <Button colorScheme='teal'>Contiuar</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  )
}