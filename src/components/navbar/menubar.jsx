import { useState, useEffect } from 'react';
import './menubar.css';
import SubMenuBar from './subMenuBar';

export default function MenuBar({ grupos }) {
  const [stickyClass, setStickyClass]= useState('barradenavegacao')

  useEffect(()=>{
    window.addEventListener('scroll', stickNavbar)
    return()=>{
      window.removeEventListener('scroll', stickNavbar) 
    }
  },[])

  const stickNavbar =()=>{
    if(window !== undefined){
      let windowHeight = window.scrollY 
      windowHeight > 350? setStickyClass('nav-top') : setStickyClass('barradenavegacao')
    }
  }

  return (
    <div className={`${stickyClass}`}>
      <div className='barra-nav'>
        {Array.isArray(grupos)? (grupos.map((item)=>
          <div className='nav-grupos' key={item.ID_GRUPO} onClick={() => document.getElementById(item.ID_GRUPO).scrollIntoView({ behavior: 'smooth' })}>
            <div className='nav-grupos-box'>
                <div className='name-grupo'>{item.GRUPO}</div>
            </div>
          </div>
        )) :null}  
      </div>
    </div>
    )
}