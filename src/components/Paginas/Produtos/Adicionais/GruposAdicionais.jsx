import { React, useState, useEffect } from 'react';
import { api } from '../../../../conecções/api';
import { useLocation } from 'react-router-dom';
import { useMutation } from '@tanstack/react-query';
import './AdicionaisList.css';
import ListaProdutosAdicionais from './ListaProdutosAdicionais';
import { useQueryClient } from '@tanstack/react-query';

export default function GruposAdicionais({ setIdGrupoOpcoes }) {
  const [gruposAdicionais, setGruposAdicionais] = useState([]);
  const [listasAdicionais, setListaAdicionais] = useState([]);
  const [listaAdicionaisAtivo, setListaAdicionaisAtivo] = useState(null);
  const { state } = useLocation();
  const { item } = state;
  let idProduto = item.ID_PRODUTO;

  useEffect(()=>{
    const cacheGrupos = queryClient.getQueryData(['listaGrupoOpcionais', idProduto]);
        if (cacheGrupos) {
            setGruposAdicionais(cacheGrupos);
        } else {
            api
                .get(`/listaGrupoOpcionais/${idProduto}`)
                .then((getdata) => {
            const data = getdata.data.map((item) => ({
                ...item,
                totalDaLista: 0,
        }));
            setGruposAdicionais(data);
                queryClient.setQueryData(['listaGrupoOpcionais', idProduto], data);
        });
        }
    }, []);
   

   const toggleListaAdicionais = (ID_GRUPO_OPCOES, idProduto) => {
        if (listaAdicionaisAtivo === ID_GRUPO_OPCOES) {
            setListaAdicionaisAtivo(null);
        } else {
            setListaAdicionaisAtivo(ID_GRUPO_OPCOES);
                selecionarListaProdutosAdicionais(ID_GRUPO_OPCOES, idProduto)
        }
    }   
       
    const selecionarListaProdutosAdicionais = (ID_GRUPO_OPCOES, idProduto) => {
        const cachedData = queryClient.getQueryData(['listaOpcionais', ID_GRUPO_OPCOES, idProduto]);
            if (cachedData) {
                setListaAdicionais(cachedData);
                setIdGrupoOpcoes(ID_GRUPO_OPCOES);
            } else {
                api.get(`/listaOpcionais/${ID_GRUPO_OPCOES}/${idProduto}`).then((getdata) => {
                const data = getdata.data.map((item) => ({
                    ...item,
                    quantidade: 0,
            }));
                setListaAdicionais(data);
                setIdGrupoOpcoes(ID_GRUPO_OPCOES);
                    queryClient.setQueryData(['listaOpcionais', ID_GRUPO_OPCOES, idProduto], data);
            updateQuantitiesMutation.mutate({ ID_GRUPO_OPCOES, idProduto, listaAdicionais: data });
        });
        }
    };
    
    const queryClient = useQueryClient();
        const updateQuantitiesMutation = useMutation((data) =>
          queryClient.setQueryData(['listaOpcionais', data.ID_GRUPO_OPCOES, data.idProduto], data.listaAdicionais)
        );

    
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
                                listasAdicionais={listasAdicionais}
                                setListaAdicionais={setListaAdicionais}
                                idGrupoOpcoes={item.ID_GRUPO_OPCOES}
                          />
                        )}
                    </div>
                </div>
        )) : null}
    </div>
)
}