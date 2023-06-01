import { React, useState } from 'react'
import Pizzas from './adiccionaisPizza/Pizzas'
import Header from '../../../header/Header'
import PizzasInfo from './adiccionaisPizza/PizzasInfo'


export default function MainPizza(){
    const [selectedSabores, setSelectedSabores] = useState([]);
    
    return(
        <div>
            <div>
                <Header/>
            </div>
            <div>
                <PizzasInfo
                    selectedSabores={selectedSabores}
                    setSelectedSabores={setSelectedSabores}
                />
            </div>
            <div>
                <Pizzas
                    selectedSabores={selectedSabores}
                    setSelectedSabores={setSelectedSabores}
                />
            </div>
        </div>
    )
}