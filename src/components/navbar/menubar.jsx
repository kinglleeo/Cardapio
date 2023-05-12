import { useState, useEffect } from 'react';
import './menubar.css';
import { api } from '../../conecções/api';

export default function MenuBar({ setGrupoList }) {
  const [stickyClass, setStickyClass]= useState('barradenavegacao')
  const [grupos, setGrupos] = useState([]);
  const [subGrupoList, setSubGrupoList] = useState([]);
  const [subGrupoAtivo, setSubGrupoAtivo] = useState(null);
 
  useEffect(()=>{
    api
      .get('/listaGrupos')
      .then((getdata)=>{
        setGrupos(getdata.data);
        setGrupoList(getdata.data);
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

  const toggleLista = (idGrupo) => {
    if (subGrupoAtivo === idGrupo) {
      setSubGrupoAtivo(null); 
    } else {
      setSubGrupoAtivo(idGrupo);
      selecionarSubGrupos(idGrupo);
    }
  };
  const selecionarSubGrupos=(idGrupo)=>{
    api
      .get(`/listaSubGrupos/${idGrupo}`)
      .then((getdata)=>{
        setSubGrupoList(getdata.data);
      });
  }

  return (
    <div className={`${stickyClass}`}>
      <div className='barra-nav'>
        {Array.isArray(grupos)? (grupos.map((item)=>
          <div>
            <div className='nav-grupos'>
              <div className='nav-item-grupo-name' onClick={() => document.getElementById(item.ID_GRUPO).scrollIntoView({ behavior: 'smooth' })}>{item.GRUPO}</div>
              <div className='nav-item-icon' onClick={() => toggleLista(item.ID_GRUPO)}>
                {subGrupoAtivo === item.ID_GRUPO ? '-' : '+'}
              </div>
            </div>
            <div>
            {subGrupoAtivo === item.ID_GRUPO && (
              <div className='nav-subgrupos'>
                {Array.isArray(subGrupoList) ? subGrupoList.map((item)=>
                  <div className='subgrupo-name' onClick={() => document.getElementById(item.ID_SUBGRUPO).scrollIntoView({ behavior: 'smooth' })}>{item.SUBGRUPO}</div>
                ) : null}
              </div>
            )}
          </div>
          </div>
        )) :null}  
      </div>
    </div>
    )
}