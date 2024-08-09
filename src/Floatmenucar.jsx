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


import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from '@chakra-ui/react'

export default function Floatmenucar() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const firstField = React.useRef()
  //const sizes = ['xs', 'sm', 'md', 'lg', 'xl', 'full']
  const sizes = ['xs', 'sm', 'md', 'lg']
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
            <TableContainer>
              <Table variant='striped' colorScheme='teal'>
                <TableCaption>Imperial to metric conversion factors</TableCaption>
                <Thead>
                  <Tr>
                    <Th>To convert</Th>
                    <Th>into</Th>
                    <Th isNumeric>multiply by</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  <Tr>
                    <Td>inches</Td>
                    <Td>millimetres (mm)</Td>
                    <Td isNumeric>25.4</Td>
                  </Tr>
                  <Tr>
                    <Td>feet</Td>
                    <Td>centimetres (cm)</Td>
                    <Td isNumeric>30.48</Td>
                  </Tr>
                  <Tr>
                    <Td>yards</Td>
                    <Td>metres (m)</Td>
                    <Td isNumeric>0.91444</Td>
                  </Tr>
                </Tbody>
                <Tfoot>
                  <Tr>
                    <Th>To convert</Th>
                    <Th>into</Th>
                    <Th isNumeric>multiply by</Th>
                  </Tr>
                </Tfoot>
              </Table>
            </TableContainer>


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