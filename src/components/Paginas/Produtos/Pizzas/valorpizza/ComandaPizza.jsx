import { React, useEffect, useState } from 'react';
import './comanda-pizza.css';
import { useLocation } from 'react-router-dom';

export default function ComandaPizza({ selectedItem, setSelectedItem }) {
  const { state } = useLocation();
  const { tamanhopizza } = state;
  const [selectedItems, setSelectedItems] = useState([]);

  useEffect(() => {
    if (selectedItem) {
      setSelectedItems((prevSelectedItems) => [...prevSelectedItems, selectedItem]);
      setSelectedItem('');
    }
  }, [selectedItem]);

  return (
    <div className="comanda-pizza">
      <div className="comanda-items">
        <div className="caixa-c-1">
          <div>{tamanhopizza.tamanho}</div>
        </div>
        <div className="caixa-c-2">
          {selectedItems.map((item, index) => (
            <div key={index}>{item.nome}</div>
          ))}
        </div>
        <div className="caixa-c-3">
          <div>
            <label>Valor Total</label>
          </div>
          <div>R$ {tamanhopizza.valor}</div>
        </div>
        <div className="caixa-c-4">
          <button>aaaa</button>
        </div>
      </div>
    </div>
  );
}