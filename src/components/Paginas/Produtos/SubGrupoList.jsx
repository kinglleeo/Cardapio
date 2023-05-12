import { React, useState, useEffect, lazy } from 'react'
import { api } from '../../../conecções/api'
import './subGrupoList.css'
import ProdutoList from './ProdutosList';

export default function SubGrupoList({ ID_GRUPO }){
    const [subGrupo, setSubGrupo] = useState([]);
    const [subGrupoAtivo, setSubGrupoAtivo] = useState(null);
    const [produto, setProduto] = useState([]);
    
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
          selecionarProdutos(idSubGrupo)
        }
      };

    const selecionarProdutos=(idSubGrupo)=>{
        if(produto.includes(idSubGrupo)){
           
        } else {
            api
                .get(`/listaProdutos/${idSubGrupo}`)
                .then((getdata)=>{
                    setProduto(getdata.data);
        });
        }
    }

    return(
    <div>
        {Array.isArray(subGrupo) ? (
            subGrupo.map((item) => (
                <div className='box-subgrupos' key={item.ID_SUBGRUPO} id={item.ID_SUBGRUPO}>   
                    <div className='subgrupos'>
                        <div className='subgrupo-titulo'>{item.SUBGRUPO}</div>
                        <div className='subgrupo-icon' onClick={() => toggleLista(item.ID_SUBGRUPO)}> 
                            {subGrupoAtivo === item.ID_SUBGRUPO ? '-' : '+'}
                        </div>
                    </div>
                    <div className='listProdutos-subgrupos'>
                        {subGrupoAtivo === item.ID_SUBGRUPO && (
                                <div className="subgrupolist-produto">
                                    <ProdutoList
                                        produto={produto}
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