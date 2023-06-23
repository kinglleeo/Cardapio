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
        const updatedListaOpcionais = [...listaAdicionais];
        const quantidade = new Decimal(updatedListaOpcionais[index].quantidade);
        if (quantidade.gt(0)) {
          updatedListaOpcionais[index].quantidade = quantidade.minus(1).toNumber();
        } else {
          updatedListaOpcionais[index].quantidade = quantidade.plus(1).toNumber();
        }
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