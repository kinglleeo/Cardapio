import { React, useState, useEffect } from 'react'
import { api } from '../../../../../conecções/api';
import { useLocation } from 'react-router-dom';
import './pizzas.css'
import { formCurrency } from '../../../../AA-utilidades/numeros';
import { Selecionadores } from './metodosPizzas';

export default function Pizzas(){
    const [saboresPizzas, setSaboresPizzas] = useState([]);
    const { state } = useLocation();
    const { itemPizza } = state;
    const [selectedSabores, setSelectedSabores] = useState([]);
    console.log(selectedSabores)

    useEffect(()=>{
        api
            .get(`/listaSaboresPizza/${itemPizza.ID}`)
            .then((getdata)=>{
                const data = getdata.data.map((item, index)=>({
                    ...item,
                    ID: index + 1,
                }))
                    setSaboresPizzas(data);               
            });
    }, []);
    
    return(
        <div>
            <div className='pizza-List-Top'>
                <div>Min {itemPizza.QTD_MININO}</div>
                <div>Max {itemPizza.QTD_MAXIMO}</div>
            </div>
            <div className='pizza-List-Main'>
                {saboresPizzas.map((Sabor, index)=>
                    <div className='pizza-List'>
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
                                            selectedSabores={selectedSabores}
                                            setSelectedSabores={setSelectedSabores}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )


}