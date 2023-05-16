import Header from '../header/Header';
import GrupoList from './Produtos/GrupoList';
import IconCarrinho from '../Carrinho/Iconcarrinho';
import TopoPagina from '../AA-utilidades/Topo';


export default function Main() {

  return ( 
    <div className='main-main'>
        <div className='main-header'>
          <Header/>
        </div>
        <div>
          <GrupoList
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