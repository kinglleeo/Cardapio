import { React, useEffect, useState } from 'react'
import { api } from '../../../conecções/api'
import Decimal from 'decimal.js'

export default function Pizza({ saboresPizzas, setSaboresPizzas }){
    
    const aumentarQuantidade =(index)=>{
        const updatedsaboresPizzas = [...saboresPizzas]
        const quantidade = new Decimal(updatedsaboresPizzas[index].quantidade);
        updatedsaboresPizzas[index].quantidade = quantidade.plus(1).toNumber();
        setSaboresPizzas(updatedsaboresPizzas);
    }

    const diminuirQuantidade =(index)=>{
        const updatedsaboresPizzas = [...saboresPizzas]
        const quantidade = new Decimal(updatedsaboresPizzas[index].quantidade);
        if(quantidade.gt(0)){
            updatedsaboresPizzas[index].quantidade = quantidade.minus(1).toNumber();
            setSaboresPizzas(updatedsaboresPizzas);
        }
    }

    return(
        <div>
            <div>
            {Array.isArray(saboresPizzas)
                ? saboresPizzas.map((item, index) => (
                    <div className='Card-Adicionais' key={item.ID}>
                      <div className='Card-Adicionais-inner'>
                        <div className='Card-Adicionais-Descricao'>
                          <div className='box-descricao-1'>
                            <div className='Adicional-nome'>{item.DESCRICAO}</div>
                          </div>
                          <div className='box-descricao-2'>
                            <div className='adicional-valor'>{formCurrency.format(item.VALOR_VENDA)}</div>
                          </div>
                        </div>
                        <div className='Card-Adicionais-Botoes'>
                          <div className='btn-quantia-adicionais'>
                            <button className='arrow left' onClick={() => diminuirQuantidade(index)}></button>
                          </div>
                          <div className='quantia-adicionais'>{item.quantidade}</div>
                          <div className='btn-quantia-adicionais'>
                            <button className='arrow right'onClick={() => aumentarQuantidade(index)}
                                
                            ></button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))
                : null}
            </div>
        </div>
    )
}