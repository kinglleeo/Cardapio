import Decimal from 'decimal.js'
import { React, useEffect } from 'react'

export function AddAdicionais({ data, selectedAdds, setSelectedAdds}){


    const handleAddAdicionais =( event, data )=>{

        if(event.target.checked){
            setSelectedAdds([...selectedAdds, data])
        } else {
            setSelectedAdds(selectedAdds.filter((item) => item.id !== data.id))
        }
    }

    return(
        <div>
            <input
                type='checkbox'
                id={data.id}
                onChange={(event)=> handleAddAdicionais(event, data)}
                checked={selectedAdds.some((item) => item.id === data.id)}
            />
        </div>
    )
}

export function Escolhidos({ index, selectedAdds, setSelectedAdds }){
    
    const handleRemoveAdd =(index)=>{
        const addRemove = selectedAdds[index]
        const newSelectedAdds = [...selectedAdds]
        newSelectedAdds.splice(index, 1)
        setSelectedAdds(newSelectedAdds)
        handleRemovecheck(addRemove.id)
    }

    const handleRemovecheck =(itemId)=>{
        const checkbox = document.getElementById(itemId)
        if(checkbox){
            checkbox.checked = false
        }
    }
    return(
        <div>
            <div>
                <input
                    type='checkbox'
                    checked
                    onChange={()=> handleRemoveAdd(index)}
                />
            </div>
        </div>
    )
}

export function TotalAdd({ item, selectedAdds}){

    const valorTotalAdd=()=>{
        const valorpizza = item.valor || 0;
        const AddsValor = selectedAdds.reduce((total, item)=>{
            return total.plus(item.valor || 0);
        }, new Decimal(0));
        const total = new Decimal(valorpizza).plus(AddsValor);
        return total.toFixed(2);
    }

    return(
        <div>
            <div>{valorTotalAdd()}</div>
        </div>
    )
}