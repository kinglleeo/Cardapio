import { React, useEffect, useState } from 'react'
import './comanda-pizza.css'
import { useLocation } from 'react-router-dom'

export default function ComandaPizza(){
    const { state } = useLocation();
    const { tamanhopizza } = state;

   


    return(
        <div className='comanda-pizza'>
            <div className='comanda-items'>
                <div className='caixa-c-1'>
                    <div>{tamanhopizza.tamanho}</div>
                </div>
                <div className='caixa-c-2'>
                     
                </div>
                <div className='caixa-c-3'>
                    <div><label>Valor Total</label></div>
                    <div>R$ {tamanhopizza.valor}</div>
                </div>
                <div className='caixa-c-4'>
                    <button>aaaa</button>
                </div>
            </div>
        </div>
    )
}