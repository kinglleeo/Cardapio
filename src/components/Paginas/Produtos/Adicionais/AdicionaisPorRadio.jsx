import { React, useState, useEffect } from 'react'
import Decimal from 'decimal.js';


export default function AdicionaisPorRadio({ faltam, item, index, setQuantidadeTotal, listaAdicionais, setListaAdicionais }){

    useEffect(() => {
        if (Array.isArray(listaAdicionais)) {
        const total = listaAdicionais.reduce(
            (accumulator, item) => accumulator + item.quantidade, 0 );
                setQuantidadeTotal(total);
        }
    }, [listaAdicionais]);    

    const selecionarAdicional = (index) => {
        const updatedListaOpcionais = listaAdicionais.map((item, i) => {
          if (i === index) {
            // Adicionar 1 à quantidade do input selecionado
            return { ...item, quantidade: item.quantidade + 1 };
          } else {
            // Definir a quantidade dos outros inputs como zero
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