import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { formCurrency } from '../../../AA-utilidades/numeros';
import './AdicionaisInfo.css';
import Decimal from 'decimal.js';
import { useQueryClient } from '@tanstack/react-query';

export default function AdicionaisInfo({ grupoOpcoes }) {
  const { state } = useLocation();
  const { item } = state;
  let idProduto= item.ID_PRODUTO
    const queryClient = useQueryClient();


    const [valorToShow, setValorToShow] = useState(
      new Decimal(item.VALOR_MINIMO > 0 ? item.VALOR_MINIMO : item.VALOR_VENDA)
    );
  
    const listaOpcionais = queryClient.getQueryData(['listaOpcionais', grupoOpcoes, idProduto]);
      
    

    
  return (
    <div className='adicionais-info'>
      <div className='box-info-1'>
        <div className='info-nome'>{item.PRODUTO}</div>
      </div>
      <div className='box-info-2'>
        <div className='valor-info-titulo'>Valor Total</div>
        <div className='valor-info'>{formCurrency.format(valorToShow)}</div>
      </div>
    </div>
  );
}