import Decimal from 'decimal.js'
import { React, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { addToCart } from '../../../../redux/cartSlice'
import './adicionaisbar.css'
import '../estilos/Style.css'
import './styleAddP.css'
import '../../teste.css'
import {BiDish} from 'react-icons/bi'
import { formCurrency } from '../../../AA-utilidades/numeros' 

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
            <label className='container'>
                <input
                    type='checkbox'
                    id={data.id}
                    onChange={(event)=> handleAddAdicionais(event, data)}
                    checked={selectedAdds.some((item) => item.id === data.id)}
                /> 
                <div className='checkmark'></div>
            </label>            
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
                <input type='checkbox'
                    checked
                    onChange={()=> handleRemoveAdd(index)}/>
        </div>
    )
}

export function TotalAdd({ data, selectedAdds, selectedTamanho }){
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const valorTotalAdd=()=>{
        const valorpizza = data.valor || 0;
        const valortamanho = new Decimal(selectedTamanho?.valor || 0);
        const AddsValor = selectedAdds.reduce((total, item)=>{
            return total.plus(item.valor || 0);
        }, new Decimal(0));
        const total = new Decimal(valorpizza).plus(AddsValor).plus(valortamanho);
        return total.toFixed(2);
    }
    const AddSelecte =()=>{
        let adds = '';
        selectedAdds.forEach(add => {
            adds += ` + ${add.nome}`;
        });
        return adds;
    }
    const addnome = () => {
        let name = data.nome;
        let tamanho = selectedTamanho.tamanho
            name += "  " + tamanho
        return name;
      };
    const item ={
        nome: addnome(),
        descricao: AddSelecte(),
        valor: valorTotalAdd()
    }

    const handleCart=(item)=>{
        dispatch(addToCart(item))
        navigate('/Carrinho')
    }
    return(
        <div className='total-00'>
            <div className='total-valor'>
                <div>Valor Total:</div>
                <div>{formCurrency.format(valorTotalAdd())}</div>
            </div>
            <div className='total-button'>
                <button onClick={()=> handleCart(item)}>Adicionar</button>
            </div>
        </div>
    )
}