import React from 'react';
import { useDisclosure, Link, Modal, Button, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, Box } from '@chakra-ui/react';
import { Image, useBreakpointValue } from '@chakra-ui/react'
import Galeria from './Galeria';
import { Skeleton, SkeletonCircle, SkeletonText } from '@chakra-ui/react'
import CarruselPrime from './Caruselprime';


export default function Modalcha({ id, categ, urlimg, suburlmimg }) {
    //acceso al context
    //console.log(id);


    // categ, urlimg, suburlmimg
    const { isOpen, onOpen, onClose } = useDisclosure()

    //ajustes de card
    const cardWidth = useBreakpointValue({ base: '100%', xs: '10%', sm: '95%', md: '95%'/*, lg: '50%'*/ });
    //ajustes de image
    const imgsixewidth = useBreakpointValue({ base: '100%', xs: '90px', sm: '450px', md: '140px', lg: '500px' });
    const imgsixeheigth = useBreakpointValue({ base: '100%', xs: '300px', sm: '300px', md: '300px', lg: '280px' });

    const textfontsizeavg = useBreakpointValue({ base: '1xl', sm: '1xl', md: '1xl', lg: '1xl' });

    //const sizes_modal = useBreakpointValue({ xs: 'xs', sm: 'sm', md: '300px', lg: '300px', xl: 'xl', full: 'full' });

    //const sizes_modal = ['xs', 'sm', 'md', 'lg', 'xl']
    const sizes_modal = ['5px']
    ///const clikeo = () => { see_info(id), onOpen() }


    return (
        //
        <>
            <Link onClick={onOpen}>
                <Image
                    objectFit='cover'
                    width={imgsixewidth}
                    height={imgsixeheigth}
                    src={categ + '/' + urlimg}
                    alt='quedetalle'
                />

            </Link >

            <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose} size={sizes_modal}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Más Información</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <Box padding='1' boxShadow='xl' bg='white'>
                            {/*<SkeletonCircle size='10' />
                            <SkeletonText mt='4' noOfLines={4} spacing='4' skeletonHeight='2' />
                            <Galeria></Galeria>
                            <Galeria id={id}></Galeria>
                            */}
                            <CarruselPrime id={id} categ={categ}></CarruselPrime>



                        </Box>

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
