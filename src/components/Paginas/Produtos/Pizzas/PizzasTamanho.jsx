import { React, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../Style.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function PizzasTamanho() {
  const [tamanho, setTamanho] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get('https://642b23b0d7081590f91d081a.mockapi.io/cardapio')
      .then((getdata) => {
        setTamanho(getdata.data);
      });
  }, []);

  const handleSubmit = ( tamanho, descricao, valor) => {
    localStorage.setItem('tamanho', tamanho);
    localStorage.setItem('descricao', descricao);
    localStorage.setItem('valor', valor);
    navigate('/Pizzas');
  };

  return (
    <div className='caixa-lista' id='lista5'>
      <label className='titulo-lista'>PIZZAS</label>
      {tamanho.map((data) => (
        <div className='caixa-css' key={data.id}>
          <form onClick={()=> handleSubmit(data.tamanho, data.descricao, data.valor)}>
            <div className='caixa-items'>
              <div className='caixa-1'>
                <div className='item-nome'>{data.tamanho}</div>
                <div className='item-descricao'>{data.descricao}</div>
              </div>
              <div className='caixa-2'>
                <div className='item-valor'>{data.valor}</div>
              </div>
              <div className='caixa-3'>
                <div className='item-img'></div>
              </div>
            </div>
            <button type='submit'>Submit</button>
          </form>
        </div>
      ))}
    </div>
  );
}