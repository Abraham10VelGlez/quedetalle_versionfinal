
import React, { useState, useEffect, useContext } from 'react';
import { Galleria } from 'primereact/galleria';

import 'primereact/resources/themes/vela-blue/theme.css'; //theme
import 'primereact/resources/primereact.min.css'; //core css
import 'primeicons/primeicons.css'; //icons
import 'primeflex/primeflex.css'; // flex
import Catalogo from './Catalogo';
import { CartContext } from './context/ShoppingCartContext';
import Add from './Add';

export default function Galeria({ id }) {

    const { see_info } = Add()

    const [cart, setCart] = useContext(CartContext)
    const { imgjson } = Catalogo()
    const [images, setImages] = useState(null);
    const responsiveOptions = [
        {
            breakpoint: '991px',
            numVisible: 4
        },
        {
            breakpoint: '767px',
            numVisible: 3
        },
        {
            breakpoint: '575px',
            numVisible: 1
        }
    ];

    useEffect(() => {

        //console.log(avg);        
        setImages(see_info(id));
        //console.log(suburlmimg);
        //console.log(suburlmimg.urlimgsub1);


    }, [])

    const itemTemplate = (item) => {
        return <img src={item.categ + '/' + item.urlimg} alt={item.urlimg} style={{ width: '100%' }} />
        //return <img src={categ + '/' + "asdasd"} alt={categ} style={{ width: '100%' }} />
    }

    const thumbnailTemplate = (item) => {


        //return <img src={item.categ + '/' + item.suburlmimg.urlimgsub2} alt={item.suburlmimg.urlimgsub2} />

        if (item.suburlmimg && typeof item.suburlmimg === 'object') {
            return Object.values(item.suburlmimg).map((subImg, index) => (
                <img key={index} src={item.categ + '/' + subImg} alt={subImg} />
            ));
        } else {
            return <p>Imagenes no validas</p>;
        }
    }


    //thumbnail={thumbnailTemplate}
    return (
        <div className="card">
            <Galleria value={images} responsiveOptions={responsiveOptions} numVisible={5} style={{ maxWidth: '640px' }}
                item={itemTemplate}
                thumbnail={thumbnailTemplate} />

        </div>
    )
}
