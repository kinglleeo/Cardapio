import { React, useState, useEffect } from 'react'
import './StyleBarPizza.css'
import ValorBar from './Valorbar'



export default function MenuBar(){

    //fixar barra de navegação
  window.addEventListener('scroll', function() {
    var navbar = document.querySelector('.navbar');
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (scrollTop > 0) {
      navbar.classList.add('fixed-top');
    } else {
      navbar.classList.remove('fixed-top');
    }
  });

  return(
    <div className='navbar'>
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

