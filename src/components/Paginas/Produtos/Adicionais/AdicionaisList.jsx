import axios from 'axios';
import { React, useState, useEffect } from 'react'
import './AdicionaisList.css'
import { formCurrency } from '../../../AA-utilidades/numeros';

export default function AdicionaisList(){
    const [adicionais, setAdicionais] = useState([]);

    useEffect(()=>{
        axios
            .get('https://642b23b0d7081590f91d081a.mockapi.io/adicionais')
            .then((getdata)=>{
                setAdicionais(getdata.data);
            });
    }, []);

    return(
        <div>
            <div className='AdicionaisList'>
                {Array.isArray(adicionais) ? adicionais.map((item)=>
                    <div className='Card-Adicionais'>
                        <div className='Card-Adicionais-inner'>
                            <div className='Card-Adicionais-Descricao'>
                                <div className='box-descricao-1'>
                                    <div className='Adicional-nome'>{item.nome}</div>
                                    <div className='Adicional-descricao'>{item.descricao}</div>
                                </div>
                                <div className='box-descricao-2'>
                                    <div className='adicional-valor'>{formCurrency.format(item.valor)}</div>
                                </div>
                            </div>
                            <div className='Card-Adicionais-Botoes'></div>
                        </div>
                    </div>
                ) : null}   
            </div> 
        </div>
    )
}