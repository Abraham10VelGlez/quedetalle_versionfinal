
import React, { useState, useEffect } from 'react';
import { Galleria } from 'primereact/galleria';

import 'primereact/resources/themes/vela-blue/theme.css'; //theme
import 'primereact/resources/primereact.min.css'; //core css
import 'primeicons/primeicons.css'; //icons
import 'primeflex/primeflex.css'; // flex
import Catalogo from './Catalogo';

export default function Galeria() {
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
        //PhotoService.getImages().then(data => setImages(data));
        setImages(imgjson);
        
    }, [])

    const itemTemplate = (item) => {
        return <img src={item.categ + '/' + item.urlimg} alt={item.urlimg} style={{ width: '100%' }} />
    }

    const thumbnailTemplate = (item) => {
        return <img src={item.categ + '/' + item.urlimg} alt={item.urlimg} />
    }

    return (
        <div className="card">
            <Galleria value={images} responsiveOptions={responsiveOptions} numVisible={5} style={{ maxWidth: '640px' }}
                item={itemTemplate} thumbnail={thumbnailTemplate} />
        </div>
    )
}
