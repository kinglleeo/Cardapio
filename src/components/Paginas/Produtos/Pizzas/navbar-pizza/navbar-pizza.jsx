import { React, useState, useEffect } from 'react'
import './navbar-pizza.css'

export default function navbarPizza(){
    const [bar, setBar] = useState('relative')

    useEffect(()=>{
        window.addEventListener('scroll', barNavbar)
        return()=>{
            window.removeEventListener('scroll', barNavbar)
        }
    }, [])
    const barNavbar =()=>{
        if(window !== undefined){
            let windowheight = window.scrollY
            windowheight > 40? setBar('nav-pizza-top') : setBar('relative')
        }
    }
    return(
        <div className={`${bar}`}>
            <div className='navbar-pizza'>
                <div className='navbar-pizza-item' onClick={() => document.getElementById('salgadas').scrollIntoView({ behavior: 'smooth'})}>
                    <h1>salgadas</h1>
                </div>
                <div className='navbar-pizza-item' onClick={() => document.getElementById('doces').scrollIntoView({ behavior: 'smooth'})}>
                    <h1>doces</h1>
                </div>
                <div className='navbar-pizza-item' onClick={() => document.getElementById('nobres').scrollIntoView({ behavior: 'smooth'})}>
                    <h1>nobres</h1>
                </div>
                <div className='navbar-pizza-item' onClick={() => document.getElementById('pizza4').scrollIntoView({ behavior: 'smooth'})}>
                    <h1>Pizza 4</h1>
                </div>
                <div className='navbar-pizza-item' onClick={() => document.getElementById('pizza5').scrollIntoView({ behavior: 'smooth'})}>
                    <h1>Pizza 5</h1>
                </div>
            </div>
        </div>
    )
}