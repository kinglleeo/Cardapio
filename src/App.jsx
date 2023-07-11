import { Route, Routes } from "react-router-dom";
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { UserAuthContextProvider } from "./components/Usuarios/LoginPage/Firebase/base"
import TelaInicialCardapio from './TelaInicialCardapio'
import PaginaMain from './components/Paginas/PaginaMain'
import GrupoList from './components/Paginas/Produtos/ProdutosLista/GrupoList'
import MainPizzas from './components/Paginas/Produtos/Pizzas/MainPizzas'
import AdicionaisMain from './components/Paginas/Produtos/Adicionais/AdicionaisMain'
import Carrinho from './components/Carrinho/Carrinho'
import LoginPage from "./components/Usuarios/LoginPage/LoginPage";
import PaginaUsuario from './components/Usuarios/UsuarioInfo/PaginaUsuario/PaginaUsuario'
import LoginGarcom from './components/Usuarios/LoginPage/LoginGarcom'
import LoginAdm from './components/Usuarios/LoginPage/LoginAdm'
import Pedidos from './components/Administração/Pedidos/Pedidos'
import Terminal from './components/Administração/Terminal/Terminal'
import DetalhesPedido from './components/Administração/Terminal/partes/MainDetalhesPedidos'

export default function App(){
  
    return(
      <UserAuthContextProvider>
          <Provider store={store}>
            <Routes>
              <Route path='/' element={<TelaInicialCardapio/>}/>
              <Route path='/Main' element={ <PaginaMain/> } />
              <Route path='/GrupoList' element={ <GrupoList/> }/>
              <Route path='/Adicionais' element={ <AdicionaisMain/> }/>
              <Route path='/Pizzas' element={ <MainPizzas/> }/>
              <Route path='/Carrinho' element={ <Carrinho/>  }/>
              <Route path='/login' element={<LoginPage/>}></Route>
              <Route path='/PaginaUser' element={ <PaginaUsuario/> }/>
              <Route path='/loginGarcom' element={<LoginGarcom/>}></Route>
              <Route path='/loginAdm' element={<LoginAdm/>}/>
              <Route path='/Pedidos' element={<Pedidos/>}></Route>

              <Route path='/Terminal' element={<Terminal/>}></Route>
              <Route path='/DetalhesPedido' element={<DetalhesPedido/>}></Route>

            </Routes>
          </Provider>
        </UserAuthContextProvider>
    )
}



