import React from 'react';
import { Image } from 'primereact/image';

export default function Logo() {
  const icon = (<i className="pi pi-search"></i>);

  return (
    <>

      {/*<div className='centrador'>
            <div className="customlogo">
              <Image src="./logo_20240709_172102_0000.png" width="150" />
            </div>
           
          </div>*/}
      <Image src="./logo_20240709_172102_0000.png" width="150" />

    </>
  );
}
