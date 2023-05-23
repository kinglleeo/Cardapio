import { React, useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addToCart } from '../../../../redux/cartSlice';
import '../../../../Styles/StyleForAdicionais.css'
import { useQueryClient } from '@tanstack/react-query';

export default function BotaoEnviarCarrinho({ idProduto, nome, info, valortotal, idGrupo, observacao }){
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const queryClient = useQueryClient();

    const itemComprado = {
        idProduto: idProduto,
        nome: nome,
        descricao: info,
        valor: valortotal,
        Observacao: observacao
    }

    const AdicionarCart=(itemComprado)=>{
        const cachedData = queryClient.clear(['listaOpcionais', idGrupo, idProduto])
        dispatch(addToCart(itemComprado))
        navigate('/Carrinho')
    }
    
    return(
        <div className='card-btn-add'>
            <button className='btn-add' onClick={() => AdicionarCart(itemComprado)}> Adicionar ao Carrinho </button>
        </div>
    )
}