import { useState, useEffect } from 'react';
import { api } from '../../conecções/api';

export default function SubMenuBar(){
    const [subGruposList, setSubGruposList] = useState([]);

    const toggleLista = (idGrupo) => {
      if (subGrupoAtivo === idGrupo) {
        setSubGrupoAtivo(null); 
      } else {
        setSubGrupoAtivo(idGrupo);
      selecionarSubGrupos(idGrupo);
      }
    };
    
    const selecionarSubGrupos = (idGrupo) => {
        if (subGrupoAtivo === idGrupo) {
        setSubGrupoAtivo(null);
        } else {
        setSubGrupoAtivo(idGrupo);
            api
            .get(`/listaSubGrupos/${idGrupo}`)
            .then((getdata)=>{
                setSubGruposList(getdata.data);
            },[]);
        }
    };
 
    return(
        <div className='nav-subgrupos-box'>
            {Array.isArray(subGruposList) ? subGruposList.map((item)=>
                <div className='subgrupo-box' key={item.ID_SUBGRUPO} >
                    <div className='subgrupo-name' onClick={() => document.getElementById(item.ID_SUBGRUPO).scrollIntoView({ behavior: 'smooth' })}> {item.SUBGRUPO} </div>
                </div>
            ) : null}
        </div>
    )
}