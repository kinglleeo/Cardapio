import { useState, useEffect } from 'react';
import { GiHamburger, GiFullPizza, GiWineBottle, GiFrenchFries } from 'react-icons/gi';
import './menubar.css';

export default function MenuBar() {
    const [stickyClass, setStickyClass]= useState('relative')


    useEffect(()=>{
      window.addEventListener('scroll', stickNavbar)
      return()=>{
        window.removeEventListener('scroll', stickNavbar)
      }
    },[])
    const stickNavbar =()=>{
      if(window !== undefined){
        let windowHeight = window.scrollY 
        windowHeight > 40? setStickyClass('nav-top') : setStickyClass('relative')
      }
    }

  return (
    <div className={`${stickyClass}`}>
      <div className='navbar-menu' >
        <div className='itembarraDeDirecionamento' onClick={() => document.getElementById('lista1').scrollIntoView({ behavior: 'smooth' })}>
          <GiHamburger />
          <label>Lanches</label>
        </div>
        <div className='itembarraDeDirecionamento' onClick={() => document.getElementById('lista2').scrollIntoView({ behavior: 'smooth' })}>
          <GiFrenchFries />
          <label>Porções</label>
        </div>
        <div className='itembarraDeDirecionamento' onClick={() => document.getElementById('lista3').scrollIntoView({ behavior: 'smooth' })}>
          <label>Pasteis</label>
        </div>
        <div className='itembarraDeDirecionamento' onClick={() => document.getElementById('lista4').scrollIntoView({ behavior: 'smooth' })}>
          <GiFullPizza />
          <label>Pizzas</label>
        </div>
        <div className='itembarraDeDirecionamento' onClick={() => document.getElementById('lista5').scrollIntoView({ behavior: 'smooth' })}>
          <GiWineBottle />
          <label>Bebidas</label>
        </div>
      </div>
    </div>
  );
}