import { React, useState, useEffect } from 'react';
import { api } from '../../../../conecções/api';
import { useLocation } from 'react-router-dom';
import '../../../../Styles/StyleForAdicionais.css'
import ListaProdutosAdicionais from './ListaProdutosAdicionais';
import { useQueryClient } from '@tanstack/react-query';
import ObservacoesAdicionais from './ObservacoesAdicionais'
import { formCurrency } from '../../../AA-utilidades/numeros';
import AdicionaisTamanho from './AdicionaisTamanho'

export default function GruposAdicionais({ setTotalValue, setDescricao, setIdGrupo, setObservacao, setTamanhoEscolhido }) {
  const [listaGrupoOpcionais, setGruposAdicionais] = useState([]);
  const [listaOpcionais, setListaOpcionais] = useState([]);
  const [listaAdicionaisAtivo, setListaAdicionaisAtivo] = useState(null);
  const [grupoTamanho, setGrupoTamanho] = useState([]);
  const { state } = useLocation();
  const { data } = state;
  let idProduto = data.ID_PRODUTO;
  const queryClient = useQueryClient();
  
  console.log(grupoTamanho)
  useEffect(()=>{
    api
        .get(`/listaTamanhos/${idProduto}`)
        .then((getdata)=>{
            setGrupoTamanho(getdata.data);
        });
  }, []);

    useEffect(()=>{
        api
            .get(`/listaGrupoOpcionais/${idProduto}`)
            .then((getdata) =>{
                setGruposAdicionais(getdata.data);
                setIdGrupo(getdata.ID_GRUPO_OPCOES)
            });
    }, []);

   const toggleListaAdicionais = (ID_GRUPO_OPCOES, idProduto) => {
        if (listaAdicionaisAtivo === ID_GRUPO_OPCOES) {
            setListaAdicionaisAtivo(null);
        } else {
            setListaAdicionaisAtivo(ID_GRUPO_OPCOES);
            selecionarListaOpcionais(ID_GRUPO_OPCOES, idProduto)
        }
    }   
       
    
    const selecionarListaOpcionais = (ID_GRUPO_OPCOES, idProduto) => {
        const cachedData = queryClient.getQueryData(['listaOpcionais', ID_GRUPO_OPCOES, idProduto]);
        if(cachedData){
            setListaOpcionais(cachedData)
        } else {
            api
                .get(`/listaOpcionais/${ID_GRUPO_OPCOES}/${idProduto}`)
                .then((getdata)=>{
                    const data = getdata.data.map((item)=>({
                        ...item,
                        quantidade: 0,
                        valorTotalProduto: 0,
                    }))
                    setListaOpcionais(data);
                    queryClient.setQueryData(['listaOpcionais', ID_GRUPO_OPCOES, idProduto], data);
                })
        }
      };
      
    
      const queryCache = queryClient.getQueryCache();
      const cachedQueries = queryCache.findAll('listaOpcionais');
      const listaOpcionaisCache = cachedQueries.map((query) => {
          const data = query.state.data;
              return data;
      });
      useEffect(() => {
        let descricao = "";
        listaOpcionaisCache.forEach((listaOpcionais) => {
          listaOpcionais.forEach((item) => {
            if (item.quantidade > 0) {
              descricao += item.quantidade + " X " + item.DESCRICAO + " / ";
            }
          });
          setDescricao(descricao);
        });
      }, [listaOpcionaisCache]);

    useEffect(()=>{
        let total = 0;
            listaOpcionaisCache.forEach((listaOpcionais) => {
                listaOpcionais.forEach((item) => {
                    total += item.valorTotalProduto;
                });
            });
        setTotalValue(total);
    }, [listaOpcionaisCache]);
     

return(
    <div>
        <div>
            <AdicionaisTamanho
                grupoTamanho={grupoTamanho}
                setTamanhoEscolhido={setTamanhoEscolhido}
            />
        </div>
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
                            <div className='Adicionais-icon' onClick={() => toggleListaAdicionais(item.ID_GRUPO_OPCOES, idProduto)}>
                                {listaAdicionaisAtivo === item.ID_GRUPO_OPCOES ? '-' : '+'}
                            </div>
                        </div>
                    </div>
                    <div>
                        {listaAdicionaisAtivo === item.ID_GRUPO_OPCOES && (
                            <ListaProdutosAdicionais
                                Maximo={item.MAXIMO}
                                listaOpcionais={listaOpcionais}
                                setListaOpcionais={setListaOpcionais}
                          />
                        )}
                    </div>
                </div>
        )) : null}
                <div>
                    <ObservacoesAdicionais
                        setObservacao={setObservacao}
                    />
                </div>
    </div>
)
}