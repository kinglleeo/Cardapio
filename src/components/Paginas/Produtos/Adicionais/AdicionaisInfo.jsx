import { React, useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { formCurrency } from '../../../AA-utilidades/numeros';
import '../../../../Styles/StyleForAdicionais.css'
import Decimal from 'decimal.js';
import BotaoEnviarCarrinho from './BotaoEnviarCarrinho';

export default function AdicionaisInfo({ totalValue, descricao, observacao, tamanhoEscolhido }) {
  const { state } = useLocation();
  const { data } = state;
  const [valortotal, setValorTotal] = useState('');

  useEffect(()=>{
      let valorTotal = new Decimal(data.VALOR_MINIMO > 0 ? data.VALOR_MINIMO : data.VALOR_VENDA)
        const tamanhoValor = new Decimal(tamanhoEscolhido.VALOR_VENDA || 0 )
          const totalAdicionais = new Decimal(totalValue)
        const SomaTotais = (valorTotal).plus(totalAdicionais) 
          const novoValorTotal = (SomaTotais).plus(tamanhoValor)  
        setValorTotal(novoValorTotal.toNumber())
  }, [totalValue, tamanhoEscolhido])

  console.log(tamanhoEscolhido)
  return (
    <div className='adicionais-info'>
      <div className='box-info-1'>
        <div className='info-nome'>
          {data.PRODUTO}
            <div> {tamanhoEscolhido.TAMANHO} </div> 
          </div>
      </div>
      <div className='box-info-2'>
        <div className='valor-info-titulo'>Valor:</div>
        <div className='valor-info'>{formCurrency.format(valortotal)}</div>
      </div>
      <div>
        <BotaoEnviarCarrinho
          idProduto={data.ID_PRODUTO}
          nome={data.PRODUTO}
          info={descricao}
          valortotal={valortotal}
          observacao={observacao}
          tamanhoEscolhido={tamanhoEscolhido}
        />
      </div>
    </div>
  );
}