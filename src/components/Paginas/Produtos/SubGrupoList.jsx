import React, { useState, useEffect, useMemo, useRef } from 'react';
import '../../../Styles/Styles.css';
import { api } from '../../../conecções/api';
import ProdutoList from './ProdutosList';
import { useQuery, useQueryClient } from '@tanstack/react-query';

export default function SubGrupoList({ grupo }) {
  const [subGrupo, setSubGrupo] = useState([]);
  const [subGrupoAtivo, setSubGrupoAtivo] = useState(null);
  const [produtoCache, setProdutoCache] = useState({});
  const queryClient = useQueryClient();
  const activeListRef = useRef(null);

  useEffect(() => {
    api.get(`/listaSubGrupos/${grupo.ID_GRUPO}`).then((getdata) => {
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
      api.get(`/listaProdutos/${idSubGrupo}`).then((getdata) => {
        setProdutoCache((prevProdutoCache) => ({
          ...prevProdutoCache,
          [idSubGrupo]: getdata.data,
        }));
  
        if (activeListRef.current) {
          const barraFixaHeight = 90; // Altura da barra fixa em pixels
          const scrollTop = activeListRef.current.getBoundingClientRect().top + window.pageYOffset - barraFixaHeight;
          window.scrollTo({ top: scrollTop, behavior: 'smooth' });
        }
      });
    }
  };

  const produtos = useMemo(() => produtoCache[subGrupoAtivo] || [], [
    produtoCache,
    subGrupoAtivo,
  ]);

  const isSubGrupoAtivo = (idSubGrupo) => subGrupoAtivo === idSubGrupo;

  return (
    <div>
      {Array.isArray(subGrupo) ? (
        subGrupo.map((item) => (
          <div
            className='box-subgrupos'
            key={item.ID_SUBGRUPO}
            id={item.ID_SUBGRUPO}
            ref={isSubGrupoAtivo(item.ID_SUBGRUPO) ? activeListRef : null}
          >
            <div className='subgrupos'>
              <div className='subgrupo-titulo'>{item.SUBGRUPO}</div>
              <div className='box-subgrupo-icon'>
                <div
                  className='subgrupo-icon'
                  onClick={() => toggleLista(item.ID_SUBGRUPO)}
                >
                  {isSubGrupoAtivo(item.ID_SUBGRUPO) ? (
                    <div className='icone-setaUp'></div>
                  ) : (
                    <div className='icone-setaDown'></div>
                  )}
                </div>
              </div>
            </div>
            {isSubGrupoAtivo(item.ID_SUBGRUPO) && (
              <div className='subgrupolist-produto'>
                <ProdutoList produto={produtos} grupo={grupo} subGrupo={item} />
              </div>
            )}
          </div>
        ))
      ) : (
        <div>No subgrupos found.</div>
      )}
    </div>
  );
}
