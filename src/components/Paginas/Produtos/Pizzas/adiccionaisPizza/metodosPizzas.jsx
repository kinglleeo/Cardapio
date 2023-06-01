import { React } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import Decimal from 'decimal.js';
import { formCurrency } from '../../../../AA-utilidades/numeros';

export function Selecionadores({ Sabor, selectedSabores, setSelectedSabores }){
    const { state } = useLocation()
    const { itemPizza } = state
        
  
    const handleCheckboxChange = ( event, Sabor ) =>{
   
        const checkboxValues = Array.from(document.querySelectorAll('input[name="selecionar-sabor"]:checked')).map(
            (checkbox) => checkbox.value
        )
            if (checkboxValues.length >= itemPizza.QTD_MAXIMO){
                document.querySelectorAll('input[name="selecionar-sabor"]:not(:checked)').forEach((checkbox) =>{
                    checkbox.disabled = true;
                });
            } else {
                document.querySelectorAll('input[name="selecionar-sabor"]').forEach((checkbox) =>{
                    checkbox.disabled = false;
                });
            }
    if(event.target.checked){
        setSelectedSabores([...selectedSabores, Sabor])
    } else {
        setSelectedSabores(selectedSabores.filter((item) => item.ID !== Sabor.ID))
    }   
    
}
    return (
        <div className='selecionar-add-pizza-0'>
            <label className='container'>
                <input
                    type='checkbox'
                    name="selecionar-sabor"
                    id={Sabor.ID}
                    onChange={(event) => handleCheckboxChange(event, Sabor)}
                    checked={selectedSabores.some((item) =>  item.ID === Sabor.ID)}
                />
                <div className='checkmark'></div>
            </label>
        </div>
    )
}
