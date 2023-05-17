import { React, useState } from 'react';
import './Adicionais.css';
import Header from '../../../header/Header';
import AdicionaisInfo from './AdicionaisInfo'
import GruposAdicionais from './GruposAdicionais';
import Decimal from 'decimal.js';

export default function Adicionais() {
    const [totalItem, setTotalItem] = useState(new Decimal(0));

  return (
    <div>
      <div>
        <Header />
      </div>
        <AdicionaisInfo
          totalItem={totalItem}
        />
      <div>
        <GruposAdicionais
          totalItem={totalItem}
          setTotalItem={setTotalItem}
        />
      </div>
    </div>
  );
}