import { React, useState, useEffect } from 'react'
import { formCurrency } from '../../../AA-utilidades/numeros'
import Decimal from 'decimal.js'
import './operacoesadicionais.css'

export const ValorTotalAdicionais=({ item })=>{
    
    const ValorTotalAdicionais=()=>{
        const valorInicial = item.valor || 0
            
        return valorInicial
    }

    return(
        <div>
            <div>{formCurrency.format(ValorTotalAdicionais())}</div>
        </div>
    )
}

export const Quantidade =({ data, setValorTotalQuantidade })=>{
    const [quantidade, setQuantidade] = useState(0)

    const incrementQuantity=()=>{
        setQuantidade(quantidade + 1);
    };
    const decrementQuantity=()=>{
        if(quantidade > 0){
            setQuantidade(quantidade - 1);
        }
    };
          
    return(
        <div>
            <div className='Quantidade-Adicionais'>
                <div className='btn-Quantidade'><button className='arrow left' onClick={()=> decrementQuantity()}></button></div>
                <div className='Quantidade-numero'>{quantidade}</div>
                <div className='btn-Quantidade'><button className='arrow right' onClick={()=> incrementQuantity()}></button></div>
            </div>
        </div>
    )
}