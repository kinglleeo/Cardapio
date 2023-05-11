import { React, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { formCurrency } from '../../../AA-utilidades/numeros'
import './AdicionaisInfo.css'

export default function AdicionaisInfo(){
    const { state } = useLocation()
    const { item } = state

    
    return(
        <div className='adicionais-info'>
            <div className='box-info-1'>
                <div className='info-nome'>{item.PRODUTO}</div>
                <div className='info-descricao'>{item.DESCRICAO}</div>
            </div>
            <div className='box-info-2'>
                {item.VALOR_MINIMO < 0 ? (
                    <div>
                        <div>Valor Apartir de:</div>
                            <div>{formCurrency.format(item.VALOR_MINIMO)}</div>
                    </div>
                ) : (
            <div>
                <div>valor</div>
                    <div>{formCurrency.format(item.VALOR_VENDA)}</div>
                </div>
                )}
            </div>
        </div>
    )
}