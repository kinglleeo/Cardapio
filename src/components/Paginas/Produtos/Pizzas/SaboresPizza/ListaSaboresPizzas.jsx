import { React, useEffect, useState } from 'react'
import { formCurrency } from '../../../../AA-utilidades/numeros';
import '../adiccionaisPizza/pizzas.css'
import Decimal from 'decimal.js';
import { useQueryClient } from '@tanstack/react-query';


export default function ListaProdutosAdicionais({ listaSaboresPizzas, setListaSaboresPizzas }) {
  const queryClient = useQueryClient();
  const [quantidadeTotal, setQuantidadeTotal] = useState(0);
  const [saboresSelecionados, setSaboresSelecionados] = useState([]);

  
  useEffect(()=>{
    const queryCache = queryClient.getQueryCache();
    const cachedQueries = queryCache.findAll('listaSaboresPizzas');
    const filtro = cachedQueries.map((query)=>{
      const data = query.state.data;
      return data;
    })
    const esse = filtro.map((item)=>{
      return item
    })   
  });

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
  
  
  return(
        <div>
          <div className='pizza-List-Main'>
            {Array.isArray(listaSaboresPizzas) ? (
                listaSaboresPizzas.map((itemSabor, index)=>
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
                                                    
                                                ></button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )) : null}
            </div>   
        </div>
    )
}