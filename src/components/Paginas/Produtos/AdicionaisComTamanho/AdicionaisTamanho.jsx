import axios from 'axios';
import { React, useState, useEffect } from 'react'
import './styleAddP.css'
import { Tamanho } from './OperacoesPorcoes';

export default function AdicionaisTamanho({ selectedTamanho, setSelectedTamanho }){
    const [produto, setProduto] = useState([]);

    useEffect(()=>{
        axios
            .get('https://642b23b0d7081590f91d081a.mockapi.io/cardapio')
            .then((getdata)=>{
                setProduto(getdata.data);
            });
    }, []);

    return(
        <div className='tamanho-body'>
            <div className='tamanh-items'>
                <div className='tamanho-item'>
                    {produto.map((data)=>
                        <div className='tamanho-caixa'>
                            <div>{data.tamanho}</div>
                            <div>{data.valor}</div>
                            <div>
                                <Tamanho
                                    data={data}
                                    selectedTamanho={selectedTamanho}
                                    setSelectedTamanho={setSelectedTamanho}
                                />
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}