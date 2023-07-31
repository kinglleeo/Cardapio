import { React } from 'react'
import '../../../../../Styles/StyleForAdicionais.css'
export default function Observacoes({ setObservacao }){


    return(
    <div>
        <div>
            <div className='titulo-observacoes'> OBSERVAÇÕES </div>
        </div>
        <div className='ObservacoesAdicionais-box'>
            <textarea className='ObservacoesAdicionais-text'
                placeholder='Descreva suas Observações...'
                onChange={e => setObservacao(e.target.value)}
            />
        </div>
    </div>
    )
}