import { React, useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { formCurrency } from '../../../AA-utilidades/numeros';
import '../../../../Styles/StyleForAdicionais.css'
import Decimal from 'decimal.js';

export default function PizzasInfo({ totalValue }){
    const { state } = useLocation();
    const { data } = state;
    const [valortotal, setValorTotal] = useState('');

    useEffect(()=>{
        let valorTotal = new Decimal(data.VALOR_MINIMO > 0 ? data.VALOR_MINIMO : data.VALOR_VENDA)
            const totalAdicionais = new Decimal(totalValue)
          const SomaTotais = (valorTotal).plus(totalAdicionais)
            setValorTotal(SomaTotais.toNumber())
    }, [totalValue])

    return(
        <div className='adicionais-info'>
      <div className='box-info-1'>
        <div className='info-nome'>{data.PRODUTO}</div>
      </div>
      <div className='box-info-2'>
        <div className='valor-info-titulo'>Valor:</div>
        <div className='valor-info'>{formCurrency.format(valortotal)}</div>
      </div>
    </div>
    )
}