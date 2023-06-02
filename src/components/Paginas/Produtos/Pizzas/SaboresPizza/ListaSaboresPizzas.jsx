import { React, useEffect, useState } from 'react'
import { formCurrency } from '../../../../AA-utilidades/numeros';
import '../adiccionaisPizza/pizzas.css'


export default function ListaProdutosAdicionais({ listaSaboresPizzas }) {
  const [quantidadeTotal, setQuantidadeTotal] = useState(0);
 

  const aumentarQuantidade = (index) => {
   
  };

  const diminuirQuantidade = (index) => {
    
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
                                                <button className='arrow left' onClick={() => diminuirQuantidade(index)}></button>
                                            </div>
                                            <div className='quantia-adicionais'>{itemSabor.quantidade}</div>
                                            <div className='btn-quantia-adicionais'>
                                                <button className='arrow right'onClick={() => aumentarQuantidade(index)}
                                                    
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