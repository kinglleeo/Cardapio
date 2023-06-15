import { React, useState, useEffect } from 'react'
import './PizzasInfo.css'
import Decimal from 'decimal.js';
import BtnCarrinho from './BtnCarrinho-Pizza';

export default function PizzasInfo({ valorTotalItem, valorTotalCusto, valorTotalCustoPizza, data, tipo, Produto, valorTotalSabores, SaboresSelecionados, adicionalSelecionado, observacoes, ID_GRUPO_OPCOES, quantidadeTotal }){
    const [totalCompra, setTotalCompra] = useState('');
    const [custoCompra, setCustoCompra] = useState('');

    useEffect(() => {
        const valorVenda = new Decimal(valorTotalSabores || 0);
        const valorCusto = new Decimal(valorTotalCustoPizza || 0);
    
        const newTotalCompra = valorVenda.plus(valorTotalItem);
        const newCustoCompra = valorCusto.plus(valorTotalCusto);
    
        setTotalCompra(newTotalCompra.toNumber().toFixed(2));
        setCustoCompra(newCustoCompra.toNumber().toFixed(2));
      }, [valorTotalItem, valorTotalCusto, valorTotalSabores, valorTotalCustoPizza]);


    return(
        <div className='PizzasInfo'>
            <BtnCarrinho
                Produto={Produto}
                SaboresSelecionados={SaboresSelecionados}
                adicionalSelecionado={adicionalSelecionado}
                observacoes={observacoes}
                totalCompra={totalCompra}
                totalCusto={custoCompra}
                ID_GRUPO_OPCOES={ID_GRUPO_OPCOES}
                tipo={tipo}
                IDPizzaMista={data.ID_PRODUTO}
                ID_UNIDADE={data.ID_UNIDADE}
                quantidadeTotal={quantidadeTotal}
            />
        </div>
    )
}