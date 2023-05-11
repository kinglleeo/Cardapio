import Header from '../header/Header';
import SearchBar from '../navbar/Search/SearchBar';
import GrupoList from './Produtos/GrupoList';
import IconCarrinho from '../Carrinho/Iconcarrinho';
import TopoPagina from '../AA-utilidades/Topo';
import Promo from '../navbar/NavPromocoes/navPromo';
import './Main.css'
import MenuBar from '../navbar/menubar';
import { useState } from 'react';

export default function Main() {
 const [grupos, setGrupoList] = useState([]);

  return ( 
    <div className='main-main'>
        <div className='main-header'>
          <Header/>
        </div>
        <div>
          <Promo/>
        </div>
        <div>
          <MenuBar
            setGrupoList={setGrupoList}
          />
        </div>
        <div>
          <SearchBar/>
        </div>
        <div>
          <GrupoList
            grupos={grupos}
          />
        </div>
        <div>
          <IconCarrinho/>
        </div> 
        <div>
          <TopoPagina/>
        </div>
    </div>
  );
}