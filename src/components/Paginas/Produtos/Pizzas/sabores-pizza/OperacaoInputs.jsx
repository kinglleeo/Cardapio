import { React, useState, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'


export function Selecionadores({ itempizza, selectedItems, setSelectedItems }){
    const { state } = useLocation()
    const { tamanhopizza } = state
    
    const handleCheckboxChange = ( event, itempizza ) =>{
        

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
                    name='selecionar-sabor'
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