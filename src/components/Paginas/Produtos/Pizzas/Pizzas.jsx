import { React, useState } from 'react';
import Header from '../../../header/Header';
import Navbarpizza from './navbar-pizza/navbar-pizza';
import Salgadas from './sabores-pizza/salgadas';
import ComandaPizza from './valorpizza/ComandaPizza';

export default function ListPizzas() {
  const [selectedItem, setSelectedItem] = useState('');
 
  return (
    <div>
      <div>
        <Header />
      </div>
      <div>
      <ComandaPizza 
  selectedItem={selectedItem} 
  setSelectedItem={setSelectedItem} 
/>
      </div>
      <div>
        <Navbarpizza />
      </div>
      <div>
        <Salgadas setSelectedItem={setSelectedItem} />
      </div>
    </div>
  );
}