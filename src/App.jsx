import React from 'react'
import Main from './components/Paginas/Main'
import {
  Route,
  Routes,
} from "react-router-dom";
import Carrinho from './components/Paginas/Carrinho/Carrinho'
import ListaProdutos from './components/Paginas/Produtos/ListaProdutos'
export default function App(){
    return(
        <Routes>
          <Route path='/' element={<Main/>} />
          <Route path='/Carrinho' element={<Carrinho/>}/>
          <Route path='/ListaProdutos' element={<ListaProdutos/>}/>
        </Routes>
    )
}