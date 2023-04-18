import { React, useState, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Decimal from 'decimal.js';

export function Selecionadores({ itempizza, selectedItems, setSelectedItems }){
    const { state } = useLocation()
    const { tamanhopizza } = state
    
    const handleCheckboxChange = ( event, itempizza ) =>{
        let maxquantia = tamanhopizza.quantia
        
        

    const checkboxValues = Array.from(document.querySelectorAll('input[name="selecionar-sabor"]:checked')).map(
        (checkbox) => checkbox.value
    )
    if (checkboxValues.length >= maxquantia){
        document.querySelectorAll('input[name="selecionar-sabor"]:not(:checked)').forEach((checkbox) =>{
            checkbox.disabled = true;
        });
    } else {
        document.querySelectorAll('input[name="selecionar-sabor"]').forEach((checkbox) =>{
            checkbox.disabled = false;
        });
    }
    
    if(event.target.checked){
        setSelectedItems([...selectedItems, itempizza])
    } else {
        setSelectedItems(selectedItems.filter((item) => item.id !== itempizza.id))
    }   
    
}
    return (
        <div>
                <input
                    type='checkbox'
                    name="selecionar-sabor"
                    id={itempizza.id}
                    onChange={(event) => handleCheckboxChange(event, itempizza)}
                    checked={selectedItems.some((item) => item.id === itempizza.id)}
                />
        </div>
    )
}

export function MostrarSelecionados ({ index, selectedItem, setSelectedItem, selectedItems, setSelectedItems}){
    const { state } = useLocation()
    const { tamanhopizza } = state
    
    useEffect(()=>{
        if (selectedItem){
            setSelectedItems((prevSelectedItems) => [...prevSelectedItems, selectedItem])
            setSelectedItem('')
        }
    }, [selectedItem, setSelectedItems, setSelectedItem])

    const handleRemoveItem = (index) =>{
        const itemToRemove = selectedItems[index]
        const newSelectedItems = [...selectedItems]
        newSelectedItems.splice(index, 1)
        setSelectedItems(newSelectedItems)
        handleUncheckCheckbox(itemToRemove.id)

        const checkboxValues = newSelectedItems.map((item) => item.id)
        document.querySelectorAll('input[name="selecionar-sabor"]').forEach((checkbox) => {
          if (!checkboxValues.includes(checkbox.value)) {
            checkbox.disabled = false
        }
    })
    }
    const handleUncheckCheckbox = (itemId) =>{
        const checkbox = document.getElementById(itemId)
        if (checkbox){
            checkbox.checked = false
        }
    }
   

    return(
        <div>
            <input
                type='checkbox'
                checked
                onChange={() => handleRemoveItem(index)}
            />
        </div>
    )
}

export function Total({ tamanhopizza, selectedItems }){
    const navigate = useNavigate()
   
    const valorTotal = () => {
        const tamanhopizzaValor = tamanhopizza.valor || 0;
        const selectedItemsValor = selectedItems.reduce((total, item) => {
          return total.plus(item.valor || 0);
        }, new Decimal(0));
        const total = new Decimal(tamanhopizzaValor).plus(selectedItemsValor);
        return total.toFixed(2);
      };
      
    
    const saboresSelecionados=()=>{
        let sabores = ""
            selectedItems.forEach((add) =>{
                sabores += `${add.descricao} + `
            })
        return sabores
    }

    const item ={
        nome: "Pizza" + tamanhopizza.tamanho,
        sabores: saboresSelecionados(),
        valor: valorTotal()
    }
    const Adicionais=(item)=>{
        navigate('/AdicionaisPizza', {state: {item}})
    }

return(
    <div>
        <div>
            <div>{valorTotal()}</div>
            <button onClick={()=> Adicionais(item)}> Adicionais</button>
        </div>
    </div>
)
}