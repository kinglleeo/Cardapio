import { React, useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import './pizzas.css'
import Decimal from 'decimal.js';
import { formCurrency } from '../../../../AA-utilidades/numeros';

export default function PizzasInfo({ selectedSabores, setSelectedSabores }){
    const { state } = useLocation();
    const { itemPizza } = state;
    const [valorTotal, setValorTotal] = useState();
    
    const checkboxValues = Array.from(document.querySelectorAll('input[name="selecionar-sabor"]:checked')).map(
        (checkbox) => checkbox.value
    )
        const check = checkboxValues.length || 0

        useEffect(() => {
            const totaItem = selectedSabores.reduce((acc, item) => {
              const dividirValor = new Decimal(item.VALOR_VENDA).dividedBy(check);
              return acc.plus(dividirValor);
            }, new Decimal(0));
                setValorTotal(totaItem.toNumber().toFixed(2))
          }, [selectedSabores, check]);
   

    return(
        <div className='pizzas-info'>
            <div> Pizza {itemPizza.TAMANHO} </div>
            <div>{formCurrency.format(valorTotal)}</div>
        </div>
    )
}