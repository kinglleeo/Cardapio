import { useState, useEffect } from 'react';
import './menubar.css';
import { api } from '../../conecções/api';

export default function MenuBar() {
  const [barradenavegacao, setStickyClass]= useState('barradenavegacao')
  const [grupos, setGrupos] = useState([]);
  console.log(grupos)

//  useEffect(()=>{
//    api
//      .get('/listaGrupos')
//      .then((getdata)=>{
//        setGrupos(getdata.data);
//      });
//  }, []);


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
    <div className={`${barradenavegacao}`}>
      {grupos.map((item)=>
        <div className='barra-nav-items' onClick={() => document.getElementById(item.ID_GRUPO).scrollIntoView({ behavior: 'smooth' })}>{item.GRUPO}</div>
      )}  
    </div>
  );
}