import { React, useState, useEffect } from 'react'
import Decimal from 'decimal.js';


export default function AdicionaisPorRadio({ index,  listaAdicionais, setListaAdicionais }){
  

    const selecionarAdicional = (index) => {
        const updatedListaOpcionais = listaAdicionais.map((item, i) => {
          if (i === index) {
            return { ...item, quantidade: item.quantidade + 1 };
          } else {
            return { ...item, quantidade: 0 };
          }
        });
      
        setListaAdicionais(updatedListaOpcionais);
      };


    return(
        <div>
            <input 
                type='radio' 
                name='radio'
                onChange={() => selecionarAdicional(index)}
            />
        </div>
    )
}