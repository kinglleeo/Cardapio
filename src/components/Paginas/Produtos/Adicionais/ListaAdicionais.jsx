import { React, useState, useEffect } from 'react'
import '../../../../Styles/StyleForAdicionais.css'
import { formCurrency } from '../../../AA-utilidades/numeros';
import Decimal from 'decimal.js';
import AdicionaisPorQuantidade from './AdicionaisPorQuantidade'
import AdicionaisPorCheckbox from './AdicionaisPorCheckbox'
import AdicionaisPorRadio from './AdicionaisPorRadio'

export default function ListaAdicionais({ itemGrupoAdd, setQuantidadeTotal, quantidadeTotal, Maximo, listaAdicionais, setListaAdicionais, listaGrupoOpcionais }){
  const [faltam, setFaltam] = useState('')

  useEffect(()=>{
    let faltam = Maximo;
    const total = faltam - quantidadeTotal;
      setFaltam(total)
  }, [Maximo, quantidadeTotal])

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
                                  setQuantidadeTotal={setQuantidadeTotal}
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
                                    setQuantidadeTotal={setQuantidadeTotal}
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
                                    setQuantidadeTotal={setQuantidadeTotal}
                                    listaAdicionais={listaAdicionais}
                                    setListaAdicionais={setListaAdicionais}
                                    item={item}
                                    index={index}
                                    faltam={faltam}
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