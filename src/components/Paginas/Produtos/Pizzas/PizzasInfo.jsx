import { React, useState, useEffect } from 'react'
import './PizzasInfo.css'
import Decimal from 'decimal.js';
import BtnCarrinho from './BtnCarrinho-Pizza';

export default function PizzasInfo({ SaboresSelecionados, Produto, setTotalCompra, setCustoCompra, valorTotalItem, valorTotalCusto, valorTotalCustoPizza, valorTotalSabores }){
    console.log(SaboresSelecionados)
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
            <div className='pizzasInfoDescricao'>
                <div className='pizzaInfoTamanho'> Pizza {Produto.TAMANHO} </div>
                <div className='pizzasInfoCaixaSabores'> 
                    {SaboresSelecionados.map((item) =>
                        <div className='pizzasInfoSabores'> {item.PRODUTO.toLowerCase()} </div>
                    )}</div>
            </div>
        </div>
    )
}