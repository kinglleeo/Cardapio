import { React, useState, useEffect } from 'react'
import '../../../../Styles/StyleForAdicionais.css'
import { formCurrency } from '../../../AA-utilidades/numeros';
import Decimal from 'decimal.js';


export default function ListaAdicionais({ setQuantidadeTotal, quantidadeTotal, Maximo, listaAdicionais, setListaAdicionais }){

    useEffect(() => {
        if (Array.isArray(listaAdicionais)) {
        const total = listaAdicionais.reduce((accumulator, item) => accumulator + item.quantidade, 0);
            setQuantidadeTotal(total);
        }
    }, [listaAdicionais]);

    
    
    const Escolhidos = () => {
        let escolhidos = quantidadeTotal
            return escolhidos
    };
    const Faltam = () => {
        let faltam = Maximo;
        const total = faltam - quantidadeTotal;
            return total;
    };

  return(
        <div>
            <div className='AdicionaisList'>
              {Array.isArray(listaAdicionais)
                ? listaAdicionais.map((item, index) => (
                    <div className='Card-Adicionais' key={item.ID}>
                          <div className='box-descricao-adicional'>
                            <div className='adicional-nome'>{item.DESCRICAO}</div>
                          </div>
                          <div className='box-valor-adicional'>
                            <div className='adicional-valor'>{formCurrency.format(item.VALOR_VENDA)}</div>
                          </div>
                          <div className='box-funcao-adicional'>
                            {item.PERMITIR_ITEM_REPETIDO === "SIM", item.MINIMO > 1 
                              ? (<div> quantidade </div>)
                              : item.PERMITIR_ITEM_REPETIDO === "NAO", item.MINIMO > 1
                                ? (<div> checkbox </div>)
                              : item.PERMITIR_ITEM_REPETIDO === "NAO", item.MINIMO < 2
                                ? (<div> radio </div>) : (<div></div>) 
                            } 
                          </div>
                      </div>
                  ))
                : null}   
            </div>
        </div>
    )
}