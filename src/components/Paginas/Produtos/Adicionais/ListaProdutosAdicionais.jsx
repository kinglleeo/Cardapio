import { React, useEffect, useState, useRef } from 'react'
import './AdicionaisList.css';
import Decimal from 'decimal.js';
import { formCurrency } from '../../../AA-utilidades/numeros';

export default function ListaProdutosAdicionais({ Maximo, listaAdicionais, setListaAdicionais, setTotalItem }) {
  const [quantidadeTotal, setQuantidadeTotal] = useState(0);
  const listaAdicionaisRef = useRef(null); // Referência para armazenar os dados da lista

  const increaseQuantity = (index) => {
    setListaAdicionais((prevState) => {
      const updatedAdicionais = [...prevState];
      updatedAdicionais[index].quantidade = updatedAdicionais[index].quantidade + 1;
      return updatedAdicionais;
    });
    setQuantidadeTotal(quantidadeTotal + 1);
  };

  const decreaseQuantity = (index) => {
    setListaAdicionais((prevState) => {
      const updatedAdicionais = [...prevState];
      if (updatedAdicionais[index].quantidade) {
        updatedAdicionais[index].quantidade = updatedAdicionais[index].quantidade - 1;
      }
      return updatedAdicionais;
    });
    if (quantidadeTotal > 0) {
      setQuantidadeTotal(quantidadeTotal - 1);
    }
  };

  useEffect(() => {
    let total = new Decimal(0);
    listaAdicionais.forEach((item) => {
      const valor = new Decimal(item.VALOR_VENDA);
      const quantidade = new Decimal(item.quantidade);
      total = total.plus(valor.times(quantidade));
    });
    setTotalItem(total);
  }, [listaAdicionais]);

  const Escolhidos = () => {
    let escolhidos = quantidadeTotal;
    return escolhidos;
  };

  const Faltam = () => {
    let faltam = Maximo;
    const total = faltam - quantidadeTotal;
    return total;
  };

  useEffect(() => {
    // Atualiza a referência com os dados da lista quando ela for alterada
    listaAdicionaisRef.current = listaAdicionais;
  }, [listaAdicionais]);

  const carregarDadosArmazenados = () => {
    // Carrega os dados armazenados da lista quando necessário
    if (listaAdicionaisRef.current !== null) {
      setListaAdicionais(listaAdicionaisRef.current);
    }
  };

  useEffect(() => {
    carregarDadosArmazenados();
  }, []);

  
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
                            <button className='arrow left' onClick={() => decreaseQuantity(index)}></button>
                          </div>
                          <div className='quantia-adicionais'>{item.quantidade}</div>
                          <div className='btn-quantia-adicionais'>
                            <button className='arrow right'onClick={() => increaseQuantity(index)}
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
