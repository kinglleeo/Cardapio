import { React, useEffect, useState } from 'react';
import './comanda-pizza.css';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { MostrarSelecionados } from '../sabores-pizza/OperacaoInputs';
import { Total } from '../sabores-pizza/OperacaoInputs';

export default function ComandaPizza({ selectedSabores, setSelectedSabores}) {
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
        {selectedSabores.map((item, index) => (
          <div key={index} className='item-s-Select'>
              {item.nome}
            <MostrarSelecionados
              selectedSabores={selectedSabores}
              setSelectedSabores={setSelectedSabores}
              index={index}
            />
          </div> 
        ))}
      </div>
      <div className="caixa-c-3">
        <Total 
          selectedSabores={selectedSabores}
          tamanhopizza={tamanhopizza}
        />
      </div>
    </div>
  </div>
  );
  }