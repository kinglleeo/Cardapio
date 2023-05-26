import Header from '../header/Header';
import GrupoList from './Produtos/GrupoList';
import IconeCarrinho from '../Carrinho/Iconcarrinho'
import Deslogar from '../Usuarios/deslogar'


export default function Main() {
  return ( 
    <div>
        <div>
          <Header/>
        </div>
        <div>
          <GrupoList/>
        </div>
        <div>
          <IconeCarrinho/>
        </div>
        <div>
          <Deslogar/>
        </div>
    </div>
  );
}