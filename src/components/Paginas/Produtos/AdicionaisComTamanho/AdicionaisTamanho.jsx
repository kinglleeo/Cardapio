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
                            <Tamanho
                                data={data}
                                selectedTamanho={selectedTamanho}
                                setSelectedTamanho={setSelectedTamanho}
                            />
                        </div>
                    </div>
                </div>
                )}
            </div>
        </div>
    )
}