import { React, useState } from 'react';
import './Adicionais.css';
import Header from '../../../header/Header';
import AdicionaisList from './AdicionaisList';
import AdicionaisInfo from './AdicionaisInfo';
import AdicionaisCarBar from './AdicionaisCarBar';
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
        <AdicionaisList 
        totalItem={totalItem}
        setTotalItem={setTotalItem}
        />
      </div>
      <div>
        <AdicionaisCarBar />
      </div>
    </div>
  );
}