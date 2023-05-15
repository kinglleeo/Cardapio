import Header from '../header/Header';
import SearchBar from '../navbar/Search/SearchBar';
import GrupoList from './Produtos/GrupoList';
import IconCarrinho from '../Carrinho/Iconcarrinho';
import TopoPagina from '../AA-utilidades/Topo';
import Promo from '../navbar/NavPromocoes/navPromo';
import { useState } from 'react';
import Footer from '../Footer/Footer';
import MenuBar from '../navbar/menubar';

export default function Main() {
  const [grupos, setGrupos] = useState([]);
  const [subGrupoList, setSubGrupoList] = useState([]);

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
            grupos={grupos}
            setGrupos={setGrupos}
            subGrupoList={subGrupoList}
            setSubGrupoList={setSubGrupoList}
          />
        </div>
        <div>
          <SearchBar/>
        </div>
        <div>
          <GrupoList
            grupos={grupos}
            subGrupoList={subGrupoList}
          />
        </div>
        <div>
          <IconCarrinho/>
        </div> 
        <div>
          <TopoPagina/>
        </div>
        <div>
          <Footer/>
        </div>
    </div>
  );
}