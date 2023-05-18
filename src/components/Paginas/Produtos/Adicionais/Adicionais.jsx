import { React, useState } from 'react';
import './Adicionais.css';
import Header from '../../../header/Header';
import AdicionaisInfo from './AdicionaisInfo'
import GruposAdicionais from './GruposAdicionais';
import Decimal from 'decimal.js';

export default function Adicionais() {
    
  return (
    <div>
      <div>
        <Header />
      </div>
        <AdicionaisInfo
        />
      <div>
        <GruposAdicionais
        />
      </div>
    </div>
  );
}