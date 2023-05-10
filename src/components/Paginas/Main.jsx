import Header from '../header/Header';
import SearchBar from '../navbar/Search/SearchBar';
import GrupoList from './Produtos/GrupoList';
import IconCarrinho from '../Carrinho/Iconcarrinho';
import TopoPagina from '../AA-utilidades/Topo';
import Promo from '../navbar/NavPromocoes/navPromo';
import './Main.css'
import MenuBar from '../navbar/menubar';

export default function Main() {


  return ( 
    <div className='main-main'>
        <div className='main-header'>
          <Header/>
        </div>
        <div>
          <Promo/>
        </div>
        <div>
          <MenuBar/>
        </div>
        <div>
          <SearchBar/>
        </div>
        <div className='main-lista'>
          <GrupoList/>
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