import { React, useState, useEffect } from 'react'
import axios from 'axios'
import '../Style.css'
import { useNavigate } from 'react-router-dom';

export default function Lanhes(){
    const [dataLanches, setDataLanches] = useState([]);
    const navigate = useNavigate();

    useEffect(()=>{
        axios
            .get('https://642b23b0d7081590f91d081a.mockapi.io/bebidas')
            .then((getdata)=>{
                setDataLanches(getdata.data)
            })
    })

    localStorage.clear()

    const handleAddCart =(sabor, descricao, valor) =>{
        localStorage.setItem('nomeProduto', sabor) 
        localStorage.setItem('descricaoProduto', descricao)  
        localStorage.setItem('valorProduto', valor)
        navigate('/Carrinho')
    }

    return(
        <div className='caixa-lista' id='lista1'>
                    <label className='titulo-lista'>LANCHES</label>
                {dataLanches.map((data)=>
                    <div className='caixa-css'>
                        <div className='caixa-items' key={data.id}>
                            <div className='caixa-1'>
                                <div className='item-nome'>{data.sabor}</div>
                                <div className='item-descricao'>{data.descricao}</div>
                            </div>
                            <div className='caixa-2'>
                                <div className='item-valor'><label>Preço</label>R${data.valor}</div>
                                <div className='item-botao'><button className='botao-adicionar' onClick={()=> handleAddCart(data.sabor, data.descricao, data.valor)}> adicionar </button></div>
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