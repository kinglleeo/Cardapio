import { React, useState, useEffect } from 'react'
import './Adicionais.css'
import Decimal from 'decimal.js';
import BtnCarrinho from './BtnCarrinho';



export default function AdicionaisInfo({ adicionaisTotais, tipo, Produto, adicionalSelecionado, totalValue, tamanhoEscolhido, observacoes, ID_GRUPO_OPCOES }){
    const [totalCompra, setTotalCompra] = useState('');
    const [custoTotal, setCustoTotal] = useState('');


    useEffect(() => {
        const ValorItem = new Decimal(Produto.VALOR_MINIMO > 0 ? Produto.VALOR_MINIMO : Produto.VALOR_VENDA)
        const ValorTamanho = new Decimal(totalValue || 0)
        const ValorAdicional = new Decimal(tamanhoEscolhido.VALOR_VENDA || 0)
          const Total = (ValorItem).plus(ValorTamanho).plus(ValorAdicional);
            setTotalCompra(Total.toNumber().toFixed(2));
      }, [totalValue, Produto, tamanhoEscolhido]);

    useEffect(()=>{
        const valorCusto = new Decimal(Produto.VALOR_CUSTO || 0)
        const valorCustoAdicional = new Decimal(adicionalSelecionado.VALOR_CUSTO || 0).dividedBy(adicionaisTotais || 0)
        const custoTotal = (valorCusto).plus(valorCustoAdicional)
            setCustoTotal(custoTotal.toNumber().toFixed(2));
    }, [Produto, adicionalSelecionado, adicionaisTotais])

    return(
        <div className='adicionaisInfo'>
                <div>
                    {Produto.PRODUTO}
                </div>
                <div>
                    <BtnCarrinho
                        Produto={Produto}
                        adicionalSelecionado={adicionalSelecionado}
                        totalCompra={totalCompra}
                        tamanhoEscolhido={tamanhoEscolhido}
                        observacoes={observacoes}
                        ID_GRUPO_OPCOES={ID_GRUPO_OPCOES}
                        tipo={tipo}
                        custoTotal={custoTotal}
                    />
                </div>
        </div>
    )
}