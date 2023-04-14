import { React, useState } from 'react';
import Header from '../../../header/Header';
import Navbarpizza from './navbar-pizza/navbar-pizza';
import Salgadas from './sabores-pizza/salgadas';
import ComandaPizza from './valorpizza/ComandaPizza';

export default function ListPizzas() {
  const [selectedItem, setSelectedItem] = useState('');
  const [selectedCheckboxes, setSelectedCheckboxes] = useState([]);
 
  return (
    <div>
      <div>
        <Header />
      </div>
      <div>
      <ComandaPizza 
  selectedItem={selectedItem} 
  setSelectedItem={setSelectedItem} 
  selectedCheckboxes={selectedCheckboxes} 
  setSelectedCheckboxes={setSelectedCheckboxes} 
/>
      </div>
      <div>
        <Navbarpizza />
      </div>
      <div>
        <Salgadas setSelectedItem={setSelectedItem} setSelectedCheckboxes={setSelectedCheckboxes}/>
      </div>
    </div>
  );
}