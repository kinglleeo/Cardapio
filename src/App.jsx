import { Route, Routes } from "react-router-dom";
import Main from './components/Paginas/Main'
import GrupoList from './components/Paginas/Produtos/GrupoList'
import { Provider } from 'react-redux';
import { store } from './redux/store';
import Carrinho from './components/Carrinho/Carrinho'
import Adicionais from './components/Paginas/Produtos/Adicionais/Adicionais'
import Pagamentos from "./components/Carrinho/Pagamentos";
import Login from "./components/Usuarios/Login";
import CriarConta from './components/Usuarios/CriarConta'
import ProtectedRoute from "./components/Usuarios/ProtectRoute";
import { UserAuthContextProvider } from "./components/Usuarios/base"

export default function App(){
    return(
      <UserAuthContextProvider>
          <Provider store={store}>
            <Routes>
              <Route path='/' element={ <ProtectedRoute> <Main/> </ProtectedRoute> } />
              <Route path='/Carrinho' element={ <ProtectedRoute> <Carrinho/> </ProtectedRoute> }/>
              <Route path='/GrupoList' element={ <ProtectedRoute> <GrupoList/> </ProtectedRoute> }/>
              <Route path='/Adicionais' element={ <ProtectedRoute> <Adicionais/> </ProtectedRoute> }/>
              <Route path='/Pagamentos' element={ <Pagamentos> <Pagamentos/> </Pagamentos> }></Route>
              <Route path='/login' element={<Login/>}></Route>
              <Route path='/CriarConta' element={<CriarConta/>}></Route>
            </Routes>
          </Provider>
        </UserAuthContextProvider>
    )
}