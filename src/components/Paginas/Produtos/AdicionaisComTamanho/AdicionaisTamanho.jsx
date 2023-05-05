import axios from 'axios';
import { React, useState, useEffect } from 'react'
import './styleAddP.css'
import {BiDish} from 'react-icons/bi'
import { formCurrency } from '../../../AA-utilidades/numeros';


export default function AdicionaisTamanho({ selectedTamanho, setSelectedTamanho }){
    const [produto, setProduto] = useState([]);

    useEffect(()=>{
        axios
            .get('https://642b23b0d7081590f91d081a.mockapi.io/cardapio')
            .then((getdata)=>{
                setProduto(getdata.data);
            });
    }, []);

    const handletamanho =(data)=>{
        setSelectedTamanho(data)
    };

    return(
        <div className='tamanho-body'>
            <label className='titulo-tamanhos'>Tamanhos</label>
                <div className='list-tamanhos'>
                        {produto.map((data)=>
                        <div className='card-tamanhos'>
                                <div className='card-i-tamanhos'>
                                        <input type='radio' name='radio-input-t' className='input-t' onClick={()=> handletamanho(data)} />
                                    <div className='card-info-tamanhos'>
                                        <div className='card-tamanho-name'>
                                            <div className=''>{data.tamanho}</div>
                                        </div>
                                        <div className='card-tamanho-valor'>
                                            <div className=''>Valor: </div>
                                            <div className=''>{formCurrency.format(data.valor)}</div>
                                        </div>
                                        <div>
                                            <div className='iconeprato'><BiDish size={50} /></div>
                                        </div>
                                    </div>
                                </div>
                        </div>
                        )}
                    
                </div>
        </div>
    )
}