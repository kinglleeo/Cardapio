import { React, useEffect, useState } from 'react'
import './AdicionaisList.css';
import { formCurrency } from '../../../AA-utilidades/numeros';
import { useQueryClient } from '@tanstack/react-query';
import Decimal from 'decimal.js';

export default function ListaProdutosAdicionais({ Maximo, listasAdicionais, setListaAdicionais }) {
  const [quantidadeTotal, setQuantidadeTotal] = useState(0);
  const queryClient = useQueryClient();

  useEffect(() => {
    if (Array.isArray(listasAdicionais)) {
      const total = listasAdicionais.reduce((accumulator, item) => accumulator + item.quantidade, 0);
        setQuantidadeTotal(total);
    }
  }, [listasAdicionais]);

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

  const Escolhidos = () => {
    let escolhidos = listasAdicionais.reduce((accumulator, item) => accumulator + item.quantidade, 0);
      return escolhidos;
  };

  const Faltam = () => {
    let faltam = Maximo;
      const total = faltam - quantidadeTotal;
        return total;
  };

  useEffect(() => {
    const calcularTotal = () => {  
      let valorTotal = new Decimal(0);
        listasAdicionais.forEach((item) => {
          const quantidade = item.quantidade;
          const valor = new Decimal(item.VALOR_VENDA || 0);
          const subtotal = valor.times(quantidade);
            valorTotal = valorTotal.plus(subtotal);
        });
      return formCurrency.format(valorTotal)
    };
  console.log(calcularTotal())
  }, [listasAdicionais]);


 
  

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
              {Array.isArray(listasAdicionais)
                ? listasAdicionais.map((item, index) => (
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