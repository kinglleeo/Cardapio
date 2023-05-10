import { React, useState, useEffect } from 'react';
import { api } from '../../../conecções/api';
import './GrupoList.css'
import SubGrupoList from './SubGrupoList';

export default function Grupo(){
    const [grupoList, setGrupoList] = useState([]);
       

    useEffect(()=>{
        api 
            .get('/listaGrupos')
            .then((getdata)=>{
                setGrupoList(getdata.data);
            });
    }, [])


    return(
    <div>
        {grupoList.map((item)=>
            <div className='GrupoList' id={item.ID_GRUPO}>
                <div className='Grupo-Titulo'>{item.GRUPO}</div>
                <div>
                    <SubGrupoList
                        ID_GRUPO={item.ID_GRUPO}
                    />
                </div>
            </div>
        )}        
   </div>
)
}