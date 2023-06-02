import { React, useState, useEffect } from 'react'
import { api } from '../../../../../conecções/api';
import { useLocation } from 'react-router-dom';
import './pizzas.css'
import { formCurrency } from '../../../../AA-utilidades/numeros';
import { Selecionadores } from './metodosPizzas';
import ObservacoesPizza from './ObservacoesPizza'

export default function Pizzas({ selectedSabores, setSelectedSabores, setObservacao }){
    const [saboresPizzas, setSaboresPizzas] = useState([]);
    const { state } = useLocation();
    const { data } = state;

    useEffect(()=>{
        api
            .get(`/listaSaboresPizza/${data.ID}`)
            .then((getdata)=>{
                setSaboresPizzas(getdata.data);               
            });
    }, []);
    
    return(
        <div>
            <div className='pizza-List-Top'>
                <div>Min {data.QTD_MININO}</div>
                <div>Max {data.QTD_MAXIMO}</div>
            </div>
            <div className='pizza-List-Main'>
            {Array.isArray(saboresPizzas) ? (
                saboresPizzas.map((Sabor, index)=>
                    <div className='pizza-List' key={Sabor.ID_GRADE}>
                        <div className='pizza-Card'>
                            <div className='pizza-card-interno'>
                                <div className='pizza-info'>
                                    <div className='pizza-nome'>
                                        <div className='pizza-nome-titulo'> Pizza Sabor </div>
                                            <div className='pizza-nome-sabor'> {Sabor.PRODUTO} </div>
                                    </div>
                                    <div className='pizza-valor'>
                                        <div> Valor {formCurrency.format(Sabor.VALOR_VENDA)} </div>
                                    </div>
                                </div>
                                <div className='pizza-input'>   
                                    <div>
                                        <Selecionadores
                                            Sabor={Sabor}
                                            saboresPizzas={saboresPizzas}
                                            selectedSabores={selectedSabores}
                                            setSelectedSabores={setSelectedSabores}
                                            index={index}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )) : null}
            </div>
            <div>
                <ObservacoesPizza
                    setObservacao={setObservacao}
                />
            </div>
            
        </div>
    )


}