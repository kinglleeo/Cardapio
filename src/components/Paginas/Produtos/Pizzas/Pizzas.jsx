import axios from 'axios'
import { React, useState, useEffect } from 'react'
import './pizza.css'
import Header from '../../../header/Header'
import Footer from '../../../Footer/Footer'
import MenuBarPizza from './MenuBarPizza'
import PizzasDoces from './sabores/doces'
import PizzasEspeciais from './sabores/especiais'
import PizzasNobres from './sabores/nobres'
import PizzasSalgadas from './sabores/salgadas'
import PizzasTradicionais from './sabores/tradicionais'
import IconCarrinho from '../../Carrinho/Iconcarrinho'

export default function Pizzas(){
    const [tamanho, setTamanho] = useState('')
    const [descricao, setDescricao] = useState('')
    const [valor, setValor] = useState('')

    useEffect(()=>{
        const tamanho = localStorage.getItem('tamanho')
            setTamanho(tamanho)
        const descricao = localStorage.getItem('descricao')
            setDescricao(descricao)
        const valor = localStorage.getItem('valor')
            setValor(valor)
    })

    
   
    return(
        <div className='main-pizza'>
            <div>
                <Header/>
            </div>
            <div>
                <MenuBarPizza/>
            </div>
            <div className='corpo-pizza'>
                <div className='header-pizza'>
                    <div className='caixa-header'>
                        <div className='item-h-tamanho'>{tamanho}</div>
                        <div className='item-h-valor'><label>Preço</label>R${valor}</div>
                        <div className='item-h-descricao'>{descricao}</div>
                    </div>    
                </div>
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