import { React, useEffect, useState } from 'react'
import { formCurrency } from '../../../../AA-utilidades/numeros';
import Decimal from 'decimal.js';
import '../../../../../Styles/Styles.css'
import '../../../../../Styles/StylePizzas.css'


export default function ListaSaboresPizza({ quantidadeTotal, setQuantidadeTotal, listaSaboresPizzas, setListaSaboresPizzas, Min, Max, setSaboresSelecionados, SaboresSelecionados }) {
  const [listaSalgadasAtiva, setListaSalgadasAtiva] = useState(null);
  const [listaDocesAtiva, setListaDocesAtiva] = useState(null);
  const Idsalgadas = '1'
  const IdDoces = '2'
  
  const AbrirListaSalgadas = (Idsalgadas) => {
    if (listaSalgadasAtiva === Idsalgadas) {
        setListaSalgadasAtiva(null);
    } else {
        setListaSalgadasAtiva(Idsalgadas);
    }
  }  
  const AbrirListaDoces = (IdDoces) => {
    if (listaDocesAtiva === IdDoces) {
        setListaDocesAtiva(null);
    } else {
        setListaDocesAtiva(IdDoces);
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
        const itemIndex = SaboresSelecionados.findIndex((SaboresSelecionados) => SaboresSelecionados.ID_GRADE === item.ID_GRADE);
        if (itemIndex === -1) {
          setSaboresSelecionados((prevSelecionados) => [...prevSelecionados, { ...item }]);
        } else {
          setSaboresSelecionados((prevSelecionados) => {
            const updatedSelecionados = [...prevSelecionados];
            if (updatedSelecionados[itemIndex]) {
              updatedSelecionados[itemIndex].quantidade = item.quantidade;
            }
            return updatedSelecionados;
          });
        }
      } else {
        setSaboresSelecionados((prevSelecionados) => prevSelecionados.filter((SaboresSelecionados) => SaboresSelecionados.ID_GRADE !== item.ID_GRADE));
      }
    });
  }, [listaSaboresPizzas]);
  
  useEffect(() => {
    const totalQuantity = SaboresSelecionados.reduce((accumulator, item) => accumulator + item.quantidade, 0);
      setQuantidadeTotal(totalQuantity)
  }, [SaboresSelecionados]);

  const NumeroSelecionados =()=>{
    const NumeroSelecionados = quantidadeTotal
    return NumeroSelecionados
  }
  const Faltam =()=>{
    const Faltam = Max - quantidadeTotal
    return Faltam
  }
  
  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

  return(
        <div>
          <div>
              <div className='titulo-SaboresPizza'> Sabores </div>
          </div>
          <div className='Sabores-Quantidades'> 
            <div className='QTD'> Minimo: {Min} </div>
            <div className='maximo'> Maximo: {Max} </div>
            <div className='escolhido'> Faltam: {Faltam()} </div>
          </div>
          <div>
              <div className='grupo-Sabores'> 
                <div className='text-Sabores' onClick={() => AbrirListaSalgadas(Idsalgadas)}> Salgadas </div>
                <div className='icon-Sabores' onClick={() => AbrirListaSalgadas(Idsalgadas)}>
                  {listaSalgadasAtiva === Idsalgadas 
                    ? <div className='box-iconAdd'> <div className='icone-setaUp'></div> </div> 
                    : <div className='box-iconAdd'> <div className='icone-setaDown'></div> </div>
                  }
                </div>
              </div>
              <div className='pizza-List-Main'>
                  {Array.isArray(listaSaboresPizzas) ? (
                    listaSaboresPizzas.map((itemSabor, index) => {
                      if (listaSalgadasAtiva === Idsalgadas && itemSabor.SUBGRUPOS === "PIZZA SALGADA") {
                        return (
                          <div className='pizza-List' key={itemSabor.ID_GRADE}>
                            <div className='pizza-Card'>
                                <div className='pizza-info'>
                                  <div className='pizzaSabor'> {capitalizeFirstLetter(itemSabor.PRODUTO.toLowerCase())} </div>
                                  <div className='pizza-caixa2'>
                                    <div className='pizzaFicha'> {itemSabor.FICHA_TECNICA !== null 
                                            ? <div> {itemSabor.FICHA_TECNICA.toLowerCase()} </div>
                                            : <div></div> 
                                          } 
                                    </div>
                                    <div className='pizza-valor'>
                                      <div> {formCurrency.format(itemSabor.VALOR_VENDA)} </div>
                                    </div>
                                  </div>
                                </div>
                                <div className='pizza-input'> 
                                  <div className='Card-Adicionais-Botoes'>
                                    <div className='btn-quantia-adicionais'>
                                      <button className='arrow iconeMinus' onClick={() => diminuirQuantidade(index, itemSabor)}></button>
                                    </div>
                                      <div className='quantia-adicionais'>{itemSabor.quantidade}</div>
                                    <div className='btn-quantia-adicionais'>
                                      <button className='arrow iconePlus'onClick={() => aumentarQuantidade(index, itemSabor)}
                                        disabled={quantidadeTotal === Max}
                                      ></button>
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
              <div className='text-Sabores' onClick={() => AbrirListaDoces(IdDoces)}> Doces </div>
              <div className='icon-Sabores' onClick={() => AbrirListaDoces(IdDoces)}>
                  {listaDocesAtiva === IdDoces 
                    ? <div className='box-iconAdd'> <div className='icone-setaUp'></div> </div>  
                    : <div className='box-iconAdd'> <div className='icone-setaDown'></div> </div>
                  }
              </div>
            </div>
            <div className='pizza-List-Main'>
              {Array.isArray(listaSaboresPizzas) ? (
                listaSaboresPizzas.map((itemSabor, index) => {
                  if (listaDocesAtiva === IdDoces && itemSabor.SUBGRUPOS === "PIZZA DOCE") {
                    return (
                      <div className='pizza-List' key={itemSabor.ID_GRADE}>
                        <div className='pizza-Card'>
                            <div className='pizza-info'>
                              <div className='pizzaSabor'> {itemSabor.PRODUTO.toLowerCase()} </div>
                              <div className='pizza-caixa2'>
                                <div className='pizzaFicha'> {itemSabor.FICHA_TECNICA !== null 
                                        ? <div> {itemSabor.FICHA_TECNICA.toLowerCase()} </div>
                                        : <div></div> 
                                      } 
                                </div>
                                <div className='pizza-valor'>
                                  <div> {formCurrency.format(itemSabor.VALOR_VENDA)} </div>
                                </div>
                              </div>
                            </div>
                            <div className='pizza-input'> 
                              <div className='Card-Adicionais-Botoes'>
                                <div className='btn-quantia-adicionais'>
                                  <button className='arrow iconeMinus' onClick={() => diminuirQuantidade(index, itemSabor)}></button>
                                </div>
                                  <div className='quantia-adicionais'>{itemSabor.quantidade}</div>
                                <div className='btn-quantia-adicionais'>
                                  <button className='arrow iconePlus'onClick={() => aumentarQuantidade(index, itemSabor)}
                                    disabled={quantidadeTotal === Max}
                                  ></button>
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