import { React, useEffect } from 'react'
import Decimal from 'decimal.js';
import '../../../../../Styles/Styles.css'
import '../../../../../Styles/StyleForAdicionais.css'
import { formCurrency } from '../../../../AA-utilidades/numeros';

export default function AdicionaisInfo({ existeTamanho, totalCompra, setTotalCompra, setCustoCompra, valorTotalItem, valorTotalCusto, Produto, tamanhoEscolhido }){
    
    useEffect(() => {
        if(existeTamanho === false){
            const valorVenda = new Decimal(Produto.VALOR_VENDA);
            const valorCusto = new Decimal(Produto.VALOR_CUSTO);
        
            const newTotalCompra = valorVenda.plus(valorTotalItem);
            const newCustoCompra = valorCusto.plus(valorTotalCusto);
        
            setTotalCompra(newTotalCompra.toNumber().toFixed(2));
            setCustoCompra(newCustoCompra.toNumber().toFixed(2));
        } else if (existeTamanho === true){
            const valorVenda = new Decimal(tamanhoEscolhido !== null ? (tamanhoEscolhido.VALOR_VENDA) : (0));
            const valorCusto = new Decimal(tamanhoEscolhido !== null ? (tamanhoEscolhido.VALOR_CUSTO) : (0));
        
            const newTotalCompra = valorVenda.plus(valorTotalItem);
            const newCustoCompra = valorCusto.plus(valorTotalCusto);
        
            setTotalCompra(newTotalCompra.toNumber().toFixed(2));
            setCustoCompra(newCustoCompra.toNumber().toFixed(2));
        }
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
                            <div className='box-valor'> {formCurrency.format(totalCompra)} </div>
                        </div>
                    </div>
                    <div className='produtos-img'>
                        <img src={'data:image/png;base64,' + Produto.IMAGEM_WEB} key={Produto.ID_PRODUTO} alt='Restaurante' className='img-produto limiteimg'/>
                    </div>
                </div>
            </div>
        </div>
    )
}