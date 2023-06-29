import { React, useState, useEffect } from 'react'
import './PizzasInfo.css'
import Decimal from 'decimal.js';
import BtnCarrinho from './BtnCarrinhoPizza';

export default function PizzasInfo({ SaboresSelecionados, listaSaboresPizzas, setListaSaboresPizzas, Produto, setTotalCompra, setCustoCompra, valorTotalItem, valorTotalCusto, valorTotalCustoPizza, valorTotalSabores }){
    
    useEffect(() => {
        const valorVenda = new Decimal(valorTotalSabores || 0);
        const valorCusto = new Decimal(valorTotalCustoPizza || 0);
    
        const newTotalCompra = valorVenda.plus(valorTotalItem);
        const newCustoCompra = valorCusto.plus(valorTotalCusto);
    
        setTotalCompra(newTotalCompra.toNumber().toFixed(2));
        setCustoCompra(newCustoCompra.toNumber().toFixed(2));
    }, [valorTotalItem, valorTotalCusto, valorTotalSabores, valorTotalCustoPizza]);

    const removerSaborPizza = () => {
        const updatedListaOpcionais = [...listaSaboresPizzas];
        const removedSabor = SaboresSelecionados[0].PRODUTO.toLowerCase();         
        const index = updatedListaOpcionais.findIndex(item => item.PRODUTO.toLowerCase() === removedSabor);
        if (index !== -1) {
            updatedListaOpcionais[index].quantidade = 0;
            setListaSaboresPizzas(updatedListaOpcionais);
        }
    }

    return(
        <div className='PizzasInfo'> 
            <div className='pizzasInfoDescricao'>
                <div className='pizzaInfoTamanho'> Pizza {Produto.TAMANHO} </div>
                <div className='pizzasInfoCaixaSabores'> 
                    {SaboresSelecionados.map((item)=>
                        <div className='pizzasInfoSabores'>
                            <div className='iconeInfo' onClick={removerSaborPizza}></div>
                            <div className='nomeInfo'>{item.PRODUTO.toLowerCase()}</div>
                        </div>
                    )} 
                </div>
            </div>
        </div>
    )
}