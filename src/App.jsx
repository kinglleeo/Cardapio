import React from 'react'
import Main from './components/Paginas/Main'
import {
  Route,
  Routes,
} from "react-router-dom";
import Carrinho from './components/Carrinho/Carrinho'
import GrupoList from './components/Paginas/Produtos/GrupoList'
import { Provider } from 'react-redux';
import { store } from './redux/store';
import Adicionais from './components/Paginas/Produtos/Adicionais/Adicionais'

export default function App(){
    return(
      <Provider store={store}>
        <Routes>
          <Route path='/' element={<Main/>} />
          <Route path='/Carrinho' element={<Carrinho/>}/>
          <Route path='/GrupoList' element={<GrupoList/>}/>
          <Route path='/Adicionais' element={<Adicionais/>}/>
        </Routes>
      </Provider>
    )
}