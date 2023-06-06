import { React, useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom';
import { api } from '../../../../conecções/api';
import { useQueryClient } from '@tanstack/react-query';
import ListaAdicionais from './ListaAdicionais';
import Decimal from 'decimal.js';

export default function GrupoAdicionais({ setAdicionalSelecionado, setTotalValue, setID_GRUPO_OPCOES }){
    const [listaGrupoOpcionais, setGruposAdicionais] = useState([]);
    const [listaAdicionais, setListaAdicionais] = useState([])
    const [listaAdicionaisAtivo, setListaAdicionaisAtivo] = useState(null);
    const { state } = useLocation();
    const { data } = state;
    const queryClient = useQueryClient();
    const ID_GRUPO_OPCOES= data.ID_GRUPO_OPCOES
    
    useEffect(()=>{
        api
            .get(`/listaGrupoOpcionais/${data.ID_PRODUTO}`)
            .then((getdata) =>{
                setGruposAdicionais(getdata.data);
            });
    }, []);

    const toggleListaAdicionais = (ID_GRUPO_OPCOES) => {
        if (listaAdicionaisAtivo === ID_GRUPO_OPCOES) {
            setListaAdicionaisAtivo(null);
        } else {
            setListaAdicionaisAtivo(ID_GRUPO_OPCOES);
            selecionarListaOpcionais(ID_GRUPO_OPCOES)
        }
    }   

    const selecionarListaOpcionais = (ID_GRUPO_OPCOES) => {
        const cachedData = queryClient.getQueryData(['listaAdicionais', ID_GRUPO_OPCOES]);
        if (cachedData) {
          setListaAdicionais(cachedData);
          setID_GRUPO_OPCOES(ID_GRUPO_OPCOES);
        } else {
          api
            .get(`/listaOpcionais/${ID_GRUPO_OPCOES}`)
            .then((getdata) => {
              const data = getdata.data.map((item) => ({
                ...item,
                quantidade: 0,
                valorTotalProduto: 0,
              }));
                setListaAdicionais(data);
                    queryClient.setQueryData(['listaAdicionais', ID_GRUPO_OPCOES], data);
                        setID_GRUPO_OPCOES(ID_GRUPO_OPCOES);
            });
        }
      };
      
        const queryCache = queryClient.getQueryCache();
        const listaAdicionaisCache = queryCache.findAll('listaAdicionais').map((query) => query.state.data);

      console.log(listaAdicionaisCache)
      
      useEffect(() => {
        listaAdicionaisCache.forEach((listaAdicionais) => {
          listaAdicionais.forEach((item) => {
            if (item.quantidade > 0) {
              setAdicionalSelecionado(item);
            }
          });
        });
      }, [listaAdicionaisCache]);

      useEffect(() => {
        let total = new Decimal(0);
        listaAdicionaisCache?.forEach((listaAdicionais) => {
          listaAdicionais.forEach((item) => {
            if (item.valorTotalProduto) {
              total = total.plus(item.valorTotalProduto);
            }
          });
        });
      
        setTotalValue(total.toNumber());
      }, [listaAdicionaisCache]);

    return(
    <div>
        <div>{Array.isArray(listaGrupoOpcionais) ? (
              <div className='Titulo-Adicionais'> ADICIONAIS </div>
            ) : (
              <div></div>
            )}
          </div>
        <div>
            {Array.isArray(listaGrupoOpcionais) ? (
                listaGrupoOpcionais.map((item) => 
                    <div key={item.ID_GRUPO_OPCOES}>
                        <div className='box-Adicionais'>
                            <div className='Adicionais'>
                                <div className='box-adicionais-descricao'>
                                    <div className='Adicionais-titulo'> {item.DESCRICAO} </div>
                                        <div className='adicionais-quantidadeMax'> 
                                            <div>Até {item.MAXIMO} itens</div>
                                        </div>
                                </div>
                            <div className='Adicionais-icon' onClick={() => toggleListaAdicionais(item.ID_GRUPO_OPCOES)}>
                                {listaAdicionaisAtivo === item.ID_GRUPO_OPCOES ? '-' : '+'}
                            </div>
                            </div>
                        </div>
                    <div>
                        {listaAdicionaisAtivo === item.ID_GRUPO_OPCOES && (
                            <ListaAdicionais
                                Maximo={item.MAXIMO}
                                listaAdicionais={listaAdicionais}
                                setListaAdicionais={setListaAdicionais}
                            />
                        )}
                    </div>
                </div>
        )) : null}
                
    </div>
        </div>
    )
}