import React from 'react'
import Main from './components/Paginas/Main'
import {
  Route,
  Routes,
} from "react-router-dom";
import Carrinho from './components/Carrinho/Carrinho'
import ListaProdutos from './components/Paginas/Produtos/ListaProdutos'
import { Provider } from 'react-redux';
import { store } from './redux/store';
import Adicionais from './components/Paginas/Produtos/adicionais/Adicionais'
import TamanhoPizzas from './components/Paginas/Produtos/Pizzas/tamanho-pizza'
import Pizzas from './components/Paginas/Produtos/Pizzas/Pizzas'
import AdicionaisPizza from './components/Paginas/Produtos/Pizzas/adicionaispizza/Adicionaispizza'

export default function App(){
    return(
      <Provider store={store}>
        <Routes>
          <Route path='/' element={<Main/>} />
          <Route path='/Carrinho' element={<Carrinho/>}/>
          <Route path='/ListaProdutos' element={<ListaProdutos/>}/>
          <Route path='/Adicionais' element={<Adicionais/>}/>
          <Route path='/TamanhoPizzas' element={<TamanhoPizzas/>}/>
          <Route path='/Pizzas' element={<Pizzas/>}/>
          <Route path='/AdicionaisPizza' element={<AdicionaisPizza/>}/>
        </Routes>
      </Provider>
    )
}