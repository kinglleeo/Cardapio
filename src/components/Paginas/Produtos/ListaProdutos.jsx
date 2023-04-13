import React from 'react'
import Lanches from './Lanches/lanches'
import PizzasTamanho from './Pizzas/PizzasTamanho'
import Pasteis from './Pasteis/pasteis'
import './listaProdutos.css'
import MenuBar from '../../navbar/menubar'
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
                
            </div>
            <div>
                <Pasteis/>
            </div>
            <div>
                <PizzasTamanho/>
            </div>
            <div>
               
            </div>
            <div>
                <Footer/>
            </div>
        </div>
       
    )
}