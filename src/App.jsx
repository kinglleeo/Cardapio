import React from 'react'
import Main from './components/Paginas/Main'
import {
  Route,
  Routes,
} from "react-router-dom";
import Pasteis from './components/Paginas/Pasteis/Pasteis'
import Pizzas from './components/Paginas/Pizzas/Pizzas'
import Lanches from './components/Paginas/Lanches/Lanches'
import Porcoes from './components/Paginas/Porcoes/Porcoes'
import Bebidas from './components/Paginas/Bebidas/Bebidas'

export default function App(){
    return(
        <Routes>
          <Route path='/' element={<Main/>} />
          <Route path='/Pasteis' element={<Pasteis/>} />
          <Route path='/Pizzas' element={<Pizzas/>} />
          <Route path='/Lanches' element={<Lanches/>}/>
          <Route path='/Porcoes' element={<Porcoes/>}/>
          <Route path='/Bebidas' element={<Bebidas/>}/>
        </Routes>
    )
}