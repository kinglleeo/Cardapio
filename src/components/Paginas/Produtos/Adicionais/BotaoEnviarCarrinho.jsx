import { React, useEffect, useState } from 'react'
import { useQueryClient } from '@tanstack/react-query';


export default function BotaoEnviarCarrinho({ info, valortotal }){
    const queryClient = useQueryClient();


    


    const item = {
        Nome: info,
        Valor: valortotal,
    }
     
    
    return(
        <div>
            <button> Adicionar ao Carrinho </button>
        </div>
    )
}