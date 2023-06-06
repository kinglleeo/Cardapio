import { React, useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { addToCart } from '../../../../redux/cartSlice'
import { useQueryClient } from '@tanstack/react-query';

export default function BtnCarrinho({ tipo, Produto, SaboresSelecionados, adicionalSelecionado, tamanhoEscolhido, observacoes, totalCompra, ID_GRUPO_OPCOES }){
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const queryClient = useQueryClient();

    
    const item ={
        produto: Produto,
        adicionalSelecionado: adicionalSelecionado,
        SaboresSelecionados:SaboresSelecionados,
        tamanhoEscolhido: tamanhoEscolhido,
        observacoes: observacoes,
        totalCompra: totalCompra,
        tipo: tipo
    }

    const handleCarrinho=(item, ID_GRUPO_OPCOES)=>{
        dispatch(addToCart(item))
            const cachedData = queryClient.clear(['listaAdicionais', ID_GRUPO_OPCOES])
        navigate('/Carrinho')
    }
    return(
        <div>
             <button onClick={()=> handleCarrinho(item, ID_GRUPO_OPCOES)}>Adicionair</button>
        </div>
    )
}