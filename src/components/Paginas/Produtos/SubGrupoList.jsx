import { React, useState, useEffect, lazy } from 'react'
import { api } from '../../../conecções/api'
import './subGrupoList.css'
import ProdutoList from './ProdutosList';

export default function SubGrupoList({ ID_GRUPO }){
    const [subGrupo, setSubGrupo] = useState([]);
    const [subGrupoAtivo, setSubGrupoAtivo] = useState(null);
    

    useEffect(()=>{
        api
          .get(`/listaSubGrupos/${ID_GRUPO}`)
          .then((getdata)=>{
            setSubGrupo(getdata.data);
          });
    }, []);

    const toggleLista = (idSubGrupo) => {
        if (subGrupoAtivo === idSubGrupo) {
          setSubGrupoAtivo(null); 
        } else {
          setSubGrupoAtivo(idSubGrupo); 
        }
      };

    return(
    <div>
        {Array.isArray(subGrupo) ? (
            subGrupo.map((item) => (
                <div className='box-subgrupos' onClick={() => toggleLista(item.ID_SUBGRUPO)}>   
                    <div className='subgrupos'>
                        <div className='subgrupo-titulo'>{item.SUBGRUPO}</div>
                        <div className='subgrupo-icon'> 
                            {subGrupoAtivo === item.ID_SUBGRUPO ? '-' : '+'}
                        </div>
                    </div>
                    <div className='listProdutos-subgrupos'>
                        {subGrupoAtivo === item.ID_SUBGRUPO && (
                                <div className="subgrupolist-produto">
                                    <ProdutoList
                                        ID_SUBGRUPO={item.ID_SUBGRUPO}
                                    />
                                </div>
                            )}
                    </div>
                </div>
            ))
        ) : null}
    </div>
    )
}