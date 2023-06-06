import { React, useState, useEffect } from 'react'
import './Adicionais.css'
import Decimal from 'decimal.js';
import { formCurrency } from '../../../AA-utilidades/numeros';
import BtnCarrinho from './BtnCarrinho';



export default function AdicionaisInfo({ Produto, adicionalSelecionado, totalValue, tamanhoEscolhido, observacoes, ID_GRUPO_OPCOES }){
    const [add, setAdd] = useState('');
    const [totalCompra, setTotalCompra] = useState('');
    

    useEffect(() => {
        const ValorItem = new Decimal(Produto.VALOR_MINIMO > 0 ? Produto.VALOR_MINIMO : Produto.VALOR_VENDA)
        const ValorTamanho = new Decimal(totalValue || 0)
        const ValorAdicional = new Decimal(tamanhoEscolhido.VALOR_VENDA || 0)
          const Total = (ValorItem).plus(ValorTamanho).plus(ValorAdicional);
            setTotalCompra(Total.toNumber().toFixed(2));
      }, [totalValue, Produto, tamanhoEscolhido]);
    

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
                    />
                </div>
        </div>
    )
}