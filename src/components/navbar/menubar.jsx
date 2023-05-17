import { useState, useEffect } from 'react';
import './menubar.css';
import { api } from '../../conecções/api';
import SubMenuBar from './subMenuBar';

export default function MenuBar({ grupos }) {
  const [stickyClass, setStickyClass]= useState('barradenavegacao')
  const [subGrupoAtivo, setSubGrupoAtivo] = useState(null);

  useEffect(()=>{
    window.addEventListener('scroll', stickNavbar)
    return()=>{
      window.removeEventListener('scroll', stickNavbar)
    }
  },[])

  const stickNavbar =()=>{
    if(window !== undefined){
      let windowHeight = window.scrollY 
      windowHeight > 200? setStickyClass('nav-top') : setStickyClass('barradenavegacao')
    }
  }

  return (
    <div className={`${stickyClass}`}>
      <div className='barra-nav'>
        {Array.isArray(grupos)? (grupos.map((item)=>
          <div key={item.ID_GRUPO}>
            <div className='nav-grupos'>
              <div className='item-nav-grupo'>
                <div className='nav-item-grupo-name' onClick={() => document.getElementById(item.ID_GRUPO).scrollIntoView({ behavior: 'smooth' })}>{item.GRUPO}</div>
                <div className='nav-item-icon' onClick={() => toggleLista(item.ID_GRUPO)}>
                  {subGrupoAtivo === item.ID_GRUPO ? '-' : '+'}
                </div>
              </div>
            </div>

            <div className='nav-subgrupos'>
              {subGrupoAtivo === item.ID_GRUPO && (
                <SubMenuBar
                  
                />
              )}
          </div>
          </div>
        )) :null}  
      </div>
    </div>
    )
}