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
import { useDisclosure, Button, RadioGroup, Stack, Radio, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter } from '@chakra-ui/react';
import Combo from './Combo';

export default function Floatmenu() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [placement, setPlacement] = React.useState('left')

    

    return (
        <>
        <br></br>
            <center>
                <Button colorScheme='teal' onClick={onOpen}>
                <i className="pi pi-bars"></i>
                </Button>
            </center>

            <Drawer placement={placement} onClose={onClose} isOpen={isOpen}>
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerHeader borderBottomWidth='1px'> Más Regalos </DrawerHeader>
                    <DrawerBody>
                        <Combo></Combo>
                    </DrawerBody>
                    <DrawerFooter>
                        <Button variant='outline' mr={3} onClick={onClose}>
                            Cerrar
                        </Button>                        
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
        </>
    )
}