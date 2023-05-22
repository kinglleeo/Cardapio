import { React, useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addToCart } from '../../../../redux/cartSlice';
import './BotaoEnviarCarrinho.css'
import { useQueryClient } from '@tanstack/react-query';

export default function BotaoEnviarCarrinho({ id, nome, info, valortotal, idGrupo }){
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const Descricao = info
    const Valor = valortotal
    
  const queryClient = useQueryClient();

    const itemComprado = {
        idProduto: id,
        nome: nome,
        descricao: info,
        valor: valortotal
    }

    const AdicionarCart=(itemComprado)=>{
        const cachedData = queryClient.clear(['listaOpcionais', idGrupo, id])
        dispatch(addToCart(itemComprado))
        navigate('/Carrinho')
    }
    
    return(
        <div className='card-btn-add'>
            <button className='btn-add' onClick={() => AdicionarCart(itemComprado)}> Adicionar ao Carrinho </button>
        </div>
    )
}