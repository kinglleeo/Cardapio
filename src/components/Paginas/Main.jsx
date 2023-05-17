import Header from '../header/Header';
import GrupoList from './Produtos/GrupoList';
export default function Main() {
  return ( 
    <div>
        <div>
          <Header/>
        </div>
        <div>
          <GrupoList/>
        </div>
    </div>
  );
}