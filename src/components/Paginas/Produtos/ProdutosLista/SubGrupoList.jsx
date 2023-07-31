import React, { useState, useEffect, useMemo, useRef } from 'react';
import '../../../../Styles/Styles.css';
import { api } from '../../../../conecções/api';
import ProdutoList from './ProdutosList';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import ModalError from '../../../erros/ModalError'

export default function SubGrupoList({ grupo }) {
  const [subGrupo, setSubGrupo] = useState([]);
  const [subGrupoAtivo, setSubGrupoAtivo] = useState(null);
  const [produtoCache, setProdutoCache] = useState({});
  const [dados, setDados] = useState('');
  const [modalError, setModalError] = useState(false);
  const [error, setError] = useState('');
  const queryClient = useQueryClient();
  const activeListRef = useRef(null);
  const tipoComanda = dados.tipoComanda
  

  useEffect(() => {
    const dados = localStorage.getItem('dados')
            setDados(JSON.parse(dados))
        const tipoComanda = JSON.parse(dados)
        const comanda = tipoComanda.tipoComanda
    api
      .get(`/listaSubGrupos/${grupo.ID_GRUPO}/${comanda}`)
      .then((getdata) => {
        setSubGrupo(getdata.data);
      })
      .catch((error) => {
        setError("Erro no listaSubGrupos")
        setModalError(true)
      });
  }, []);

  useEffect(()=>{
    const dados = localStorage.getItem('dados')
         setDados(JSON.parse(dados))
  }, [])

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
        .get(`/listaProdutos/${idSubGrupo}/${tipoComanda}`)
        .then((getdata) => {
          setProdutoCache((prevProdutoCache) => ({
            ...prevProdutoCache,
            [idSubGrupo]: getdata.data,
          }));
        if (activeListRef.current) {
          const barraFixaHeight = 90; // Altura da barra fixa em pixels
          const scrollTop = activeListRef.current.getBoundingClientRect().top + window.pageYOffset - barraFixaHeight;
          window.scrollTo({ top: scrollTop, behavior: 'smooth' });
        }
      })
        .catch((error) => {
          setError("Erro no listaProdutos")
          setModalError(true)
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
            onClick={() => toggleLista(item.ID_SUBGRUPO)}
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
      {modalError && <ModalError setModalError={setModalError} error={error} />}
    </div>
    
  );
}
