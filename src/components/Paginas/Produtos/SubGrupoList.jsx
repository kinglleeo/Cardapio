import { React, useState, useEffect} from 'react';
import '../../../Styles/Styles.css'
import { api } from '../../../conecções/api';
import ProdutoList from './ProdutosList';

export default function SubGrupoList({ ID_GRUPO }) {
  const [subGrupo, setSubGrupo] = useState([]);
  const [subGrupoAtivo, setSubGrupoAtivo] = useState(null);
  const [produto, setProduto] = useState({});
  
  useEffect(() => {
    api.get(`/listaSubGrupos/${ID_GRUPO}`)
      .then((getdata) => {
        if (Array.isArray(getdata.data)) {
          const sortedData = getdata.data.sort((a, b) => a.numeration - b.numeration);
          setSubGrupo(sortedData);
        }
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
    if (!produto[idSubGrupo]) { 
      api
        .get(`/listaProdutos/${idSubGrupo}`)
        .then((getdata) => {
          setProduto((prevProduto) => ({
            ...prevProduto,
            [idSubGrupo]: getdata.data,
        }));
      });
    }
  };

  return (
    <div>
      {subGrupo.map((item) => 
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
                  <ProdutoList produto={produto[item.ID_SUBGRUPO] || []} />
                </div>
              )}
            </div>
          </div>
      )}
    </div>
  );
}