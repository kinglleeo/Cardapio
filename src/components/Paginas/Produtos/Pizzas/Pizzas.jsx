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

    useEffect(()=>{
        localStorage.getItem('tamanho')
        localStorage.getItem('descricao')
        localStorage.getItem('valor')
    })


    return(
        <div className='main-pizza'>
            <div>
                <Header/>
            </div>
            <div>
                <MenuBarPizza/>
            </div>
            <div className=''>
                <div className=''>
                    <div>{tamanho}</div>
                    <div>{descricao}</div>
                    <div>{valor}</div>
                </div>
            </div>
            <div>

            </div>
            <div>
                <Footer/>
            </div>
        </div>
    )

}