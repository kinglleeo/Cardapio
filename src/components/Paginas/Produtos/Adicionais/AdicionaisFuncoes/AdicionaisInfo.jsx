import { React, useEffect } from 'react'
import Decimal from 'decimal.js';
import '../../../../../Styles/Styles.css'
import '../../../../../Styles/StyleForAdicionais.css'
import { formCurrency } from '../../../../AA-utilidades/numeros';

export default function AdicionaisInfo({ setTotalCompra, setCustoCompra, valorTotalItem, valorTotalCusto, grupo, Produto, adicionalSelecionado, tamanhoEscolhido, observacoes, ID_GRUPO_OPCOES, existeTamanho }){
    console.log(Produto)
    useEffect(() => {
        const valorVenda = new Decimal(tamanhoEscolhido !== null ? (tamanhoEscolhido.VALOR_VENDA) : (Produto.VALOR_MINIMO));
        const valorCusto = new Decimal(tamanhoEscolhido !== null ? (tamanhoEscolhido.VALOR_CUSTO) : (Produto.VALOR_CUSTO));
    
        const newTotalCompra = valorVenda.plus(valorTotalItem);
        const newCustoCompra = valorCusto.plus(valorTotalCusto);
    
        setTotalCompra(newTotalCompra.toNumber().toFixed(2));
        setCustoCompra(newCustoCompra.toNumber().toFixed(2));
      }, [valorTotalItem, valorTotalCusto, tamanhoEscolhido]);

    
    return(
        <div className='adicionaisInfo'>
            <div className='card-produtos'>
                <div className='box-produtos'>
                    <div className='produtos-info'>
                        <div className='produto-nome'>
                            <div className='item-nome'>{Produto.PRODUTO}</div>
                                <div className='produto-ingredientes'>
                                    <div>{Produto.FICHA_TECNICA !== null ? (Produto.FICHA_TECNICA.toLowerCase()) : (<div></div>)}</div>
                                </div>
                        </div>
                        <div className='produto-valor'>
                            <div className='box-valor'>
                                    {Produto.VALOR_MINIMO > 0 ? (
                                <div>
                                    <div>{formCurrency.format(Produto.VALOR_MINIMO)}</div>
                                </div>
                                    ) : (
                                <div>
                                    <div>{formCurrency.format(Produto .VALOR_VENDA)}</div>
                                </div>
                                    )}
                            </div>
                        </div>
                    </div>
                    <div className='produtos-img'>
                        <img src={'data:image/png;base64,' + Produto.IMAGEM_WEB} key={Produto.ID_PRODUTO} alt='Restaurante' className='img-produto'/>
                    </div>
                </div>
            </div>
        </div>
    )
}