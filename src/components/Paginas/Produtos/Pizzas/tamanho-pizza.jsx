import { React, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function TamanhoPizaa(){
    const [produto, setProduto] = useState([]);
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
        <div className='lista-items' id='pizzas'>
                    <label className='titulo-lista'>Pizzas</label>
            {produto.map((tamanhopizza)=>  
                <div className="carde">
                    <div className="circle"></div>
                            <div className="carde-inner">
                                <div className='caixa-pro'>
                                    <div className='caixa-pro-1'> 
                                        <div className='item-f-nome'>{tamanhopizza.tamanho}</div>
                                        <div className='item-f-descricao'>{tamanhopizza.descricao}</div>
                                    </div>
                                    <div className='caixa-pro-2'>
                                        <div className='item-f-valor'>
                                            <div>Valor</div>
                                            <div>R$ {tamanhopizza.valor}</div>
                                        </div>
                                        <div className='item-f-btn'>
                                            <button onClick={(()=> handleSetTamanho(tamanhopizza))}> Tamanho </button>
                                        </div>
                                    </div>
                                    <div className='caixa-pro-3'>
                                        <div className='item-f-img'></div>
                                    </div>
                                </div>
                            </div>
            </div>
            )}    
        </div>
    )
}