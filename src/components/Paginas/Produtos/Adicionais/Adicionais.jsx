import { React } from 'react';
import './Adicionais.css'
import Header from '../../../header/Header';
import AdicionaisList from './AdicionaisList'
import AdicionaisInfo from './AdicionaisInfo'
import AdicionaisCarBar from './AdicionaisCarBar'
import { useLocation } from 'react-router-dom';

export default function Adicionais() {
  
  return (
    <div>
        <div>
          <Header/>
        </div>
          <AdicionaisInfo/>
        <div>
          <AdicionaisList/>
        </div>
        <div>
          <AdicionaisCarBar/>
        </div>
    </div>
  );
}