import React from 'react'
import Main from './components/Paginas/Main'
import {
  Route,
  Routes,
} from "react-router-dom";
import Carrinho from './components/Paginas/Carrinho/Carrinho'
import ListaProdutos from './components/Paginas/Produtos/ListaProdutos'
import Pizzas from './components/Paginas/Produtos/Pizzas/Pizzas'
import Adicionaislanches from './components/Paginas/Produtos/Lanches/adicionaislanches'

export default function App(){
    return(
        <Routes>
          <Route path='/' element={<Main/>} />
          <Route path='/Carrinho' element={<Carrinho/>}/>
          <Route path='/ListaProdutos' element={<ListaProdutos/>}/>
          <Route path='/Pizzas' element={<Pizzas/>}/>
          <Route path='/adicionaislanches' element={<Adicionaislanches/>}/>
        </Routes>
    )
}