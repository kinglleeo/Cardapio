import { React, useState, useEffect } from 'react'
import Decimal from 'decimal.js';



export default function AdicionaisPorQuantidade({ faltam, item, index, setQuantidadeTotal, listaAdicionais, setListaAdicionais }){

  useEffect(() => {
    if (Array.isArray(listaAdicionais)) {
    const total = listaAdicionais.reduce((accumulator, item) => accumulator + item.quantidade, 0);
        setQuantidadeTotal(total);
    }
  }, [listaAdicionais]);

  const aumentarQuantidade = (index) => {
    const updatedListaOpcionais = [...listaAdicionais];
    const quantidade = new Decimal(updatedListaOpcionais[index].quantidade);
    updatedListaOpcionais[index].quantidade = quantidade.plus(1).toNumber();
        setListaAdicionais(updatedListaOpcionais);
  };

  const diminuirQuantidade = (index) => {
    const updatedListaOpcionais = [...listaAdicionais];
    const quantidade = new Decimal(updatedListaOpcionais[index].quantidade);
    if (quantidade.gt(0)) {
    updatedListaOpcionais[index].quantidade = quantidade.minus(1).toNumber();
        setListaAdicionais(updatedListaOpcionais);
    }
  };
 
  return( 
    <div className='Card-Adicionais-Botoes'>
      <div className='btn-quantia-adicionais'>
        <button className='arrow iconeMinus' onClick={() => diminuirQuantidade(index)}></button>
      </div>
        <div className='quantia-adicionais'>{item.quantidade}</div>
      <div className='btn-quantia-adicionais'>
        <button className='arrow iconePlus'onClick={() => aumentarQuantidade(index)} disabled={faltam === 0}></button>
      </div>
    </div>
  )
}