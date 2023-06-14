import { React } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { addToCart } from '../../../../redux/cartSlice'
import { useQueryClient } from '@tanstack/react-query';

export default function BtnCarrinho({ custoTotal, tipo, Produto, adicionalSelecionado, tamanhoEscolhido, observacoes, totalCompra, ID_GRUPO_OPCOES }){
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const queryClient = useQueryClient();

    const item ={
        produto: Produto,
        adicionalSelecionado: adicionalSelecionado,
        tamanhoEscolhido: tamanhoEscolhido,
        observacoes: observacoes,
        totalCompra: totalCompra,
        tipo: tipo,
        custoTotal: custoTotal
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