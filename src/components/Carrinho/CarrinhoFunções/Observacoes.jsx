import React from 'react'
import '../../../Styles/StyleCarBar.css'
export default function Observacoes({ setObservacaoCart }){
    return(
        <div className='observacoesMain'>
            <div className='observacoesTitulo'>
                <div className='observacoesIcone'></div>
                <div className='observacoesNome'> Observações </div>
            </div>
            <div className='observacoesCart'>
                <textarea className='observacoesCart-text' placeholder='Descreva suas observções...' onChange={e => setObservacaoCart(e.target.value)}></textarea>
            </div>
        </div>
    )
}