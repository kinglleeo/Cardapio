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
    const [btnDesabilitado, setBtnDesabilitado] = useState(true)
    const [newTamanho, setNewTamanho]= useState('');
 
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
        if (existeTamanho === true) {
          if(tamanhoEscolhido !== null){
            setBtnDesabilitado(false);
          } else {
            setBtnDesabilitado(true);
          }
        } else {
          setBtnDesabilitado(false);
        }
        
      }, [existeTamanho, tamanhoEscolhido]);

    
    return(
      <button className='btnPagarAdicionais' onClick={()=> handleCarrinho(item, ID_GRUPO_OPCOES)} disabled={btnDesabilitado === true}>
        <div className='barra-pagarAdicionais'>
          <div className='pagarAdicionais-text'>
            <div className='btn-adicionarAdicionais'> ADICIONAR </div>
          </div>
          <div className='pagarAdicionais-valor'>{formCurrency.format(totalCompra)}</div>   
        </div>
      </button>
    )
}