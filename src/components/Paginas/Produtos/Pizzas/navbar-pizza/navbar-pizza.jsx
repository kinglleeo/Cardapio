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
            windowheight > 80? setBar('nav-pizza-top') : setBar('relative')
        }
    } 
    return(
        <div className={`${bar}`}>
            <div className='navbar-pizza'>
                <div className='navbar-pizza-item' onClick={() => document.getElementById('salgadas').scrollIntoView({ behavior: 'smooth'})}>
                    <div>Salgadas</div>
                </div>
                <div className='navbar-pizza-item' onClick={() => document.getElementById('doces').scrollIntoView({ behavior: 'smooth'})}>
                    <div>doces</div>
                </div>
                <div className='navbar-pizza-item' onClick={() => document.getElementById('nobres').scrollIntoView({ behavior: 'smooth'})}>
                    <div>nobres</div>
                </div>
                <div className='navbar-pizza-item' onClick={() => document.getElementById('pizza4').scrollIntoView({ behavior: 'smooth'})}>
                    <div>Pizza 4</div>
                </div>
                <div className='navbar-pizza-item' onClick={() => document.getElementById('pizza5').scrollIntoView({ behavior: 'smooth'})}>
                    <div>Pizza 5</div>
                </div>
            </div>
        </div>
    )
}