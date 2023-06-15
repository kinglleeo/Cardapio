import { React, useState, useEffect } from 'react'
import './Adicionais.css'
import Decimal from 'decimal.js';
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
                <div>
                    {Produto.PRODUTO}
                </div>
                <div>
                    <BtnCarrinho
                        Produto={Produto}
                        PIZZA_MISTA={grupo.PIZZA_MISTA}
                        adicionalSelecionado={adicionalSelecionado}
                        totalCompra={totalCompra}
                        tamanhoEscolhido={tamanhoEscolhido}
                        observacoes={observacoes}
                        ID_GRUPO_OPCOES={ID_GRUPO_OPCOES}
                        totalCusto={custoCompra}
                        existeTamanho={existeTamanho}
                    />
                </div>
        </div>
    )
}