
import React, { useState, useEffect } from 'react';
import { Button } from 'primereact/button';
import { Carousel } from 'primereact/carousel';
import { Tag } from 'primereact/tag';
import { ProductService } from './ProductService';
import { Image } from 'primereact/image';
import Add from './Add';
export default function CarruselPrime({ id, categ }) {
    const responsiveOptions = [
        {
            breakpoint: '1200px',
            numVisible: 2,
            numScroll: 1
        },
        {
            breakpoint: '1100px',
            numVisible: 3,
            numScroll: 1
        },
        {
            breakpoint: '700px',
            numVisible: 2,
            numScroll: 1
        },
        {
            breakpoint: '500px',
            numVisible: 1,
            numScroll: 1
        }
    ];

    /*const imgjson = [
        { "urlimgsub": "43_20240812_174930_0001.png" },
        { "urlimgsub": "44_20240812_174930_0002.png" },
        { "urlimgsub": "43_20240812_174930_0001.png" },
        { "urlimgsub": "44_20240812_174930_0002.png" },
        { "urlimgsub": "43_20240812_174930_0001.png" }
    ]*/

    const [images, setImages] = useState(null);
    const [submages, setsuBmages] = useState([]);
    const { see_info } = Add()

    useEffect(() => {
        //ProductService.getProductsSmall().then((data) => setProducts(data.slice(0, 9)));
        //setProducts(imgjson.slice(0, 9))
        setImages(see_info(id));



    }, []);


    useEffect(() => {
        // Procesar imágenes cuando se cargan
        const efecto = () => {
            if (images) {
                const jsonString = JSON.stringify(images[0].suburlmimg);// Convierte a string JSON               
                setsuBmages(JSON.parse(jsonString));
                //console.log(objt);
            }
        }
        efecto()

    }, [images]);


    const productTemplate = (submages) => {
        //console.log(submages);
        //console.log();


        const icon = (<i className="pi pi-search"></i>)
        return (
            <div className="border-1 surface-border border-round m-2 text-center py-5 px-3">
                <div className="mb-3">
                    <div className="card flex justify-content-center">
                        <Image src={categ + '/' + submages.urlimgsub} indicatorIcon={icon} alt="Space Quedetalle" height='400' width="300" />
                    </div>
                </div>
                {/*<div>

                    <div className="mt-5 flex flex-wrap gap-2 justify-content-center">
                        <Button  > Siguiente </Button>
                    </div>
                </div>*/}
            </div>
        );
    };

    return (
        <div className="card">
            <Carousel value={submages} numVisible={3} numScroll={3} responsiveOptions={responsiveOptions} className="custom-carousel" circular
                autoplayInterval={3000} itemTemplate={productTemplate} />

        </div>
    )
}