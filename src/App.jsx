import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Main from './components/Paginas/Main'
import GrupoList from './components/Paginas/Produtos/GrupoList'
import { Provider } from 'react-redux';
import { store, persistor } from './redux/store';
import Carrinho from './components/Carrinho/Carrinho'
import Pagamentos from "./components/Carrinho/Pagamentos";
import LoginPage from "./components/Usuarios/LoginPage/LoginPage";
import ProtectedRoute from "./components/Usuarios/LoginPage/Firebase/ProtectRoute";
import { UserAuthContextProvider } from "./components/Usuarios/LoginPage/Firebase/base"
import PaginaUsuario from './components/Usuarios/UsuarioInfo/PaginaUsuario/PaginaUsuario'
import MainPizzas from './components/Paginas/Produtos/Pizzas/MainPizzas'
import AdicionaisMain from './components/Paginas/Produtos/Adicionais/AdicionaisMain'
import PaginaLoadLogin from './components/Usuarios/LoginPage/LoginMetodos/PaginaLoadLogin'
import TelaInicialCardapio from './TelaInicialCardapio'
import LoginGarcom from './components/Usuarios/LoginPage/LoginGarcom'

export default function App(){
  
    return(
      <UserAuthContextProvider>
          <Provider store={store}>
            <Routes>
              <Route path='/' element={<TelaInicialCardapio/>}/>
              <Route path='/Main' element={ <Main/> } />
              <Route path='/Carrinho' element={ <Carrinho/>  }/>
              <Route path='/GrupoList' element={ <GrupoList/> }/>
              <Route path='/Pagamentos' element={ <Pagamentos/> }/>
              <Route path='/PaginaUsuario' element={ <PaginaUsuario/> }/>
              <Route path='/AdicionaisMain' element={ <AdicionaisMain/> }/>
              <Route path='/Pizzas' element={ <MainPizzas/> }/>
              <Route path='/login' element={<LoginPage/>}></Route>
              <Route path='/loginGarcom' element={<LoginGarcom/>}></Route>
              <Route path='/PaginaLoadLogin' element={<PaginaLoadLogin/>}/>
            </Routes>
          </Provider>
        </UserAuthContextProvider>
    )
}



