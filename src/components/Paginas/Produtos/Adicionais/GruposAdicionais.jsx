import { React, useState, useEffect } from 'react';
import { api } from '../../../../conecções/api';
import { useLocation } from 'react-router-dom';
import './AdicionaisList.css';
import ListaProdutosAdicionais from './ListaProdutosAdicionais';
import { useQueryClient } from '@tanstack/react-query';


export default function GruposAdicionais({ setIdGrupoOpcoes }) {
  const [listaGrupoOpcionais, setGruposAdicionais] = useState([]);
  const [listaOpcionais, setListaOpcionais] = useState([]);
  const [listaAdicionaisAtivo, setListaAdicionaisAtivo] = useState(null);
  const { state } = useLocation();
  const { item } = state;
  let idProduto = item.ID_PRODUTO;
  const queryClient = useQueryClient();
    console.log(listaOpcionais)

    useEffect(() => {
        api.get(`/listaGrupoOpcionais/${idProduto}`).then((getdata) => {
          const grupos = getdata.data.map((grupo) => ({
            ...grupo,
            totalGrupo: 0,
          }));
          setGruposAdicionais(grupos);
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
                    }))
                    setListaOpcionais(data);
                    queryClient.setQueryData(['listaOpcionais', ID_GRUPO_OPCOES, idProduto], data);
                })
        }
      };
      
    


return(
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
    </div>
)
}