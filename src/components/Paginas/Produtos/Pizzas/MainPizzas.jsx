import { React } from 'react'
import Pizzas from './adiccionaisPizza/Pizzas'
import Header from '../../../header/Header'
import PizzasInfo from './adiccionaisPizza/PizzasInfo'


export default function MainPizza(){

    return(
        <div>
            <div>
                <Header/>
            </div>
            <div>
                <PizzasInfo/>
            </div>
            <div>
                <Pizzas/>
            </div>
        </div>
    )
}