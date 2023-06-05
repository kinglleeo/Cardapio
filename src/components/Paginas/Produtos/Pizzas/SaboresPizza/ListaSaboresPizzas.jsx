import { React, useEffect, useState } from 'react'
import { formCurrency } from '../../../../AA-utilidades/numeros';
import './pizzas.css'
import Decimal from 'decimal.js';
import { useQueryClient } from '@tanstack/react-query';
import './cssParaPizzas.css'


export default function ListaProdutosAdicionais({ listaSaboresPizzas, setListaSaboresPizzas, Min, Max }) {
  const queryClient = useQueryClient();
  const [quantidadeTotal, setQuantidadeTotal] = useState(0);
  const [selecionados, setSelecionados] = useState([]);
  const [listaSalgadasAtiva, setListaSalgadasAtiva] = useState(null);
  const [listaDocesAtiva, setListaDocesAtiva] = useState(null);
  const Idsalgadas = '1'
  const IdDoces = '2'
  const [valorTotal, setValorTotal] = useState('');


  const AbrirListaSalgadas = (Idsalgadas) => {
    if (listaSalgadasAtiva === Idsalgadas) {
        setListaSalgadasAtiva(null);
    } else {
        setListaSalgadasAtiva(Idsalgadas);
        //selecionarListaSabores(Idsalgadas)
    }
  }  
  const AbrirListaDoces = (IdDoces) => {
    if (listaDocesAtiva === IdDoces) {
        setListaDocesAtiva(null);
    } else {
        setListaDocesAtiva(IdDoces);
        //selecionarListaSabores(IdDoces)
    }
  } 

  const aumentarQuantidade = (index) => {
    const updatedListaOpcionais = [...listaSaboresPizzas];
    const quantidade = new Decimal(updatedListaOpcionais[index].quantidade);
    updatedListaOpcionais[index].quantidade = quantidade.plus(1).toNumber();
      setListaSaboresPizzas(updatedListaOpcionais);
  };

  const diminuirQuantidade = (index) => {
    const updatedListaOpcionais = [...listaSaboresPizzas];
    const quantidade = new Decimal(updatedListaOpcionais[index].quantidade);
    if (quantidade.gt(0)) {
      updatedListaOpcionais[index].quantidade = quantidade.minus(1).toNumber();
      setListaSaboresPizzas(updatedListaOpcionais);
    }
  }

  useEffect(() => {
    listaSaboresPizzas.forEach((item) => {
      if (item.quantidade > 0) {
        const itemIndex = selecionados.findIndex((selecionado) => selecionado.ID_GRADE === item.ID_GRADE);
        if (itemIndex === -1) {
          setSelecionados((prevSelecionados) => [...prevSelecionados, { ...item }]);
        } else {
          setSelecionados((prevSelecionados) => {
            const updatedSelecionados = [...prevSelecionados];
            if (updatedSelecionados[itemIndex]) {
              updatedSelecionados[itemIndex].quantidade = item.quantidade;
            }
            return updatedSelecionados;
          });
        }
      } else {
        setSelecionados((prevSelecionados) => prevSelecionados.filter((selecionado) => selecionado.ID_GRADE !== item.ID_GRADE));
      }
    });
  }, [listaSaboresPizzas]);
  
  useEffect(() => {
    const totalQuantity = selecionados.reduce((accumulator, item) => accumulator + item.quantidade, 0);
      setQuantidadeTotal(totalQuantity)
  }, [selecionados]);

  const NumeroSelecionados =()=>{
    const NumeroSelecionados = quantidadeTotal
    return NumeroSelecionados
  }
  const Faltam =()=>{
    const Faltam = Max - quantidadeTotal
    return Faltam
  }

  useEffect(() => {
    const totalItem = selecionados.reduce((acc, item) => {
      const multipliedValue = new Decimal(item.VALOR_VENDA).times(item.quantidade);
      const dividedValue = multipliedValue.dividedBy(quantidadeTotal);
      return acc.plus(dividedValue);
    }, new Decimal(0));
      setValorTotal(totalItem.toNumber().toFixed(2));
  }, [selecionados, quantidadeTotal]);
  
  
  return(
        <div>
          <div>
            {formCurrency.format(valorTotal)}
          </div>
          <div>
              <div className='titulo-SaboresPizza'> Sabores </div>
          </div>
          <div className='Sabores-Quantidades'>
            <div className='QTD'> Minimo {Min} Sabor </div>
            <div className='QTD'> Até {Max} Sabores </div>
            <div className='QTD'> Selecionados {NumeroSelecionados()} </div>
            <div className='QTD'> Faltam {Faltam()} </div>
          </div>
          <div>
              <div className='grupo-Sabores'> 
                <div className='text-Sabores'> Salgadas </div>
                <div className='icon-Sabores' onClick={() => AbrirListaSalgadas(Idsalgadas)}>
                  {listaSalgadasAtiva === Idsalgadas ? '-' : '+'}
                </div>
              </div>
              <div className='pizza-List-Main'>
                  {Array.isArray(listaSaboresPizzas) ? (
                    listaSaboresPizzas.map((itemSabor, index) => {
                      if (listaSalgadasAtiva === Idsalgadas && itemSabor.SUBGRUPOS === "PIZZA SALGADA") {
                        return (
                          <div className='pizza-List' key={itemSabor.ID_GRADE}>
                            <div className='pizza-Card'>
                                    <div className='pizza-card-interno'>
                                        <div className='pizza-info'>
                                            <div className='pizza-nome'>
                                                <div className='pizza-nome-titulo'> Pizza Sabor </div>
                                                    <div className='pizza-nome-sabor'> {itemSabor.PRODUTO} </div>
                                            </div>
                                            <div className='pizza-valor'>
                                                <div> Valor {formCurrency.format(itemSabor.VALOR_VENDA)} </div>
                                            </div>
                                        </div>
                                        <div className='pizza-input'>   
                                            <div>
                                                <div className='Card-Adicionais-Botoes'>
                                                    <div className='btn-quantia-adicionais'>
                                                        <button className='arrow left' onClick={() => diminuirQuantidade(index, itemSabor)}></button>
                                                    </div>
                                                    <div className='quantia-adicionais'>{itemSabor.quantidade}</div>
                                                    <div className='btn-quantia-adicionais'>
                                                        <button className='arrow right'onClick={() => aumentarQuantidade(index, itemSabor)}
                                                            disabled={quantidadeTotal === Max}
                                                        ></button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                          </div>
                        );
                      }
                      return null;
                    })
                  ) : null}
          </div>
          </div>
          <div>
            <div className='grupo-Sabores'> 
              <div className='text-Sabores'> Doces </div>
              <div className='icon-Sabores' onClick={() => AbrirListaDoces(IdDoces)}>
                  {listaDocesAtiva === IdDoces ? '-' : '+'}
              </div>
            </div>
            <div className='pizza-List-Main'>
              {Array.isArray(listaSaboresPizzas) ? (
                listaSaboresPizzas.map((itemSabor, index) => {
                  if (listaDocesAtiva === IdDoces && itemSabor.SUBGRUPOS === "PIZZA DOCE") {
                    return (
                      <div className='pizza-List' key={itemSabor.ID_GRADE}>
                        <div className='pizza-Card'>
                                <div className='pizza-card-interno'>
                                    <div className='pizza-info'>
                                        <div className='pizza-nome'>
                                            <div className='pizza-nome-titulo'> Pizza Sabor </div>
                                                <div className='pizza-nome-sabor'> {itemSabor.PRODUTO} </div>
                                        </div>
                                        <div className='pizza-valor'>
                                            <div> Valor {formCurrency.format(itemSabor.VALOR_VENDA)} </div>
                                        </div>
                                    </div>
                                    <div className='pizza-input'>   
                                        <div>
                                            <div className='Card-Adicionais-Botoes'>
                                                <div className='btn-quantia-adicionais'>
                                                    <button className='arrow left' onClick={() => diminuirQuantidade(index, itemSabor)}></button>
                                                </div>
                                                <div className='quantia-adicionais'>{itemSabor.quantidade}</div>
                                                <div className='btn-quantia-adicionais'>
                                                    <button className='arrow right'onClick={() => aumentarQuantidade(index, itemSabor)}
                                                        disabled={quantidadeTotal === Max}
                                                    ></button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                      </div>
                    );
                  }
                  return null;
                })
              ) : null}
          </div>
          </div>          
        </div>
    )
}