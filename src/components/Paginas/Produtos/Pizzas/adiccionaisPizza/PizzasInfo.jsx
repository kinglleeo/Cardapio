import { React } from 'react'
import { useLocation } from 'react-router-dom';
import './pizzas.css'

export default function PizzasInfo(){
    const { state } = useLocation();
    const { itemPizza } = state;

    

    return(
        <div className='pizzas-info'>

        </div>
    )
}