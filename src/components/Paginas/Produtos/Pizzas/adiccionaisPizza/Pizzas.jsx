import { React, useState, useEffect } from 'react'
import { api } from '../../../../../conecções/api';
import { useLocation } from 'react-router-dom';
import './pizzas.css'
import { formCurrency } from '../../../../AA-utilidades/numeros';
import { Selecionadores } from './metodosPizzas';
import ObservacoesPizza from './ObservacoesPizza'
import ListaSabores from './ListaSabores'

export default function Pizzas({ selectedSabores, setSelectedSabores, setObservacao }){
    const { state } = useLocation();
    const { data } = state;

    return(
        <div>
            <div className='pizza-List-Top'>
                <div>Min {data.QTD_MININO}</div>
                <div>Max {data.QTD_MAXIMO}</div>
            </div>
            <div>
                <ListaSabores/>
            </div>
            <div>
                <ObservacoesPizza
                    setObservacao={setObservacao}
                />
            </div>
            
        </div>
    )


}