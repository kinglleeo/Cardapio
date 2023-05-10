import { React, useState, useEffect } from 'react'
import { api } from '../../../conecções/api'
import { formCurrency } from '../../AA-utilidades/numeros';

export default function ProdutoList({ ID_SUBGRUPO }){
    const [produto, setProduto] = useState([]);

    useEffect(()=>{
        api
            .get(`/listaProdutos/${ID_SUBGRUPO}`)
            .then((getdata)=>{
                setProduto(getdata.data);
            });
    }, []);


    return(
        <div>
            {produto.map((item)=>
                <div className='card' key={item.ID_PRODUTO}>
                    <div className='box-produtos'>
                        <div className='produtos-info'>
                            <div className='produtos-name'>{item.PRODUTO}</div>
                            <div className='produtos-valor'>
                                {formCurrency.format(item.VALOR_MINIMO) === 0 && (
                                    <div>
                                        <div>Valor</div>
                                        <div>{formCurrency.format(item.VALOR_VENDA)}</div>
                                    </div>
                                )}
                            </div>
                        <div className='produtos-img'>
                            <div></div>
                        </div>
                    </div>
                </div>
            </div>
            )}
        </div>
    )
}
