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
export default function App(){
  
    return(
      <UserAuthContextProvider>
          <Provider store={store}>
            <Routes>
              <Route path='/' element={<TelaInicialCardapio/>}/>
              <Route path='/Main' element={ <PaginaMain/> } />
              <Route path='/GrupoList' element={ <GrupoList/> }/>
              <Route path='/AdicionaisMain' element={ <AdicionaisMain/> }/>
              <Route path='/Pizzas' element={ <MainPizzas/> }/>
              <Route path='/Carrinho' element={ <Carrinho/>  }/>
              <Route path='/login' element={<LoginPage/>}></Route>
              <Route path='/PaginaUsuario' element={ <PaginaUsuario/> }/>
              <Route path='/loginGarcom' element={<LoginGarcom/>}></Route>
            </Routes>
          </Provider>
        </UserAuthContextProvider>
    )
}



