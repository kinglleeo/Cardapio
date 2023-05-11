import { React, useState, useEffect } from 'react'
import { api } from '../../../conecções/api'
import { formCurrency } from '../../AA-utilidades/numeros';
import './ProdutoList.css'
import { useNavigate } from 'react-router-dom';

export default function ProdutoList({ ID_SUBGRUPO }){
    const [produto, setProduto] = useState([]);
    const navigate = useNavigate();
   
    

    const Adicionais = (produto) => {
        navigate('/Adicionais', { state: { produto } });
    };

    return(
        <div>
           <div className='lista-produtos'>
                {produto.map((item)=>
                    <div className='card-produtos' key={item.ID_PRODUTO} onClick={()=> Adicionais(produto)}>
                        <div className='box-produtos'>
                            <div className='produtos-info'>
                                <div className='produto-nome'>{item.PRODUTO}</div>
                                <div className='produto-valor'>
                                    <div>{formCurrency.format(item.VALOR_MINIMO) === 0 && (
                                            <div>
                                                <div>Valor</div>
                                                <div>{formCurrency.format(item.VALOR_VENDA)}</div>
                                            </div>
                                        )}</div>
                                </div>
                            </div>
                            <div className='produtos-img'>

                            </div>
                        </div>
                    </div>
                )}
           </div>
        </div>
    )
}
