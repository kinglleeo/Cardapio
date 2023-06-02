import { React, useState, useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate, useLocation } from 'react-router-dom';
import { addToCart } from '../../../../../redux/cartSlice';

export default function BtnPizzaAddCar({ selectedSabores, valorTotal, observacao }){
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { state } = useLocation();
    const { data } = state;
    

    const Descricao = selectedSabores.PRODUTO
    
    const itemComprado = {
        idProduto: data.ID,
        nome: data.TAMANHO,
        descricao: Descricao,
        valor: valorTotal,
        Observacao: observacao
    }

    const handleAddCar=(itemComprado)=>{
        dispatch(addToCart(itemComprado))
        navigate('/Carrinho')
    }


    return(
        <div>
            <button onClick={()=> handleAddCar(itemComprado)} > Adicionar ao Carrinho </button>
        </div>
    )
}