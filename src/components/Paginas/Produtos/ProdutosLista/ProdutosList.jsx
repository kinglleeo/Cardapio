import { React } from 'react'
import '../../../../Styles/Styles.css'
import { formCurrency } from '../../../AA-utilidades/numeros';
import { useNavigate } from 'react-router-dom';
import { capitalizeFirstLetter } from '../../../AA-utilidades/primeiraMaiuscula';

export default function ProdutoList({ produto, subGrupo, grupo }){
    const navigate = useNavigate();

    const Adicionais = (data, subGrupo, grupo) => {
        navigate('/Adicionais', { state: { data, subGrupo, grupo } });
      };
      
    return(
           <div className='lista-produtos'>
                {Array.isArray(produto) ? (
                    produto.map((data)=>
                        <div className='card-produtos' key={data.ID_PRODUTO}>
                            <div className='box-produtos' onClick={() => Adicionais(data, subGrupo, grupo)} style={{ height: data.FICHA_TECNICA ? '90px' : '70px' }}>
                                <div className='produtos-info'>
                                    <div className='produto-nome'>
                                        <div className='item-nome'>{capitalizeFirstLetter(data.PRODUTO.toLowerCase())}</div>
                                            {data.FICHA_TECNICA !== null ? (<div className='produto-ingredientes'> {data.FICHA_TECNICA.toLowerCase()} </div>) : (null)}
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
                                    <img src={'data:image/png;base64,' + data.IMAGEM_WEB} key={data.ID_PRODUTO} alt='Restaurante' className='img-produto'/>
                                </div>
                            </div>
                        </div>
                    )) : null}
           </div>
    )
}
