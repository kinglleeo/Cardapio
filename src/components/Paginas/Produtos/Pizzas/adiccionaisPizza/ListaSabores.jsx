import { React, useEffect, useState } from 'react'
import '../../../../../Styles/StyleForAdicionais.css'
import { formCurrency } from '../../../../AA-utilidades/numeros';
import Decimal from 'decimal.js';
import { api } from '../../../../../conecções/api'
import { useLocation } from 'react-router-dom';

export default function ListaProdutosAdicionais({ setListaOpcionais }) {
  const [quantidadeTotal, setQuantidadeTotal] = useState(0);
  const [saboresPizzas, setSaboresPizzas] = useState([]);
  const { state } = useLocation();
  const { data } = state;

  console.log(saboresPizzas)

    useEffect(()=>{
        api
            .get(`/listaSaboresPizza/${data.ID}`)
            .then((getdata)=>{
                const data = getdata.data.map((item)=>({
                    ...item,
                    quantidade: 0,
                    valorTotalProduto: 0
                }))
                setSaboresPizzas(data);               
            });
    }, []);


  const aumentarQuantidade = (index) => {
    
  };

  const diminuirQuantidade = (index) => {
    
  };
  
  

  

  return(
            <div>
              <div className='pizza-List-Main'>
            {Array.isArray(saboresPizzas) ? (
                saboresPizzas.map((Sabor, index)=>
                    <div className='pizza-List' key={Sabor.ID_GRADE}>
                        <div className='pizza-Card'>
                            <div className='pizza-card-interno'>
                                <div className='pizza-info'>
                                    <div className='pizza-nome'>
                                        <div className='pizza-nome-titulo'> Pizza Sabor </div>
                                            <div className='pizza-nome-sabor'> {Sabor.PRODUTO} </div>
                                    </div>
                                    <div className='pizza-valor'>
                                        <div> Valor {formCurrency.format(Sabor.VALOR_VENDA)} </div>
                                    </div>
                                </div>
                                <div className='pizza-input'>   
                                    <div>
                                        <div className='Card-Adicionais-Botoes'>
                                            <div className='btn-quantia-adicionais'>
                                                <button className='arrow left' onClick={() => diminuirQuantidade(index)}></button>
                                            </div>
                                            <div className='quantia-adicionais'>{Sabor.quantidade}</div>
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