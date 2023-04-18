import { React, useState, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'


export function SelecionarAdd({ data, selectedAdds, setSelectedAdds}){
    

    const handleSelectAdd = (event, data) =>{
        
        if(event.target.checked){
            setSelectedAdds([...selectedAdds, data])
        }else{
            setSelectedAdds(selectedAdds.filter((item) => item.id !== data.id))
        }
        
    }
    return(
        <div>
            <input
                type='checkbox'
                name="selecionar-add"
                id={data.id}
                onChange={(event) => handleSelectAdd(event, data)}
                checked={selectedAdds.some((item) => item.id === data.id)}
            />
        </div>
    )
}


export function RetirarAdd({ index, selectedAdd, setSelectedAdd, selectedAdds, setSelectedAdds }){
    
    useEffect(()=>{
        if(selectedAdd){
            setSelectedAdds((prevSelectedAdds) => [...prevSelectedAdds, selectedAdd])
            setSelectedAdd('')
        }
    }, [selectedAdd, setSelectedAdds, setSelectedAdd])

    const handleRemoveAdd =(index)=>{
        const addToRemove = selectedAdds[index]
        const newSelectedAdds = [...selectedAdds]
        newSelectedAdds.splice(index, 1)
        setSelectedAdds(newSelectedAdds)
        handleRemoveCheck(dataToRemove.id)
    }

    const handleRemoveCheck = (dataId) =>{
        const checkbox = document.getElementById(dataId)
        if (checkbox){
            checkbox.checked = false
        }
    }

    return(
        <div>
            <input
                type='checkbox'
                checked
                onChange={()=> handleRemoveAdd(index)}
            />
        </div>
    )
}


export function TotalAdd({ item, selectedAdd }){

    return(
        <div>

        </div>
    )
}