import axios from 'axios'
import { React, useState, useEffect } from 'react'
import './pizza.css'
import Header from '../../../header/Header'
import Footer from '../../../Footer/Footer'
import MenuBarPizza from './MenuBarPizza'


export default function Pizzas(){
    const [pizzas, setPizzas] = useState('')

    useEffect(()=>{
        axios
            .get('https://642b23b0d7081590f91d081a.mockapi.io/bebidas')
            .then((getdata)=>{
                setPizzas(getdata.data)
            })
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
                {pizzas.map((data)=>
                    <div className='caixa-pizza'>
                        <div className='caixa-item-pizza'>
                        <div className='caixa-1'>
                                <div className='item-nome'>{data.sabor }</div>
                                <div className='item-descricao'>{data.descricao}</div>
                            </div>
                            <div className='caixa-2'>
                                <div className='item-valor'>{data.valor}</div>
                            </div>
                            <div className='caixa-3'>
                                <div className='item-img'></div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
            <div>
                <Footer/>
            </div>
        </div>
    )

}