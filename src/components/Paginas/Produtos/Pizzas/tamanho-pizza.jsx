import { React, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function TamanhoPizaa(){
    const [Produto, setProduto] = useState([]);
    const navigate = useNavigate();

    useEffect(()=>{
        axios
            .get('https://642b23b0d7081590f91d081a.mockapi.io/cardapio')
            .then((getdata)=>{
                setProduto(getdata.data);
            });
    },[]);

    const handleSetTamanho = (tamanhopizza)=>{
        navigate('/Pizzas', {state: { tamanhopizza }});
    };

    return(
        <div className='caixa-lista' id='pizzas'>
            <label className='titulo-lista'>PIZZAS</label>
            {Produto.map((tamanhopizza)=>
                <div className='caixa-css'>
                    <div className='caixa-items' key={tamanhopizza.id}>
                        <div className='caixa-1'>
                            <div className='item-nome'>{tamanhopizza.tamanho}</div>
                            <div className='item-descricao'>{tamanhopizza.quantia}</div>
                        </div>
                        <div className='caixa-2'>
                            <div className='item-valor'>{tamanhopizza.valor}</div>
                            <div><button onClick={(()=> handleSetTamanho(tamanhopizza))}> Tamanho </button></div>
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