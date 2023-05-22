import { React, useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addToCart } from '../../../../redux/cartSlice';
import './BotaoEnviarCarrinho.css'

export default function BotaoEnviarCarrinho({ id, nome, info, valortotal }){
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const Descricao = info
    const Valor = (valortotal)
    
    
    const itemComprado = {
        id: id,
        nome: nome,
        descricao: info,
        valor: valortotal
    }
    const AdicionarCart=(itemComprado)=>{
        dispatch(addToCart(itemComprado))
        navigate('/Carrinho')
    }
    
    return(
        <div className='card-btn-add'>
            <button className='btn-add' onClick={() => AdicionarCart(itemComprado)}> Adicionar ao Carrinho </button>
        </div>
    )
}