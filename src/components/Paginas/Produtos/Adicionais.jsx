import React, { useState, useEffect } from 'react';
import { formCurrency } from '../../../AA-utilidades/numeros';
import IconCarrinho from '../../../Carrinho/Iconcarrinho';
import TopoPagina from '../../../AA-utilidades/Topo';
import { api } from '../../../../conecções/api';
import Decimal from 'decimal.js';
import { useLocation } from 'react-router-dom';

export default function AdicionaisList() {
  const [adicionais, setAdicionais] = useState([]);
  const { state } = useLocation();
  const { item } = state;
  const [quantidade, setQuantidade] = useState(0);

  useEffect(() => {
    api.get('/Adicionais').then((getdata) => {
      setAdicionais(getdata.data);
    });
  }, []);

  const handleIncreaseQuantidade = () => {
    setQuantidade(quantidade + 1);
  };

  const handleDecreaseQuantidade = () => {
    if (quantidade > 0) {
      setQuantidade(quantidade - 1);
    }
  };

  const valorTotal = Decimal(item.valor)
    .mul(quantidade)
    .toFixed(2); // Assuming the item.valor is a numeric value

  return (
    <div>
      <TopoPagina valor={valorTotal} />
      {adicionais.map((adicional) => (
        <div className="adicional" key={adicional.id}> {/* Aplicando a classe CSS */}
          <h3>{adicional.nome}</h3>
          <p>{adicional.descricao}</p>
          <p>{formCurrency(adicional.valor)}</p>
          <button onClick={handleIncreaseQuantidade}>+</button>
          <span>{quantidade}</span>
          <button onClick={handleDecreaseQuantidade}>-</button>
        </div>
      ))}
    </div>
  );
}
