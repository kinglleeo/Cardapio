import axios from 'axios';
import { React, useState, useEffect } from 'react';
import Decimal from 'decimal.js';
import './AdicionaisList.css';
import { formCurrency } from '../../../AA-utilidades/numeros';

export default function AdicionaisList({ totalItem, setTotalItem }) {
  const [adicionais, setAdicionais] = useState([]);
  const [listaAdicionaisAtivo, setListaAdicionaisAtivo] = useState(false);
  
  useEffect(() => {
    axios.get('https://642b23b0d7081590f91d081a.mockapi.io/adicionais').then((getdata) => {
      const data = getdata.data.map((item) => ({
        ...item,
        quantidade: new Decimal(0),
      }));
      setAdicionais(data);
    });
  }, []);

  useEffect(() => {
    let total = new Decimal(0);
    adicionais.forEach((item) => {
      const valor = new Decimal(item.valor);
      const quantidade = new Decimal(item.quantidade);
      total = total.plus(valor.times(quantidade));
    });
    setTotalItem(total);
  }, [adicionais]);

  const increaseQuantity = (index) => {
    setAdicionais((prevState) => {
      const updatedAdicionais = [...prevState];
      updatedAdicionais[index].quantidade = updatedAdicionais[index].quantidade.plus(1);
      return updatedAdicionais;
    });
  };

  const decreaseQuantity = (index) => {
    setAdicionais((prevState) => {
      const updatedAdicionais = [...prevState];
      if (updatedAdicionais[index].quantidade.greaterThan(0)) {
        updatedAdicionais[index].quantidade = updatedAdicionais[index].quantidade.minus(1);
      }
      return updatedAdicionais;
    });
  };

  const toggleLista = () => {
    if (listaAdicionaisAtivo === true) {
      setListaAdicionaisAtivo(false)
    } else {
      setListaAdicionaisAtivo(true)
    }
  }

  return (
    <div>
      <div className='box-Adicionais'>
        <div className='Adicionais'>
          <div className='box-adicionais-descricao'>
            <div className='Adicionais-titulo'> Adicionais </div>
            <div className='adicionais-quantidadeMax'> 
              <div>Até 3 itens</div>
            </div>
          </div>
          <div className='Adicionais-icon' onClick={() => toggleLista()}>
            {listaAdicionaisAtivo === true ? '-' : '+'}
          </div>
        </div>
      </div>
      <div className='AdicionaisList'>
        {listaAdicionaisAtivo === true && (
          <div className='AdicionaisList'>
              <div className='box-quantidadeMaxima'>
                <div className='quantidadeMax'>
                  <div className='quantidadeMax-text'>Quantidade Maxima</div>
                  <div className='quantidadeMax-value-box'>
                      <div className='quantidadeMax-value'>3</div>
                  </div>
                </div>
                <div className='quantidadeMax'>
                  <div className='quantidadeMax-text'>Escolhidos</div>
                  <div className='quantidadeMax-value-box'>
                      <div className='quantidadeMax-value'>1</div>
                  </div>
                </div>
                <div className='quantidadeMax'>
                  <div className='quantidadeMax-text'>Faltam</div>
                  <div className='quantidadeMax-value-box'>
                      <div className='quantidadeMax-value'>2</div>
                  </div>
                </div>
              </div>
              {Array.isArray(adicionais)
                ? adicionais.map((item, index) => (
                    <div className='Card-Adicionais' key={item.id}>
                      <div className='Card-Adicionais-inner'>
                        <div className='Card-Adicionais-Descricao'>
                          <div className='box-descricao-1'>
                            <div className='Adicional-nome'>{item.nome}</div>
                          </div>
                          <div className='box-descricao-2'>
                            <div className='adicional-valor'>{formCurrency.format(item.valor)}</div>
                          </div>
                        </div>
                        <div className='Card-Adicionais-Botoes'>
                          <div className='btn-quantia-adicionais'>
                            <button className='arrow left' onClick={() => decreaseQuantity(index)}></button>
                          </div>
                          <div className='quantia-adicionais'>{item.quantidade.toString()}</div>
                          <div className='btn-quantia-adicionais'>
                            <button className='arrow right'onClick={() => increaseQuantity(index)}></button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))
                : null}   
            </div>                   
          )}
      </div>


      <div className='caixa-observacoes'>
        
      </div>
    </div>
  );
}
