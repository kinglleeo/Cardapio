import axios from 'axios';
import { React, useState, useEffect } from 'react';
import './AdicionaisList.css';
import { formCurrency } from '../../../AA-utilidades/numeros';

export default function AdicionaisList() {
  const [adicionais, setAdicionais] = useState([]);

  useEffect(() => {
    axios.get('https://642b23b0d7081590f91d081a.mockapi.io/adicionais').then((getdata) => {
      const data = getdata.data.map((item) => ({
        ...item,
        quantidade: 0,
      }));
      setAdicionais(data);
    });
  }, []);

  const increaseQuantity = (index) => {
    setAdicionais((prevState) => {
      const updatedAdicionais = [...prevState];
      updatedAdicionais[index].quantidade += 1;
      return updatedAdicionais;
    });
  };

  const decreaseQuantity = (index) => {
    setAdicionais((prevState) => {
      const updatedAdicionais = [...prevState];
      if (updatedAdicionais[index].quantidade > 0) {
        updatedAdicionais[index].quantidade -= 1;
      }
      return updatedAdicionais;
    });
  };

  return (
    <div>
      <div className='AdicionaisList'>
        {Array.isArray(adicionais)
          ? adicionais.map((item, index) => (
              <div className='Card-Adicionais'>
                <div className='Card-Adicionais-inner'>
                  <div className='Card-Adicionais-Descricao'>
                    <div className='box-descricao-1'>
                      <div className='Adicional-nome'>{item.nome}</div>
                      <div className='Adicional-descricao'>{item.descricao}</div>
                    </div>
                    <div className='box-descricao-2'>
                      <div className='adic ional-valor'>{formCurrency.format(item.valor)}</div>
                    </div>
                  </div>
                  <div className='Card-Adicionais-Botoes'>
                    <button onClick={() => decreaseQuantity(index)}>-</button>
                    <span>{item.quantidade}</span>
                    <button onClick={() => increaseQuantity(index)}>+</button>
                  </div>
                </div>
              </div>
            ))
          : null}
      </div>
    </div>
  );
}
