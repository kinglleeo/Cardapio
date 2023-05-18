import { React, useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { api } from '../../../../conecções/api';
import './AdicionaisList.css';
import ListaProdutosAdicionais from './ListaProdutosAdicionais';
import { useQueryClient } from '@tanstack/react-query';

export default function GruposAdicionais() {
  const [gruposAdicionais, setGruposAdicionais] = useState([]);
  const [listaAdicionais, setListaAdicionais] = useState([]);
  const [listaAdicionaisAtivo, setListaAdicionaisAtivo] = useState(null);
  const { state } = useLocation();
  const { item } = state;
  let idProduto = item.ID_PRODUTO;
  const queryClient = useQueryClient();
  console.log(queryClient)

  const toggleListaAdicionais = (ID_GRUPO_OPCOES, idProduto) => {
        if (listaAdicionaisAtivo === ID_GRUPO_OPCOES) {
            setListaAdicionaisAtivo(null);
        } else {
            setListaAdicionaisAtivo(ID_GRUPO_OPCOES);
                selecionarListaProdutosAdicionais(ID_GRUPO_OPCOES, idProduto)
        }
    }   

    useEffect(()=>{
        api
            .get(`/listaGrupoOpcionais/${idProduto}`)
            .then((getdata)=>{
                setGruposAdicionais(getdata.data);
            });
    }, []);

    const selecionarListaProdutosAdicionais = (ID_GRUPO_OPCOES, idProduto) => {
        const cachedData = queryClient.getQueryData(['listaOpcionais', ID_GRUPO_OPCOES, idProduto]);
        if (cachedData) {
          setListaAdicionais(cachedData);
        } else {
          api.get(`/listaOpcionais/${ID_GRUPO_OPCOES}/${idProduto}`).then((getdata) => {
            const data = getdata.data.map((item) => ({
              ...item,
              quantidade: 0,
            }));
            setListaAdicionais(data);
            queryClient.setQueryData(['listaOpcionais', ID_GRUPO_OPCOES, idProduto], data);
          });
        }
      };
          


 
  return(
    <div>
        {Array.isArray(gruposAdicionais) ? (
            gruposAdicionais.map((item) => 
                <div key={item.ID_GRUPO_OPCOES}>
                    <div className='box-Adicionais'>
                        <div className='Adicionais'>
                            <div className='box-adicionais-descricao'>
                                <div className='Adicionais-titulo'> {item.DESCRICAO} </div>
                                    <div className='adicionais-quantidadeMax'> 
                                        <div>Até {item.MAXIMO} itens</div>
                                    </div>
                            </div>
                            <div className='Adicionais-icon' onClick={() => toggleListaAdicionais(item.ID_GRUPO_OPCOES, idProduto)}>
                                {listaAdicionaisAtivo === item.ID_GRUPO_OPCOES ? '-' : '+'}
                            </div>
                        </div>
                    </div>
                    <div>
                        {listaAdicionaisAtivo === item.ID_GRUPO_OPCOES && (
                            <ListaProdutosAdicionais
                                Maximo={item.MAXIMO}
                                listaAdicionais={listaAdicionais}
                                setListaAdicionais={setListaAdicionais}
                            />
                        )}
                    </div>
                </div>
        )) : null}
    </div>
)
}