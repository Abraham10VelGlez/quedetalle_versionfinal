import React from 'react';
import { useDisclosure, Link, Modal, Button, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, Text } from '@chakra-ui/react';
import { Image, useBreakpointValue } from '@chakra-ui/react'
import Galeria from './Galeria';


export default function Modalcha({ categ, urlimg }) {
    const { isOpen, onOpen, onClose } = useDisclosure()

    //ajustes de card
    const cardWidth = useBreakpointValue({ base: '100%', xs: '10%', sm: '95%', md: '95%'/*, lg: '50%'*/ });
    //ajustes de image
    const imgsixewidth = useBreakpointValue({ base: '100%', xs: '90px', sm: '90px', md: '140px', lg: '265px' });
    const imgsixeheigth = useBreakpointValue({ base: '100%', xs: '300px', sm: '300px', md: '300px', lg: '280px' });

    const textfontsizeavg = useBreakpointValue({ base: '1xl', sm: '1xl', md: '1xl', lg: '1xl' });

    //const sizes_modal = useBreakpointValue({ xs: 'xs', sm: 'sm', md: '300px', lg: '300px', xl: 'xl', full: 'full' });

    //const sizes_modal = ['xs', 'sm', 'md', 'lg', 'xl']
    const sizes_modal = ['xl']


    return (
        <>
            <Link onClick={onOpen} >
                <Image
                    objectFit='cover'
                    width={imgsixewidth}
                    height={imgsixeheigth}
                    src={categ + '/' + urlimg}
                    alt='quedetalle'
                />

            </Link>

            <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose} size={sizes_modal}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Más Información</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <Galeria></Galeria>

                    </ModalBody>

                    <ModalFooter>
                        <Button colorScheme='blue' mr={3} onClick={onClose}>
                            Cerrar
                        </Button>

                    </ModalFooter>
                </ModalContent>
            </Modal>

        </>
    )
}
