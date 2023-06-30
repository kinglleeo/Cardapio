import Header from '../header/Header';
import GrupoList from './Produtos/ProdutosLista/GrupoList';
import BarraCarrinhoAtalho from '../Carrinho/BarraCarrinhoAtalho'
import Footer from '../Footer/Footer'
import '../../Styles/Styles.css'

export default function Main() {
   
  return ( 
    <div >
      <div className='Main'>
        <div>
          <Header/>
        </div>
        <div className='lista-Main-Page'>
          <GrupoList/>
        </div>
        <div>
          <BarraCarrinhoAtalho/>
        </div>
      </div>
        <div>
          <Footer/>
        </div>
    </div>
  );
}