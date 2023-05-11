import { React, useState, useEffect } from 'react'
import { api } from '../../../conecções/api'
import { formCurrency } from '../../AA-utilidades/numeros';
import './ProdutoList.css'
import { useNavigate } from 'react-router-dom';

export default function ProdutoList({ ID_SUBGRUPO }){
    const [produto, setProduto] = useState([]);
    const navigate = useNavigate();
    
    useEffect(()=>{
        api
            .get(`/listaProdutos/${ID_SUBGRUPO}`)
            .then((getdata)=>{
                setProduto(getdata.data);
            });
    }, []);

    const Adicionais = (item) => {
        navigate('/Adicionais', { state: { item } });
      };

    return(
        <div>
           <div className='lista-produtos'>
                {Array.isArray(produto) ? (
                    produto.map((item)=>
                        <div className='card-produtos' key={item.ID_PRODUTO}>
                            <div className='box-produtos' onClick={()=> Adicionais(item)}>
                                <div className='produtos-info'>
                                    <div className='produto-nome'>{item.PRODUTO}</div>
                                    <div className='produto-valor'>
                                        <div>
                                            {item.VALOR_MINIMO < 0 ? (
                                                <div>
                                                    <div>Valor Apartir de:</div>
                                                    <div>{formCurrency.format(item.VALOR_MINIMO)}</div>
                                                </div>
                                            ) : (
                                                <div>
                                                    <div>valor</div>
                                                    <div>{formCurrency.format(item.VALOR_VENDA)}</div>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                                <div className='produtos-img'>

                                </div>
                            </div>
                        </div>
                    )) : null}
           </div>
        </div>
    )
}
