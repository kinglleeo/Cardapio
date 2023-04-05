import React from 'react'
import Lanches from './Lanches/lanches'
import Bebidas from './Bebidas/Bebidas'
import Pasteis from './Pasteis/Pasteis'
import Porcoes from './Porcoes/Porcoes'
import PizzasTamanho from './Pizzas/PizzasTamanho'
import './listaProdutos.css'
import MenuBar from '../navbar/menubar'
import Footer from '../../Footer/Footer'

export default function ListaProdutos(){

    return(
        <div className='lista-produtos'>
            <div>
                <MenuBar/>
            </div>
            <div>
                <Lanches/>
            </div>
            <div>
                <Bebidas/>
            </div>
            <div>
                <Pasteis/>
            </div>
            <div>
                <Porcoes/>
            </div>
            <div>
                <PizzasTamanho/>
            </div>
            <div>
                <Footer/>
            </div>
        </div>
    )
}