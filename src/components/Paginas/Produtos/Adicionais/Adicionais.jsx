import React, { useState } from 'react';
import './Adicionais.css';
import Header from '../../../header/Header';
import AdicionaisInfo from './AdicionaisInfo';
import GruposAdicionais from './GruposAdicionais';

export default function Adicionais() {
  const [totalValue, setTotalValue] = useState(0);
  const [descricao, setDescricao] = useState([]);

  console.log(descricao)

  return (
    <div>
      <div>
        <Header />
      </div>
        <AdicionaisInfo
          totalValue={totalValue}
        />
      <div>
        <GruposAdicionais
          setTotalValue={setTotalValue}
          setDescricao={setDescricao}
        />
      </div>
    </div>
  );
}