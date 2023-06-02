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
          
         
          const handleRemoveItem = (index) =>{
            const itemToRemove = selectedSabores[index]
            const newSelectedItems = [...selectedSabores]
            newSelectedItems.splice(index, 1)
            console.log(itemToRemove)
            setSelectedSabores(newSelectedItems)
            handleUncheckCheckbox(itemToRemove.ID_GRADE)
        }
        const handleUncheckCheckbox = (ID_GRADE) =>{
            const checkbox = document.getElementById(ID_GRADE)
            if (checkbox){
                checkbox.checked = false
            }
        }
    return(
        <div className='pizzas-info'>
            <div> Pizza {itemPizza.TAMANHO} </div>
            <div>{formCurrency.format(valorTotal)}</div>
            <div>
                {selectedSabores.map((item, index)=>
                    <div> <div>{item.PRODUTO}</div> <div> <input id={selectedSabores.ID_GRADE} type='checkbox' onChange={()=> handleRemoveItem(index)} checked='checked' ></input> </div>
                    </div>
                )}
            </div>
        </div>
    )
}