import { React, useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { addToCart } from '../../../../redux/cartSlice'
import { useQueryClient } from '@tanstack/react-query';
import '../../../../Styles/StyleForAdicionais.css'
import { formCurrency } from '../../../AA-utilidades/numeros';

export default function BtnCarrinho({ totalCusto, PIZZA_MISTA, Produto, adicionalSelecionado, tamanhoEscolhido, observacoes, totalCompra, ID_GRUPO_OPCOES, existeTamanho }){
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const queryClient = useQueryClient();
    const [btnDesabilitado, setBtnDesabilitado] = useState(false)

    const item ={
        produto: Produto,
        adicionalSelecionado: adicionalSelecionado,
        tamanhoEscolhido: tamanhoEscolhido,
        observacoes: observacoes,
        totalCompra: totalCompra,
        tipo: PIZZA_MISTA,
        custoTotal: totalCusto,
    }
    
    const handleCarrinho=(item, ID_GRUPO_OPCOES)=>{
        dispatch(addToCart(item))
        const cachedData = queryClient.clear(['listaAdicionais', ID_GRUPO_OPCOES])
        navigate('/Carrinho')
    }

    useEffect(() => {
        if (existeTamanho !== true) {
          setBtnDesabilitado(false);
        } else if (existeTamanho === true) {
          if (Array.isArray(tamanhoEscolhido)) {
            setBtnDesabilitado(true);
          } else {
            setBtnDesabilitado(false);
          }
        }
      }, [existeTamanho, tamanhoEscolhido]);

    return(
      <div className='barra-pagarAdicionais'>
        <div className='pagarAdicionais-text'>
          <button disabled={btnDesabilitado === true} onClick={()=> handleCarrinho(item, ID_GRUPO_OPCOES)} className='btn-adicionarAdicionais'> ADICIONAR </button>
        </div>
        <div className='pagarAdicionais-valor'>{formCurrency.format(totalCompra)}</div>   
      </div>
    )
}