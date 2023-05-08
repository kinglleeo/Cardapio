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
        windowHeight > 400? setStickyClass('nav-top') : setStickyClass('relative')
      }
    }

  return (
    <div className={`${stickyClass}`}>
      <div className='navbar-menu' >
        <div className='itembarraDeDirecionamento' onClick={() => document.getElementById('lanches').scrollIntoView({ behavior: 'smooth' })}>
          <GiHamburger />
          <label>Lanches</label>
        </div>
        <div className='itembarraDeDirecionamento' onClick={() => document.getElementById('pizzas').scrollIntoView({ behavior: 'smooth' })}>
          <GiFullPizza />
          <label>Pizzas</label>
        </div>
        <div className='itembarraDeDirecionamento' onClick={() => document.getElementById('pasteis').scrollIntoView({ behavior: 'smooth' })}>
          <label>Pasteis</label>
        </div>
        <div className='itembarraDeDirecionamento' onClick={() => document.getElementById('porcoes').scrollIntoView({ behavior: 'smooth' })}>
          <GiFrenchFries />
          <label>Porções</label>
        </div>
        <div className='itembarraDeDirecionamento' onClick={() => document.getElementById('bebidas').scrollIntoView({ behavior: 'smooth' })}>
          <GiWineBottle />
          <label>Bebidas</label>
        </div>
      </div>
    </div>
  );
}