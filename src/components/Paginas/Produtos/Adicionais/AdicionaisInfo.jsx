import { React, useState, useEffect } from 'react'
import './Adicionais.css'
import Decimal from 'decimal.js';
import '../../../../Styles/Styles.css'
import { formCurrency } from '../../../AA-utilidades/numeros';
import BtnCarrinho from './BtnCarrinho';

export default function AdicionaisInfo({ valorTotalItem, valorTotalCusto, grupo, Produto, adicionalSelecionado, tamanhoEscolhido, observacoes, ID_GRUPO_OPCOES, existeTamanho }){
    const [totalCompra, setTotalCompra] = useState('');
    const [custoCompra, setCustoCompra] = useState('');

    useEffect(() => {
        const valorVenda = new Decimal(tamanhoEscolhido.VALOR_VENDA > 0 ? (tamanhoEscolhido.VALOR_VENDA) : (Produto.VALOR_VENDA));
        const valorCusto = new Decimal(tamanhoEscolhido.VALOR_CUSTO > 0 ? (tamanhoEscolhido.VALOR_CUSTO) : (Produto.VALOR_CUSTO));
    
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
                        <img src={'data:image/png;base64,' + Produto.IMAGEM_WEB} key={Produto.ID_PRODUTO} alt='Restaurante' className='img-restaurante'/>
                    </div>
                </div>
            </div>
        </div>
    )
}