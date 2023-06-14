import { React, useState, useEffect } from 'react'
import './PizzasInfo.css'
import Decimal from 'decimal.js';
import BtnCarrinho from './BtnCarrinho-Pizza';

export default function PizzasInfo({ quantidadeTotal, data, tipo, Produto, valorTotalSabores, SaboresSelecionados, adicionalSelecionado, totalValue, observacoes, ID_GRUPO_OPCOES }){
    const [totalCompra, setTotalCompra] = useState('');
    const [custoTotal, setCustoTotal] = useState('');
    console.log(adicionalSelecionado)

    useEffect(() => {
        const ValorItem = new Decimal(Produto.VALOR_VENDA || 0)
        const ValorTamanho = new Decimal(totalValue || 0)
        const TotalSabores = new Decimal(valorTotalSabores || 0)
          const Total = (ValorItem).plus(ValorTamanho).plus(TotalSabores);
            setTotalCompra(Total.toNumber().toFixed(2));
      }, [totalValue, Produto, valorTotalSabores]);

    useEffect(()=>{
        const valorCusto = new Decimal(SaboresSelecionados.VALOR_CUSTO || 0)
            const dividedValue = valorCusto.dividedBy(quantidadeTotal);    
        const custoTotal = (dividedValue).plus(adicionalSelecionado.VALOR_CUSTO || 0)
            setCustoTotal(custoTotal.toNumber().toFixed(2))
    }, [Produto, quantidadeTotal])


    return(
        <div className='PizzasInfo'>
            <BtnCarrinho
                Produto={Produto}
                SaboresSelecionados={SaboresSelecionados}
                adicionalSelecionado={adicionalSelecionado}
                observacoes={observacoes}
                totalCompra={totalCompra}
                ID_GRUPO_OPCOES={ID_GRUPO_OPCOES}
                tipo={tipo}
                IDPizzaMista={data.ID_PRODUTO}
                ID_UNIDADE={data.ID_UNIDADE}
                custoTotal={custoTotal}
            />
        </div>
    )
}