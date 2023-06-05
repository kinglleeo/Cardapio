import { Route, Routes } from "react-router-dom";
import Main from './components/Paginas/Main'
import GrupoList from './components/Paginas/Produtos/GrupoList'
import { Provider } from 'react-redux';
import { store } from './redux/store';
import Carrinho from './components/Carrinho/Carrinho'
import Pagamentos from "./components/Carrinho/Pagamentos";
import LoginPage from "./components/Usuarios/LoginPage/LoginPage";
import CriarConta from './components/Usuarios/LoginPage/CriarConta/CriarConta'
import ProtectedRoute from "./components/Usuarios/LoginPage/Firebase/ProtectRoute";
import { UserAuthContextProvider } from "./components/Usuarios/LoginPage/Firebase/base"
import PaginaUsuario from './components/Usuarios/UsuarioInfo/PaginaUsuario/PaginaUsuario'
import RedirectLogin from './components/Usuarios/LoginPage/RedirectLogin'
import MainPizzas from './components/Paginas/Produtos/Pizzas/MainPizzas'
import AdicionaisMain from './components/Paginas/Produtos/Adicionais/AdicionaisMain'

export default function App(){
    return(
      <UserAuthContextProvider>
          <Provider store={store}>
            <Routes>
              <Route path='/' element={ <ProtectedRoute> <Main/> </ProtectedRoute> } />
              <Route path='/Carrinho' element={ <ProtectedRoute> <Carrinho/> </ProtectedRoute> }/>
              <Route path='/GrupoList' element={ <ProtectedRoute> <GrupoList/> </ProtectedRoute> }/>
              <Route path='/Pagamentos' element={ <ProtectedRoute> <Pagamentos/> </ProtectedRoute> }/>
              <Route path='/PaginaUsuario' element={<ProtectedRoute> <PaginaUsuario/> </ProtectedRoute>}/>
              <Route path='/AdicionaisMain' element={<ProtectedRoute> <AdicionaisMain/> </ProtectedRoute>}/>
              <Route path='/Pizzas' element={<ProtectedRoute> <MainPizzas/> </ProtectedRoute>}/>
              <Route path='/login' element={<LoginPage/>}></Route>
              <Route path='/CriarConta' element={<CriarConta/>}></Route>
              <Route path='/RedirectLogin' element={<RedirectLogin/>}/>
            </Routes>
          </Provider>
        </UserAuthContextProvider>
    )
}