import { React, useState, useEffect } from 'react'
import axios from 'axios'
import '../../Style.css'
import SelecionarSabores from './selecionarSabores'

export default function tradicionais(){
    const [PizzasTradicionais, setPizzasTradicionais] = useState([]);

    useEffect(()=>{
        axios
            .get('https://642b23b0d7081590f91d081a.mockapi.io/bebidas')
            .then((getdata)=>{
                setPizzasTradicionais(getdata.data);
            });
    },[]);


    return(
        <div className='caixa-lista' id='tradicionais'>
            <label className='titulo-lista'>TRADICIONAIS</label>
            {PizzasTradicionais.map((data)=>
                <div className='caixa-css'>
                    <div className='caixa-items' key={data.id}>
                        <div className='caixa-1'>
                            <div className='item-nome'>{data.sabor}</div>
                            <div className='item-descricao'>{data.descricao}</div>
                        </div>
                        <div className='caixa-2'>
                        <div className='item-botao'>
                                <SelecionarSabores/>
                            </div>
                        </div>
                        <div className='caixa-3'>
                            <div className='item-img'></div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}