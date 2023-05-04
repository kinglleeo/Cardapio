import axios from 'axios';
import { React, useState, useEffect } from 'react'
import './styleAddP.css'
import {BiDish} from 'react-icons/bi'


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
                                <form className='card-i-tamanhos'>
                                        <input type='radio' className='input-t' name='radio-input-t' onChange={()=> handletamanho(data)}/>
                                    <div className='card-info-tamanhos'>
                                        <div className='card-tamanho-name'>
                                            <div className=''>{data.tamanho}</div>
                                        </div>
                                        <div className='card-tamanho-valor'>
                                            <div className=''>Valor</div>
                                            <div className=''>R$ {data.valor}</div>
                                        </div>
                                        <div>
                                            <div className='iconeprato'><BiDish size={50} /></div>
                                        </div>
                                    </div>
                                </form>
                        </div>
                        )}
                    
                </div>
        </div>
    )
}