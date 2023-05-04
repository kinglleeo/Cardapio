import axios from 'axios';
import { React, useState, useEffect } from 'react'
import './styleAddP.css'
import {api} from '../../../../conecções/api'

export default function AdicionaisTamanho({ selectedTamanho, setSelectedTamanho }){
    const [produto, setProduto] = useState([]);

    useEffect(()=>{
        api
            .get('/cardapio')
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
            <div className='caixa-00'>
                {produto.map((data)=>
                    <div className='caixa-1111'>
                        <div className='bloco-items-tamanho'>
                            <div className='item-tamanho-1'>
                                <div>{data.tamanho}</div>
                            </div>
                            <div className='item-tamanho-2'>
                                <div>Valor</div>
                                <div> R$ {data.valor}</div>
                            </div>
                            <div className='item-tamanho-3'>
                                <div className=''>
                                    <input type='radio'
                                        name='input-t'
                                        onClick={()=> handletamanho(data)}
                                    />
                                </div>
                            </div>
                        </div>
                </div>
                )}
            </div>
        </div>
    )
}