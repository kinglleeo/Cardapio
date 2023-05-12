import { useState, useEffect } from 'react';
import './menubar.css';
import { api } from '../../conecções/api';

export default function MenuBar({ setGrupoList }) {
  const [stickyClass, setStickyClass]= useState('barradenavegacao')
  const [grupos, setGrupos] = useState([]);
  
  useEffect(()=>{
    api
      .get('/listaGrupos')
      .then((getdata)=>{
        setGrupos(getdata.data);
        setGrupoList(getdata.data)
      });
  }, []);

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
      {Array.isArray(grupos)? (grupos.map((item)=>
        <div className='barra-nav-items' key={item.ID_GRUPO} onClick={() => document.getElementById(item.ID_GRUPO).scrollIntoView({ behavior: 'smooth' })}>{item.GRUPO}</div>
      )) :null}  
    </div>
  );
}