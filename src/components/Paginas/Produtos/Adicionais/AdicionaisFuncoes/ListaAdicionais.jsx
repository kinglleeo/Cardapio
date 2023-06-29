import { React, useState, useEffect } from 'react'
import '../../../../../Styles/StyleForAdicionais.css'
import { formCurrency } from '../../../../AA-utilidades/numeros';
import Decimal from 'decimal.js';

export default function ListaAdicionais({ itemGrupoAdd, quantidadeTotalGrupos, Maximo, listaAdicionais, setListaAdicionais }){
  const [faltam, setFaltam] = useState('')
  const [selectedRadioIndex, setSelectedRadioIndex] = useState(null);
  const [selectedAdicionalIndex, setSelectedAdicionalIndex] = useState(null);
  
  useEffect(()=>{ 
    let faltam = Maximo;
    const total = faltam - quantidadeTotalGrupos[itemGrupoAdd.ID_GRUPO_OPCOES];
      setFaltam(total)
  }, [Maximo, quantidadeTotalGrupos])

  const aumentarQuantidade = (index) => {
    const updatedListaOpcionais = [...listaAdicionais];
    const quantidade = new Decimal(updatedListaOpcionais[index].quantidade);
    updatedListaOpcionais[index].quantidade = quantidade.plus(1).toNumber();
        setListaAdicionais(updatedListaOpcionais);
  };

  const diminuirQuantidade = (index) => {
    const updatedListaOpcionais = [...listaAdicionais];
    const quantidade = new Decimal(updatedListaOpcionais[index].quantidade);
    if (quantidade.gt(0)) {
    updatedListaOpcionais[index].quantidade = quantidade.minus(1).toNumber();
        setListaAdicionais(updatedListaOpcionais);
    }
  };
  
  const selecionarAdicional = (index) => { 
    const updatedListaOpcionais = [...listaAdicionais];
    const quantidade = new Decimal(updatedListaOpcionais[index].quantidade);
    if (quantidade.gt(0)) {
      updatedListaOpcionais[index].quantidade = quantidade.minus(1).toNumber();
    } else {
      updatedListaOpcionais[index].quantidade = quantidade.plus(1).toNumber();
    }
    setListaAdicionais(updatedListaOpcionais);
  };


  const selecionarAdicionalRadio = (index) => {
    if (selectedAdicionalIndex === index) {
      return;
    }
    const updatedListaOpcionais = listaAdicionais.map((item, i) => {
      if (i === index) {
        return { ...item, quantidade: item.quantidade + 1 };
      } else {
        return { ...item, quantidade: 0 };
      }
    });
    setSelectedAdicionalIndex(index);
    setListaAdicionais(updatedListaOpcionais);
    setSelectedRadioIndex(index);
  };

  return(
        <div>
            <div className='AdicionaisList'>
              {Array.isArray(listaAdicionais)
                ? listaAdicionais.map((item, index) => (
                    <div>
                      {itemGrupoAdd.PERMITIR_ITEM_REPETIDO === "SIM" 
                        ? (
                          <div className='Card-Adicionais' key={item.ID}>
                            <div className='box-descricao-adicional'>
                              <div className='adicional-nome'> {item.DESCRICAO} </div>
                            </div>
                            <div className='box-valor-adicional'>
                              <div className='adicional-valor'> {formCurrency.format(item.VALOR_VENDA)} </div>
                            </div>
                            <div className='box-funcao-adicional'>
                              <div className='Card-Adicionais-Botoes'>
                                <div className='btn-quantia-adicionais'>
                                  <button className='arrow iconeMinus' onClick={() => diminuirQuantidade(index)}></button>
                                </div>
                                  <div className='quantia-adicionais'>{item.quantidade}</div>
                                <div className='btn-quantia-adicionais'>
                                  <button className='arrow iconePlus'onClick={() => aumentarQuantidade(index)} disabled={faltam === 0}></button>
                                </div>
                              </div>
                            </div>
                          </div>
                              ) 
                              : itemGrupoAdd.PERMITIR_ITEM_REPETIDO === "NAO" === itemGrupoAdd.MAXIMO > 1 ?
                                (
                                  <div className={`Card-Adicionais ${item.quantidade === 1 ? 'mudarCorCard' : ''}`}
                                       key={item.ID}
                                       onClick={() => {
                                        if (faltam !== 0) {
                                          selecionarAdicional(index);
                                        } else if (item.quantidade === 1) {
                                          selecionarAdicional(index);
                                        }
                                        }}>
                                  <div className='box-descricao-adicional'>
                                    <div className='adicional-nome'> {item.DESCRICAO} </div>
                                  </div>
                                  <div className='box-valor-adicional'>
                                    <div className='adicional-valor'> {formCurrency.format(item.VALOR_VENDA)} </div>
                                  </div>
                                  <div className='box-funcao-adicional'>
                                    <input
                                      type="checkbox"
                                      disabled={faltam === 0 && item.quantidade !== 1}
                                      checked={item.quantidade === 1}
                                      onClick={() => selecionarAdicional(index)}
                                    />
                                      {item.quantidade === 1 
                                        ? (<div className='iconePrato-acesso'></div>)
                                        : (<div className='iconePrato-apagado'></div>) 
                                      }
                                  </div>
                                </div>
                                ) 
                              : itemGrupoAdd.MINIMO === 1 ? 
                                (
                                  <div
                                    className={`Card-Adicionais ${selectedRadioIndex === index ? 'mudarCorCard' : ''}`}
                                    key={item.ID}
                                    onClick={() => selecionarAdicionalRadio(index)}
                                  >
                                    <div className='box-descricao-adicional'>
                                      <div className='adicional-nome'>{item.DESCRICAO}</div>
                                    </div>
                                    <div className='box-valor-adicional'>
                                      <div className='adicional-valor'>{formCurrency.format(item.VALOR_VENDA)}</div>
                                    </div>
                                    <div className='box-funcao-adicional'>
                                      <input type='radio' name='radio' checked={selectedRadioIndex === index} onChange={() => {}} />
                                      {selectedRadioIndex === index 
                                        ? (<div className='iconePrato-acesso'></div>)
                                        : (<div className='iconePrato-apagado'></div>) 
                                      }
                                    </div>
                                  </div>
                                )
                              : null
                            }
                          </div>
                  ))
                : null}   
            </div>
        </div>
    )
}