import Decimal from 'decimal.js'
import { React, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { addToCart } from '../../../../../redux/cartSlice'
import './adicionaisbar.css'

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

export function Tamanho({ data, selectedTamanho, setSelectedTamanho }){

    const handleTamanho=( event, data)=>{

        let maxquantia = 1
        const checkboxValues = Array.from(document.querySelectorAll('input[name="selecionar-tamanho"]:checked')).map(
            (checkbox) => checkbox.value
        )
            if (checkboxValues.length >= maxquantia){
                document.querySelectorAll('input[name="selecionar-tamanho"]:not(:checked)').forEach((checkbox) =>{
                    checkbox.disabled = true;
                });
            } else {
                document.querySelectorAll('input[name="selecionar-tamanho"]').forEach((checkbox) =>{
                    checkbox.disabled = false;
                });
            }

        if(event.target.checked){
            setSelectedTamanho([...selectedTamanho, data])
        } else {
            setSelectedTamanho(selectedTamanho.filter((item) => item.id !== data.id))
        }
    }
 
return(
        <div>
            <input
                type='checkbox'
                id={data.id}
                name='selecionar-tamanho'
                onChange={(event)=> handleTamanho(event, data)}
                checked={selectedTamanho.some((item) => item.id === data.id)}
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
export function Escolhidos2({ index2, selectedTamanho, setSelectedTamanho }){
    
    const handleRemoveAdd =(index2)=>{
        const addRemove = selectedTamanho[index2]
        const newSelectedAdds = [...selectedTamanho]
        newSelectedAdds.splice(index2, 1)
        setSelectedTamanho(newSelectedAdds)
        handleRemovecheck(addRemove.id)

        const checkboxValues = newSelectedAdds.map((item) => item.id)
            document.querySelectorAll('input[name="selecionar-tamanho"]').forEach((checkbox) => {
            if (!checkboxValues.includes(checkbox.value)) {
                checkbox.disabled = false
            }
    })
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
                    onChange={()=> handleRemoveAdd(index2)}
                />
            </div>
        </div>
    )
}

export function TotalAdd({ data, selectedAdds, selectedTamanho}){
    const dispatch = useDispatch()
    const navigate = useNavigate()
    console.log(selectedTamanho)
    const valorTotalAdd=()=>{
        const valorpizza = data.valor || 0;
        const tamanhovalor = selectedTamanho.reduce((total, item)=>{
            return total.plus(item.valor || 0);
        }, new Decimal(0));
        const AddsValor = selectedAdds.reduce((total, item)=>{
            return total.plus(item.valor || 0);
        }, new Decimal(0));
        const total = new Decimal(valorpizza).plus(AddsValor).plus(tamanhovalor);
        return total.toFixed(2);
    }
    const AddSelecte =()=>{
        let adds = '';
        selectedTamanho.forEach(add =>{
            adds += `+ ${add.tamanho}`
        })
        selectedAdds.forEach(add => {
            adds += ` + ${add.nome}`;
        });
        return adds;
    }
    const item ={
        nome: data.nome,
        descricao: AddSelecte(),
        valor: valorTotalAdd()
    }

    return(
        <div className='total-00'>
            <div>Valor Total:</div>
            <div>R${valorTotalAdd()}</div>
            <button onClick={()=> dispatch(addToCart(item))}>Adicionair</button>
        </div>
    )
}