import { React, useState } from 'react';
import Header from '../../../header/Header';
import Navbarpizza from './navbar-pizza/navbar-pizza';
import Salgadas from './sabores-pizza/salgadas';
import ComandaPizza from './valorpizza/ComandaPizza';
import Doces from './sabores-pizza/doces'

export default function ListPizzas() {
  const [selectedItems, setSelectedItems] = useState([]);

  return (
    <div>
      <div>
        <Header />
      </div>
      <div>
        <ComandaPizza 
          selectedItems={selectedItems} 
          setSelectedItems={setSelectedItems} 
        />
      </div>
      <div>
        <Navbarpizza/>
      </div>
      <div>
        <Salgadas 
          selectedItems={selectedItems} 
          setSelectedItems={setSelectedItems} 
        />
      </div>
      <div>
        <Doces
          selectedItems={selectedItems}
          setSelectedItems={setSelectedItems}
        />
      </div>
    </div>
  );
}