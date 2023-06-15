import { React } from 'react'
import '../../../Styles/Styles.css'
import { formCurrency } from '../../AA-utilidades/numeros';
import { useNavigate } from 'react-router-dom';

export default function ProdutoList({ produto, subGrupo, grupo }){
    const navigate = useNavigate();
    
    const Adicionais = (data, subGrupo, grupo) => {
        navigate('/AdicionaisMain', { state: { data, subGrupo, grupo } });
      };
    
    return(
        <div>
           <div className='lista-produtos'>
                {Array.isArray(produto) ? (
                    produto.map((data)=>
                        <div className='card-produtos' key={data.ID_PRODUTO}>
                            <div className='box-produtos' onClick={() => Adicionais(data, subGrupo, grupo)}>
                                <div className='produtos-info'>
                                    <div className='produto-nome'>
                                        <div className='item-nome'>{data.PRODUTO}</div>
                                    </div>
                                    <div className='produto-valor'>
                                        <div className='card-valor'>
                                            <div className='box-valor'>
                                                {data.VALOR_MINIMO > 0 ? (
                                                    <div>
                                                        <div>Valor Apartir de</div>
                                                        <div>{formCurrency.format(data.VALOR_MINIMO)}</div>
                                                    </div>
                                                ) : (
                                                    <div>
                                                        <div>valor </div>
                                                        <div> {formCurrency.format(data .VALOR_VENDA)}</div>
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
