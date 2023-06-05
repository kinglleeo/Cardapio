import { React, useState } from 'react'
import Header from '../../../header/Header'
import PizzasSabores from './SaboresPizza/PizzasSabores'
import AdicionaisPizza from './AdicionaisPizza/AdicionaisPizza'

export default function MainPizza(){
    
    return(
        <div>
            <div>
                <Header />
            </div>
            <div>
                <PizzasSabores/>
            </div>
            <div>
                <AdicionaisPizza/>
            </div>
            <div>
                
            </div>
        </div>
    )
}