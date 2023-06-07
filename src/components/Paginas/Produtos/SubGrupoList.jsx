import { React, useState, useEffect, useMemo } from 'react';
import '../../../Styles/Styles.css'
import { api } from '../../../conecções/api';
import ProdutoList from './ProdutosList';
import { useQuery, useQueryClient } from '@tanstack/react-query';

export default function SubGrupoList({ ID_GRUPO, grupoName, tipo }) {
  const [subGrupo, setSubGrupo] = useState([]);
  const [subGrupoAtivo, setSubGrupoAtivo] = useState(null);
  const [produtoCache, setProdutoCache] = useState({});
  const queryClient = useQueryClient();
 
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
      selecionarProdutos(idSubGrupo);
    }
  };

  const selecionarProdutos = (idSubGrupo) => {
    if (!produtoCache[idSubGrupo]) { 
      api
        .get(`/listaProdutos/${idSubGrupo}`)
        .then((getdata) => {
          setProdutoCache((prevProdutoCache) => ({
            ...prevProdutoCache,
            [idSubGrupo]: getdata.data,
        }));
      });
    }
  };

  const produtos = useMemo(() => produtoCache[subGrupoAtivo] || [], [produtoCache, subGrupoAtivo]);
  
  

  return (
    <div>
      {Array.isArray(subGrupo) ? (
        subGrupo.map((item) => 
          <div className='box-subgrupos' key={item.ID_SUBGRUPO} id={item.ID_SUBGRUPO}>
            <div className='subgrupos'>
              <div className='subgrupo-titulo'>{item.SUBGRUPO}</div>
              <div className='box-subgrupo-icon'>
                <div className='subgrupo-icon' onClick={() => toggleLista(item.ID_SUBGRUPO)}>
                  {subGrupoAtivo === item.ID_SUBGRUPO ? '-' : '+'}
                </div>
              </div>
            </div>
            <div className='listProdutos-subgrupos'>
              {subGrupoAtivo === item.ID_SUBGRUPO && (
                <div className='subgrupolist-produto'>
                  <ProdutoList 
                    produto={produtos} 
                    grupoName={grupoName}
                    subGrupoName={item.SUBGRUPO}
                    tipo={tipo}
                  />
                </div>
              )}
            </div>
          </div>
      )) : null}
    </div>
  );
}