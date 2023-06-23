import { React, useState, useEffect } from 'react'


export default function AdicionaisPorQuantidade(){


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
        <button className='arrow left' onClick={() => diminuirQuantidade(index)}></button>
      </div>
        <div className='quantia-adicionais'>{item.quantidade}</div>
      <div className='btn-quantia-adicionais'>
        <button className='arrow right'onClick={() => aumentarQuantidade(index)} disabled={Faltam() === 0}></button>
      </div>
    </div>
  )
}