import { React } from 'react'
import { formCurrency } from '../../AA-utilidades/numeros';
import { useNavigate } from 'react-router-dom';

import '../../../Styles/Styles.css'

export default function ProdutoList({ produto }){
    const navigate = useNavigate();

    const Adicionais = (item) => {
        navigate('/Adicionais', { state: { item } });
      };
      
    return(
        <div>
           <div className='lista-produtos'>
                {Array.isArray(produto) ? (
                    produto.map((item)=>
                        <div className='card-produtos' key={item.ID_PRODUTO}>
                            <div className='box-produtos' onClick={() => Adicionais(item)}>
                                <div className='produtos-info'>
                                    <div className='produto-nome'>
                                        <div className='item-nome'>{item.PRODUTO}</div>
                                    </div>
                                    <div className='produto-valor'>
                                        <div className='card-valor'>
                                            <div className='box-valor'>
                                                {item.VALOR_MINIMO < 0 ? (
                                                    <div>
                                                        <div>Valor Apartir de</div>
                                                        <div>{formCurrency.format(item.VALOR_MINIMO)}</div>
                                                    </div>
                                                ) : (
                                                    <div>
                                                        <div>valor </div>
                                                        <div> {formCurrency.format(item.VALOR_VENDA)}</div>
                                                    </div>
                                                )}
                                            </div>
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
