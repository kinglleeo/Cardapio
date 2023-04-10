import React from 'react'
import { GiHamburger, GiFullPizza, GiWineBottle, GiFrenchFries } from 'react-icons/gi'
import './menubar.css'

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
    <div>
                <div className='navbar'>
                    <div className='itembarraDeDirecionamento' onClick={() => document.getElementById('lista1').scrollIntoView({ behavior: 'smooth' })}>
                        <GiHamburger/>
                        <label>Lanches</label>
                    </div>
                    <div className='itembarraDeDirecionamento' onClick={() => document.getElementById('lista2').scrollIntoView({ behavior: 'smooth' })}>
                        <GiFrenchFries/>
                        <label>Porções</label>
                    </div> 
                    <div className='itembarraDeDirecionamento' onClick={() => document.getElementById('lista4').scrollIntoView({ behavior: 'smooth' })}>
                        <label>Pasteis</label>
                    </div>
                    <div className='itembarraDeDirecionamento' onClick={() => document.getElementById('lista5').scrollIntoView({ behavior: 'smooth' })}>
                        <GiFullPizza/>
                        <label>Pizzas</label>
                    </div>
                    <div className='itembarraDeDirecionamento' onClick={() => document.getElementById('lista3').scrollIntoView({ behavior: 'smooth' })}>
                        <GiWineBottle/>
                        <label>Bebidas</label>
                    </div>
                                   
                </div>
            </div>
  )
}