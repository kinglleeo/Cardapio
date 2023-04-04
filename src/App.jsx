import React from 'react'
import Main from './components/Paginas/Main'
import {
  Route,
  Routes,
} from "react-router-dom";
import Pizzas from './components/Paginas/Pizzas/Pizzas'

export default function App(){
    return(
        <Routes>
          <Route path='/' element={<Main/>} />
          <Route path='/Pizzas' element={<Pizzas/>} />
        </Routes>
    )
}