import { React, useEffect, useState } from 'react';
import './comanda-pizza.css';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { MostrarSelecionados } from '../sabores-pizza/OperacaoInputs';
import { Total } from '../sabores-pizza/OperacaoValores';

export default function ComandaPizza({ selectedItem, setSelectedItem, selectedItems, setSelectedItems}) {
  const { state } = useLocation()
  const { tamanhopizza } = state
  const navigate = useNavigate()



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
            <MostrarSelecionados
              selectedItem={selectedItem}
              setSelectedItem={setSelectedItem}
              selectedItems={selectedItems}
              setSelectedItems={setSelectedItems}
              index={index}
            />
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
          <Total/>
      </div>
    </div>
  </div>
  );
  }