import { React, useState, useEffect } from 'react'
import './StyleBarPizza.css'
import ValorBar from './Valorbar'



export default function MenuBar(){
    const [navegacao, setStickyClass] = useState('relative')


    //fixar barra de navegação
    useEffect(()=>{
        window.addEventListener('scroll', stickNavbar)
        return()=>{
            window.removeEventListener('scroll', stickNavbar)
        }
    }, [])
    const stickNavbar = ()=>{
        if(window !== undefined){
            let windowHeight = window.scrollY
            windowHeight > 40? setStickyClass('nav-top') : setStickyClass('relative')
        }
    }

  return(
    <div className={`${navegacao}`}>
                <div className='navbar-display'>
                    <ValorBar/>
                </div>
                <div className='navbar-atalhos'>
                    <div className='itembarraDeDirecionamento' onClick={() => document.getElementById('salgadas').scrollIntoView({ behavior: 'smooth' })}>
                        <label>Salgadas</label>
                    </div>
                    <div className='itembarraDeDirecionamento' onClick={() => document.getElementById('especiais').scrollIntoView({ behavior: 'smooth' })}>
                        <label>Especiais</label>
                    </div>
                    <div className='itembarraDeDirecionamento' onClick={() => document.getElementById('nobres').scrollIntoView({ behavior: 'smooth' })}>
                        <label>Nobres</label>
                    </div>
                    <div className='itembarraDeDirecionamento' onClick={() => document.getElementById('tradicionais').scrollIntoView({ behavior: 'smooth' })}>
                        <label>Tradicionais</label>
                    </div>
                    <div className='itembarraDeDirecionamento' onClick={() => document.getElementById('doces').scrollIntoView({ behavior: 'smooth' })}>
                        <label>Doces</label>
                    </div>                                    
                </div>
    </div>
  )
}

