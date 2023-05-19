import { React, useEffect, useState } from 'react'
import './AdicionaisList.css';
import { formCurrency } from '../../../AA-utilidades/numeros';
import Decimal from 'decimal.js';

export default function ListaProdutosAdicionais({ Maximo, listaOpcionais, setListaOpcionais }) {
  

  const aumentarQuantidade = (index) => {
    const updatedListaOpcionais = [...listaOpcionais];
    updatedListaOpcionais[index].quantidade += 1;
    updatedListaOpcionais[index].valorTotalProduto = updatedListaOpcionais[index].quantidade * updatedListaOpcionais[index].VALOR_VENDA;
    setListaOpcionais(updatedListaOpcionais);
  };
  const diminuirQuantidade = (index) => {
    const updatedListaOpcionais = [...listaOpcionais];
    if (updatedListaOpcionais[index].quantidade > 0) {
      updatedListaOpcionais[index].quantidade -= 1;
      updatedListaOpcionais[index].valorTotalProduto = updatedListaOpcionais[index].quantidade * updatedListaOpcionais[index].VALOR_VENDA;
      setListaOpcionais(updatedListaOpcionais);
    }
  };

  const Escolhidos = () => {
    
  };

  const Faltam = () => {
    
  };

  return(
        <div>
            <div className='AdicionaisList'>
              <div className='box-quantidadeMaxima'>
                <div className='quantidadeMax'>
                  <div className='quantidadeMax-text'>Quantidade Maxima</div>
                  <div className='quantidadeMax-value-box'>
                      <div className='quantidadeMax-value'>{Maximo}</div>
                  </div>
                </div>
                <div className='quantidadeMax'>
                  <div className='quantidadeMax-text'>Escolhidos</div>
                  <div className='quantidadeMax-value-box'>
                      <div className='quantidadeMax-value'>{Escolhidos()}</div>
                  </div>
                </div>
                <div className='quantidadeMax'>
                  <div className='quantidadeMax-text'>Faltam</div>
                  <div className='quantidadeMax-value-box'>
                      <div className='quantidadeMax-value'>{Faltam()}</div>
                  </div>
                </div>
              </div>
              {Array.isArray(listaOpcionais)
                ? listaOpcionais.map((item, index) => (
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
                              disabled={Faltam() === 0}
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