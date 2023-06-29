import { Route, Routes } from "react-router-dom";
import PaginaMain from './components/Paginas/PaginaMain'
import GrupoList from './components/Paginas/Produtos/GrupoList'
import { Provider } from 'react-redux';
import { store } from './redux/store';
import Carrinho from './components/Carrinho/Carrinho'
import LoginPage from "./components/Usuarios/LoginPage/LoginPage";
import { UserAuthContextProvider } from "./components/Usuarios/LoginPage/Firebase/base"
import PaginaUsuario from './components/Usuarios/UsuarioInfo/PaginaUsuario/PaginaUsuario'
import MainPizzas from './components/Paginas/Produtos/Pizzas/MainPizzas'
import AdicionaisMain from './components/Paginas/Produtos/Adicionais/AdicionaisMain'
import TelaInicialCardapio from './TelaInicialCardapio'
import LoginGarcom from './components/Usuarios/LoginPage/LoginGarcom'

export default function App(){
  
    return(
      <UserAuthContextProvider>
          <Provider store={store}>
            <Routes>
              <Route path='/' element={<TelaInicialCardapio/>}/>
              <Route path='/Main' element={ <PaginaMain/> } />
              <Route path='/Carrinho' element={ <Carrinho/>  }/>
              <Route path='/GrupoList' element={ <GrupoList/> }/>
              <Route path='/PaginaUsuario' element={ <PaginaUsuario/> }/>
              <Route path='/AdicionaisMain' element={ <AdicionaisMain/> }/>
              <Route path='/Pizzas' element={ <MainPizzas/> }/>
              <Route path='/login' element={<LoginPage/>}></Route>
              <Route path='/loginGarcom' element={<LoginGarcom/>}></Route>
            </Routes>
          </Provider>
        </UserAuthContextProvider>
    )
}



