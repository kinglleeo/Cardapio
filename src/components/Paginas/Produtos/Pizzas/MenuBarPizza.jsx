import React from 'react'
import './menubarpizza.css'

export default function MenuBar(){


    //fixar barra de navegação
  window.addEventListener('scroll', function() {
    var navbar = document.querySelector('.navbar');
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (scrollTop > 50) {
      navbar.classList.add('fixed-top');
    } else {
      navbar.classList.remove('fixed-top');
    }
  });

  return(
    <div>
                <div className='navbar'>
                    <div className='itembarraDeDirecionamento' onClick={() => document.getElementById('').scrollIntoView({ behavior: 'smooth' })}>
                        
                        <label>Salgadas</label>
                    </div>
                    <div className='itembarraDeDirecionamento' onClick={() => document.getElementById('').scrollIntoView({ behavior: 'smooth' })}>
                        
                        <label>Doces</label>
                    </div> 
                    <div className='itembarraDeDirecionamento' onClick={() => document.getElementById('').scrollIntoView({ behavior: 'smooth' })}>
                        
                        <label>Especiais</label>
                    </div>
                    <div className='itembarraDeDirecionamento' onClick={() => document.getElementById('').scrollIntoView({ behavior: 'smooth' })}>
                        <label>Nobres</label>
                    </div>
                    <div className='itembarraDeDirecionamento' onClick={() => document.getElementById('').scrollIntoView({ behavior: 'smooth' })}>
                        
                        <label>Tradicionais</label>
                    </div>
                                   
                </div>
            </div>
  )
}