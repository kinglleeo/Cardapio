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

    const aumentarQuantidade = (index) => {
      const updatedListaOpcionais = [...listaAdicionais];
      const quantidade = new Decimal(updatedListaOpcionais[index].quantidade);
      const valorVenda = new Decimal(updatedListaOpcionais[index].VALOR_VENDA);
      const valorCusto = new Decimal(updatedListaOpcionais[index].VALOR_CUSTO);
      const quantidadeTotal = new Decimal(updatedListaOpcionais[index].quantidadeTotal);
      updatedListaOpcionais[index].quantidade = quantidade.plus(1).toNumber();
    
      if (updatedListaOpcionais[index].DIVIDIR === "SIM") {
        updatedListaOpcionais[index].totalCusto = valorCusto.times(quantidade).dividedBy(quantidadeTotal).toNumber();
        updatedListaOpcionais[index].valorTotalProduto = valorVenda.times(quantidade).dividedBy(quantidadeTotal).toNumber();
      } else {
        updatedListaOpcionais[index].totalCusto = valorCusto.times(quantidade).toNumber();
        updatedListaOpcionais[index].valorTotalProduto = valorVenda.times(quantidade).toNumber();
      }
    
      setListaAdicionais(updatedListaOpcionais);
    };
    
    const diminuirQuantidade = (index) => {
      const updatedListaOpcionais = [...listaAdicionais];
      const quantidade = new Decimal(updatedListaOpcionais[index].quantidade);
      const valorVenda = new Decimal(updatedListaOpcionais[index].VALOR_VENDA);
      const valorCusto = new Decimal(updatedListaOpcionais[index].VALOR_CUSTO);
      const quantidadeTotal = new Decimal(updatedListaOpcionais[index].quantidadeTotal);
    
      if (quantidade.gt(0)) {
        updatedListaOpcionais[index].quantidade = quantidade.minus(1).toNumber();
        updatedListaOpcionais[index].valorTotalProduto = quantidade.minus(1).times(valorVenda).toNumber();
    
        if (updatedListaOpcionais[index].DIVIDIR === "SIM") {
          updatedListaOpcionais[index].totalCusto = valorCusto.times(quantidade).dividedBy(quantidadeTotal).toNumber();
        } else {
          updatedListaOpcionais[index].totalCusto = valorCusto.times(quantidade).toNumber();
        }
    
        setListaAdicionais(updatedListaOpcionais);
      }
    };
  
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
              {Array.isArray(listaAdicionais)
                ? listaAdicionais.map((item, index) => (
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