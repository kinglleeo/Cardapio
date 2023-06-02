import { React, useState } from 'react'
import Pizzas from './adiccionaisPizza/Pizzas'
import Header from '../../../header/Header'
import PizzasInfo from './adiccionaisPizza/PizzasInfo'

export default function MainPizza(){
    const [selectedSabores, setSelectedSabores] = useState([]);
    const [observacao, setObservacao] = useState('');
    
    return(
        <div>
            <div>
                <Header/>
            </div>
            <div>
                <PizzasInfo
                    selectedSabores={selectedSabores}
                    setSelectedSabores={setSelectedSabores}
                    observacao={observacao}
                />
            </div>
            <div>
                <Pizzas
                    selectedSabores={selectedSabores}
                    setSelectedSabores={setSelectedSabores}
                    setObservacao={setObservacao}
                />
            </div>
            <div>
                
            </div>
        </div>
    )
}