import { React, useState, useEffect } from 'react'
import '../../../../Styles/StyleForAdicionais.css'
import { formCurrency } from '../../../AA-utilidades/numeros';
import Decimal from 'decimal.js';
import AdicionaisPorQuantidade from './AdicionaisPorQuantidade'
import AdicionaisPorCheckbox from './AdicionaisPorCheckbox'
import AdicionaisPorRadio from './AdicionaisPorRadio'

export default function ListaAdicionais({ itemGrupoAdd, quantidadeTotalGrupos, Maximo, listaAdicionais, setListaAdicionais }){
  const [faltam, setFaltam] = useState('')
  
  useEffect(()=>{ 
    let faltam = Maximo;
    const total = faltam - quantidadeTotalGrupos[itemGrupoAdd.ID_GRUPO_OPCOES];
      setFaltam(total)
  }, [Maximo, quantidadeTotalGrupos])

  return(
        <div>
            <div className='AdicionaisList'>
              {Array.isArray(listaAdicionais)
                ? listaAdicionais.map((item, index) => (
                    <div className='Card-Adicionais' key={item.ID}>
                          <div className='box-descricao-adicional'>
                            <div className='adicional-nome'>{item.DESCRICAO}</div>
                          </div>
                          <div className='box-valor-adicional'>
                            <div className='adicional-valor'>{formCurrency.format(item.VALOR_VENDA)}</div>
                          </div>
                          <div className='box-funcao-adicional'>
                            {itemGrupoAdd.PERMITIR_ITEM_REPETIDO === "SIM" 
                              ? (
                                <AdicionaisPorQuantidade
                                  listaAdicionais={listaAdicionais}
                                  setListaAdicionais={setListaAdicionais}
                                  item={item}
                                  index={index}
                                  faltam={faltam}
                                />
                              ) 
                              : itemGrupoAdd.PERMITIR_ITEM_REPETIDO === "NAO" === itemGrupoAdd.MAXIMO > 1 ?
                                (
                                  <AdicionaisPorCheckbox
                                    listaAdicionais={listaAdicionais}
                                    setListaAdicionais={setListaAdicionais}
                                    item={item}
                                    index={index}
                                    faltam={faltam} 
                                  />
                                ) 
                              : itemGrupoAdd.MINIMO === 1 ? 
                                (
                                  <AdicionaisPorRadio
                                    listaAdicionais={listaAdicionais}
                                    setListaAdicionais={setListaAdicionais}
                                    index={index}
                                  />
                                )
                              : null
                            }
                          </div>
                      </div>
                  ))
                : null}   
            </div>
        </div>
    )
}