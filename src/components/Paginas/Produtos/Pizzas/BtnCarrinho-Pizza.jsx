import { React, useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { addToCart } from '../../../../redux/cartSlice'
import { useQueryClient } from '@tanstack/react-query';
import { formCurrency } from '../../../AA-utilidades/numeros';

export default function BtnCarrinho({ totalCusto, Produto, PIZZA_MISTA, SaboresSelecionados, adicionalSelecionado, observacoes, totalCompra, quantidadeTotal, ID_GRUPO_OPCOES }){
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const queryClient = useQueryClient();

    const item ={
        produto: Produto,
        adicionalSelecionado: adicionalSelecionado,
        SaboresSelecionados:SaboresSelecionados,
        observacoes: observacoes,
        totalCompra: totalCompra,
        tipo: PIZZA_MISTA,
        custoTotal: totalCusto
    }

    const handleCarrinho=(item, ID_GRUPO_OPCOES)=>{
        dispatch(addToCart(item))
            const cachedData = queryClient.clear(['listaAdicionais', ID_GRUPO_OPCOES])
        navigate('/Carrinho')
    }
    return(
        <div className='barra-pagarAdicionais'>
            <div className='pagarAdicionais-text'>
                <button disabled={quantidadeTotal === 0} onClick={()=> handleCarrinho(item, ID_GRUPO_OPCOES)} className='btn-adicionarAdicionais'> ADICIONAR </button>
            </div>
            <div className='pagarAdicionais-valor'> {formCurrency.format(totalCompra)} </div>
        </div>
    )
}