import { React, useState, useEffect } from 'react'
import { api } from '../../../conecções/api'
import './subGrupoList.css'
import ProdutoList from './ProdutosList';


export default function SubGrupoList({ ID_GRUPO }){
    const [subGrupo, setSubGrupo] = useState([]);

    useEffect(()=>{
        api
            .get(`./listaSubGrupo${ID_GRUPO}`)
            .then((getdata)=>{
                setSubGrupo((getdata.data));
            });
    }, []);

    return(
        <div>
            {subGrupo.map((item)=>
                <div className='subgrupo'>
                    <div className='subgrupo-titulo'></div>
                    <div>
                        <ProdutoList
                            ID_SUBGRUPO={item.ID_SUBGRUPO}
                        />
                    </div>
                </div>
            )}
        </div>
    )
}