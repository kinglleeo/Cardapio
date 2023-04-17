import { React, useEffect, useState } from 'react';
import './comanda-pizza.css';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export default function ComandaPizza({ selectedItem, setSelectedItem, selectedItems, setSelectedItems }) {
  const { state } = useLocation();
  const { tamanhopizza } = state;
  const navigate = useNavigate()

  useEffect(() => {
    if (selectedItem) {
      setSelectedItems((prevSelectedItems) => [...prevSelectedItems, selectedItem]);
      setSelectedItem('');
    }
  }, [selectedItem, setSelectedItems, setSelectedItem]);


  const handleRemoveItem = (index) => {
    const itemToRemove = selectedItems[index];
    const newSelectedItems = [...selectedItems];
    newSelectedItems.splice(index, 1);
    setSelectedItems(newSelectedItems);
    handleUncheckCheckbox(itemToRemove.id);

  };
  const handleUncheckCheckbox = (itemId) => {
    const checkbox = document.getElementById(itemId);
    if (checkbox) {
      checkbox.checked = false;
    }
  };  
  const handleAdicionais = (selectedItems, tamanhopizza)=>{
     navigate('/AdicionaisPizza', {state: { selectedItems, tamanhopizza }});
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
        <button onClick={(()=> handleAdicionais(selectedItems, tamanhopizza))}>Adicionais</button>
      </div>
    </div>
  </div>
  );
  }