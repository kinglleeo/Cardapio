import { React, useState, useEffect } from 'react'
import './adicionais.css'
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import Header from '../../../header/Header'

export default function adicionaislanches( ){
    const [dataAdd, setDataAdd] = useState([])
    const { state } = useLocation();
    const { item } = state;

    useEffect(()=>{
        axios
            .get('https://642b23b0d7081590f91d081a.mockapi.io/cardapio')
            .then((getdata)=>{
                setDataAdd(getdata.data)
            });
    },[]);

    return(
    <div>    
        <div>
            <Header/>
        </div>
        <div className='corpo-adicionais'>
                <div className='items-information'>
                    <div className='item1'>
                        <div>{item.nome}</div>
                    </div>
                    <div className='item2'>
                        <div>{item.descricao}</div>
                    </div>
                    <div className='item3'>
                        <div>R$ {item.valor}</div>
                    </div>
                </div>
                <div className='itemAdd'>
                    {dataAdd.map((data)=>
                        <div key={data.id} className='caixa-add'>
                            <div className='itemAdd1'>
                                <div>{data.nome}</div>
                            </div>
                            <div className='itemAdd2'>
                                <div>{data.valor}</div>
                            </div>
                        </div>
                    )}
                </div>  
                  
        </div>
    </div>
    )
}