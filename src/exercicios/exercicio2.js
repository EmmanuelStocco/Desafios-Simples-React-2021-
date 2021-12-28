import React, { useState } from 'react';

import '../App.css';

export default function Ex2 () { 

  //modificando a partir da div Children 
  
    function CapsLock(props){
        const textoInserido = props.children;
        const textoEmCapsLock = textoInserido.toUpperCase();
        return <div> {textoEmCapsLock}   </div>
    }
 

    return (
        <>
            <CapsLock> Show </CapsLock>
        </>
    )

}