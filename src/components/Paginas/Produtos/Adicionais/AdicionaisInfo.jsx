import { React, useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { formCurrency } from '../../../AA-utilidades/numeros';
import './AdicionaisInfo.css';
import Decimal from 'decimal.js';

export default function AdicionaisInfo({ totalValue }) {
  const { state } = useLocation();
  const { item } = state;
  const [valortotal, setValorTotal] = useState('');
  

  useEffect(()=>{
      let valorTotal = new Decimal(item.VALOR_MINIMO > 0 ? item.VALOR_MINIMO : item.VALOR_VENDA)
          const totalAdicionais = new Decimal(totalValue)
        const SomaTotais = (valorTotal).plus(totalAdicionais)
          setValorTotal(SomaTotais)
  }, [totalValue])

 
  return (
    <div className='adicionais-info'>
      <div className='box-info-1'>
        <div className='info-nome'>{item.PRODUTO}</div>
      </div>
      <div className='box-info-2'>
        <div className='valor-info-titulo'>Valor:</div>
        <div className='valor-info'>{formCurrency.format(valortotal)}</div>
      </div>
    </div>
  );
}