import { React } from 'react'
import '../../../Styles/Styles.css'
import { formCurrency } from '../../AA-utilidades/numeros';
import { useNavigate } from 'react-router-dom';

export default function ProdutoList({ produto, subGrupo, grupo }){
    const navigate = useNavigate();
    console.log(produto)
    
    const Adicionais = (data, subGrupo, grupo) => {
        navigate('/AdicionaisMain', { state: { data, subGrupo, grupo } });
      };
    
    return(
           <div className='lista-produtos'>
                {Array.isArray(produto) ? (
                    produto.map((data)=>
                        <div className='card-produtos' key={data.ID_PRODUTO}>
                            <div className='box-produtos' onClick={() => Adicionais(data, subGrupo, grupo)}>
                                <div className='produtos-info'>
                                    <div className='produto-nome'>
                                        <div className='item-nome'>{data.PRODUTO}</div>
                                            <div className='produto-ingredientes'>
                                                <div>sahsiah asj dpajosi jdoaj sojdoa jsojd oajoi dsjioj sd ads</div>
                                            </div>
                                    </div>
                                    <div className='produto-valor'>
                                            <div className='box-valor'>
                                                {data.VALOR_MINIMO > 0 ? (
                                                    <div>
                                                        <div>{formCurrency.format(data.VALOR_MINIMO)}</div>
                                                    </div>
                                                ) : (
                                                    <div>
                                                        <div>{formCurrency.format(data .VALOR_VENDA)}</div>
                                                    </div>
                                                )}
                                            </div>
                                    </div>
                                </div>
                                <div className='produtos-img'>
                                    <img src={'data:image/png;base64,' + data.IMAGEM_WEB} key={data.ID_PRODUTO} alt='Restaurante' className='img-restaurante'/>
                                </div>
                            </div>
                        </div>
                    )) : null}
           </div>
    )
}
