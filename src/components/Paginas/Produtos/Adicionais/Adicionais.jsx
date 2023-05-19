import React, { useState } from 'react';
import './Adicionais.css';
import Header from '../../../header/Header';
import AdicionaisInfo from './AdicionaisInfo';
import GruposAdicionais from './GruposAdicionais';

export default function Adicionais() {
  const [totalValue, setTotalValue] = useState(0);

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
        />
      </div>
    </div>
  );
}