import { React, useState, useEffect } from 'react'
import './pizza.css'
import Header from '../../../header/Header'
import Footer from '../../../Footer/Footer'
import PizzaBar from './navbarpizza/PizzaBar'
import PizzasDoces from './sabores/doces'
import PizzasEspeciais from './sabores/especiais'
import PizzasNobres from './sabores/nobres'
import PizzasSalgadas from './sabores/salgadas'
import PizzasTradicionais from './sabores/tradicionais'
import IconCarrinho from '../../Carrinho/Iconcarrinho'



export default function Pizzas(){
    

    return(
        <div className='main-pizza'>
            <div>
                <Header/>
            </div>
            <div>
                <PizzaBar/>
            </div>
            <div className='corpo-pizza'>
                <div className='lista-produtos'>
                    <div>
                        <PizzasSalgadas/>
                    </div>
                    <div>
                        <PizzasEspeciais/>
                    </div>
                    <div>
                        <PizzasNobres/>
                    </div>
                    <div>
                        <PizzasTradicionais/>
                    </div>
                    <div>
                        <PizzasDoces/>
                    </div>
                </div>
            </div>
            <div>
                <IconCarrinho/>
            </div>    
            <div>
                <Footer/>
            </div>
        </div>
    )

}