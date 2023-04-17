import { React, useEffect, useState } from 'react';
import './comanda-pizza.css';
import { useLocation } from 'react-router-dom';

export default function ComandaPizza({ selectedItem, setSelectedItem, selectedItems, setSelectedItems }) {
  const { state } = useLocation();
  const { tamanhopizza } = state;

  useEffect(() => {
    if (selectedItem) {
      setSelectedItems((prevSelectedItems) => [...prevSelectedItems, selectedItem]);
      setSelectedItem('');
    }
  }, [selectedItem, setSelectedItems, setSelectedItem]);

  const handleUncheckCheckbox = (itemId) => {
    const checkbox = document.getElementById(itemId);
    if (checkbox) {
      checkbox.checked = false;
    }
  };

  const handleRemoveItem = (index) => {
    const itemToRemove = selectedItems[index];
    const newSelectedItems = [...selectedItems];
    newSelectedItems.splice(index, 1);
    setSelectedItems(newSelectedItems);
    handleUncheckCheckbox(itemToRemove.id);
  };
  
  return (
  <div className="comanda-pizza">
    <div className="comanda-items">
      <div className="caixa-c-1">
        <div>{tamanhopizza.tamanho}</div>
      </div>
      <div className="caixa-c-2">
        {selectedItems.map((item, index) => (
          <div key={index}>
            {item.nome}
            <input type="checkbox" checked onChange={() => handleRemoveItem(index)} />
          </div>
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