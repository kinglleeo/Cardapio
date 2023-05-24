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

export default function App(){
    return(
      <Provider store={store}>
        <Routes>
          <Route path='/' element={<Main/>} />
          <Route path='/Carrinho' element={<Carrinho/>}/>
          <Route path='/GrupoList' element={<GrupoList/>}/>
          <Route path='/Adicionais' element={<Adicionais/>}/>
          <Route path='/Pagamentos' element={<Pagamentos/>}></Route>
          <Route path='/Login' element={<Login/>}></Route>
          <Route path='/CriarConta' element={<CriarConta/>}></Route>
        </Routes>
      </Provider>
    )
}