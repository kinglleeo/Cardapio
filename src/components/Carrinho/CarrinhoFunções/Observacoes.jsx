import { React, useEffect, useState } from 'react'
import '../../../Styles/StyleCarrinho.css'

export default function Observacoes({ setObservacaoCart }){
    const [dados, setDados] = useState([]);
    const tipoComanda = dados.delivery

    useEffect(()=>{
        const dados = localStorage.getItem('dados')
            setDados(JSON.parse(dados))
    }, [])
   

    return(
        <>
        {tipoComanda === "DELIVERY" ?(
            <div className='observacoesMain'>
                <div className='observacoesTitulo'>
                    <div className='observacoesIcone'></div>
                    <div className='observacoesNome'> Observações </div>
                </div>
                <div className='observacoesCart'>
                    <textarea className='observacoesCart-text' placeholder='Descreva suas observções...' onChange={e => setObservacaoCart(e.target.value)}></textarea>
                </div>
            </div>
        ) :null}
        </>
    )
}