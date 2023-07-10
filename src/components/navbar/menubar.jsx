import { useState, useEffect } from 'react';
import './menubar.css';
import SubMenuBar from './subMenuBar';

export default function MenuBar({ grupos }) {
  const [stickyClass, setStickyClass]= useState('barradenavegacao')
  const [selectedGroup, setSelectedGroup] = useState(null);


  useEffect(()=>{
    window.addEventListener('scroll', stickNavbar)
    return()=>{
      window.removeEventListener('scroll', stickNavbar) 
    }
  },[])

  const stickNavbar =()=>{
    if(window !== undefined){
      let windowHeight = window.scrollY 
      windowHeight > 220? setStickyClass('nav-top') : setStickyClass('barradenavegacao')
    }
  }

  const scrollToGroup = (groupID) => {
    const groupElement = document.getElementById(groupID);
    const yOffset = -90; 
    const y = groupElement.getBoundingClientRect().top + window.pageYOffset + yOffset;

    window.scrollTo({ top: y, behavior: 'smooth' });
  }

  return (
    <div className={`${stickyClass}`}>
    <div className='barra-nav'>
      {Array.isArray(grupos)? (grupos.map((item)=>
        <div className='nav-grupos' key={item.ID_GRUPO} onClick={() => scrollToGroup(item.ID_GRUPO)}>
          <div className='nav-grupos-box'>
            <div className='name-grupo'>{item.GRUPO}</div>
          </div>
        </div>
      )) :null}  
    </div>
  </div>
    )
}