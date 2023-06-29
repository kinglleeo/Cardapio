import { React, useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom';
import { api } from '../../../../../conecções/api';
import { useQueryClient } from '@tanstack/react-query';
import ListaAdicionais from './ListaAdicionais';
import Decimal from 'decimal.js'; 

export default function GrupoAdicionais({ setValorTotalItem, setValorTotalCusto, adicionalSelecionado, setAdicionalSelecionado,  setID_GRUPO_OPCOES }){
    const [listaGrupoOpcionais, setGruposAdicionais] = useState([]);
    const [listaAdicionais, setListaAdicionais] = useState([])
    const [listaAdicionaisAtivo, setListaAdicionaisAtivo] = useState(null);
    const [quantidadeTotalGrupos, setQuantidadeTotalGrupos] = useState({});

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
        setQuantidadeTotalGrupos((prevQuantidades) => ({
          ...prevQuantidades,
          [ID_GRUPO_OPCOES]: listaAdicionais.reduce(
            (accumulator, item) => (item.ID_GRUPO_OPCOES === ID_GRUPO_OPCOES ? accumulator + item.quantidade : accumulator),
            0
          ),
        }));
      } else {
        setListaAdicionaisAtivo(ID_GRUPO_OPCOES);
        selecionarListaOpcionais(ID_GRUPO_OPCOES);
      }
    };
    

    const selecionarListaOpcionais = (ID_GRUPO_OPCOES) => {
      const cachedData = queryClient.getQueryData(['listaAdicionais', ID_GRUPO_OPCOES]);
      if (cachedData) {
        setListaAdicionais(cachedData);
        setID_GRUPO_OPCOES(ID_GRUPO_OPCOES);
        setQuantidadeTotalGrupos((prevQuantidades) => ({
          ...prevQuantidades,
          [ID_GRUPO_OPCOES]: prevQuantidades[ID_GRUPO_OPCOES] || 0,
        }));
      } else {
        api.get(`/listaOpcionais/${ID_GRUPO_OPCOES}`).then((getdata) => {
          const data = getdata.data.map((item) => ({
            ...item,
            quantidade: 0,
          }));
          setListaAdicionais(data);
          queryClient.setQueryData(['listaAdicionais', ID_GRUPO_OPCOES], data);
          setID_GRUPO_OPCOES(ID_GRUPO_OPCOES);
          setQuantidadeTotalGrupos((prevQuantidades) => ({
            ...prevQuantidades,
            [ID_GRUPO_OPCOES]: prevQuantidades[ID_GRUPO_OPCOES] || 0,
          }));
        });
      }
    };
    
        
    useEffect(() => {
        listaAdicionais.forEach((item) => {
            if (item.quantidade > 0) {
              const itemIndex = adicionalSelecionado.findIndex((adicionalSelecionado) => adicionalSelecionado.ID === item.ID);
              if (itemIndex === -1) {
                setAdicionalSelecionado((prevSelecionados) => [...prevSelecionados, { ...item }]);
              } else {
                setAdicionalSelecionado((prevSelecionados) => {
                  const updatedSelecionados = [...prevSelecionados];
                  if (updatedSelecionados[itemIndex]) {
                    updatedSelecionados[itemIndex].quantidade = item.quantidade;
                  }
                  return updatedSelecionados;
                });
              }
            } else {
              setAdicionalSelecionado((prevSelecionados) => prevSelecionados.filter((adicionalSelecionado) => adicionalSelecionado.ID !== item.ID));
            }
          })
    }, [listaAdicionais]);

    
    
    useEffect(() => {
      let totalItem = new Decimal(0);
      let totalCusto = new Decimal(0);
    
      adicionalSelecionado.forEach((item) => {
        if (item.DIVIDIR === 'NAO') {
          totalItem = totalItem.plus(new Decimal(item.VALOR_VENDA).times(item.quantidade));
          totalCusto = totalCusto.plus(new Decimal(item.VALOR_CUSTO).times(item.quantidade));
        } else if (item.DIVIDIR === 'SIM') {
          totalItem = totalItem.plus(
            new Decimal(item.VALOR_VENDA).times(item.quantidade).dividedBy(quantidadeTotalGrupos[item.ID_GRUPO_OPCOES])
          );
          totalCusto = totalCusto.plus(
            new Decimal(item.VALOR_CUSTO).times(item.quantidade).dividedBy(quantidadeTotalGrupos[item.ID_GRUPO_OPCOES])
          );
        }
      });
    
      setValorTotalItem(totalItem.toNumber().toFixed(2));
      setValorTotalCusto(totalCusto.toNumber().toFixed(2));
    }, [adicionalSelecionado, quantidadeTotalGrupos]);
    
  
 
  useEffect(() => {
    if (Array.isArray(listaAdicionais)) {
      const total = listaAdicionais.reduce(
        (accumulator, item) =>
          item.ID_GRUPO_OPCOES === listaAdicionaisAtivo ? accumulator + item.quantidade : accumulator,
        0
      );
      setQuantidadeTotalGrupos((prevQuantidades) => ({
        ...prevQuantidades,
        [listaAdicionaisAtivo]: total,
      }));
    }
  }, [listaAdicionais, listaAdicionaisAtivo]);
  

  
    return(
    <div>
        <div>{Array.isArray(listaGrupoOpcionais) ? (
              <div className='Grupo-Titulo'> ADICIONAIS </div>
            ) : (
              <div></div>
            )}
          </div>
        <div>
            {Array.isArray(listaGrupoOpcionais) ? (
                listaGrupoOpcionais.map((itemGrupoAdd) => 
                  <div key={itemGrupoAdd.ID_GRUPO_OPCOES} >
                        <div className='box-adicionais' onClick={() => toggleListaAdicionais(itemGrupoAdd.ID_GRUPO_OPCOES)}>
                          <div className='adicionais-info'>
                            <div className='adicionais-titulo'> {itemGrupoAdd.DESCRICAO} </div>
                            <div className='informacoes-quantidade'>
                              {itemGrupoAdd.MINIMO > 0
                                ?(<div className='caixa-quantidades'>
                                    <div className='obrigatorio'> Obrigatório </div>
                                  </div>)
                                : ('')
                              }
                              <div className='caixa-quantidades'>
                                <div className='maximo'> Maximo: {itemGrupoAdd.MAXIMO} </div>
                              </div>
                              <div className='caixa-quantidades'>
                                <div className={quantidadeTotalGrupos[itemGrupoAdd.ID_GRUPO_OPCOES] === itemGrupoAdd.MAXIMO ? 'escolhido' : 'escolhido'} style={{backgroundColor: quantidadeTotalGrupos[itemGrupoAdd.ID_GRUPO_OPCOES] === itemGrupoAdd.MAXIMO ? '#4cb04c' : ''}}>
                                     Escolhidos: {quantidadeTotalGrupos[itemGrupoAdd.ID_GRUPO_OPCOES]}
                                </div>
                              </div>
                            </div>
                          </div>
                            <div className='icon-adicionais'>
                              <div 
                                className='box-iconAdd' 
                                onClick={() => toggleListaAdicionais(itemGrupoAdd.ID_GRUPO_OPCOES)}>
                                  {listaAdicionaisAtivo === itemGrupoAdd.ID_GRUPO_OPCOES 
                                    ? <div className='icone-setaUp'></div> 
                                    : <div className='icone-setaDown'></div>
                                  }
                              </div>
                            </div>
                        </div>
                        <div>
                          {listaAdicionaisAtivo === itemGrupoAdd.ID_GRUPO_OPCOES && (
                              <ListaAdicionais
                                  Maximo={itemGrupoAdd.MAXIMO}
                                  listaAdicionais={listaAdicionais}
                                  setListaAdicionais={setListaAdicionais}
                                  quantidadeTotalGrupos={quantidadeTotalGrupos} 
                                  listaGrupoOpcionais={listaGrupoOpcionais}
                                  itemGrupoAdd={itemGrupoAdd}
                              />
                          )} 
                        </div>
                  </div>
        )) : null}
                
    </div>
        </div>
    )
}