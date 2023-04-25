import { React, useState } from 'react';
import Header from '../../../header/Header';
import Navbarpizza from './navbar-pizza/navbar-pizza';
import Salgadas from './sabores-pizza/salgadas';
import ComandaPizza from './valorpizza/ComandaPizza';
import Doces from './sabores-pizza/doces'
import IconCarrinho from '../../../Carrinho/Iconcarrinho'
import TopoPagina from '../../../AA-utilidades/Topo';


export default function ListPizzas() {
  const [selectedSabores, setSelectedSabores] = useState([]);

  return (
    <div>
      <div>
        <Header />
      </div>
      <div>
        <ComandaPizza 
         selectedSabores={selectedSabores} 
         setSelectedSabores={setSelectedSabores} 
        />
      </div>
      <div>
        <Navbarpizza/>
      </div>
      <div>
        <Salgadas 
          selectedSabores={selectedSabores} 
          setSelectedSabores={setSelectedSabores} 
        />
      </div>
        <Doces/>

        <div>
          <IconCarrinho/>
        </div>
        <TopoPagina/>
    </div>
  );
}