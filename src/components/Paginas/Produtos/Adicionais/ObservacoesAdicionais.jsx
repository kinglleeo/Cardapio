import '../../../../Styles/StyleForAdicionais.css'


export default function ObservacoesAdicionais({ setObservacao }){
        
    return(
        <div className="ObservacoesAdicionais">
            <div className='ObservacoesAdicionais-box'>
                <textarea className='ObservacoesAdicionais-text'
                    placeholder='Descreva suas Observações...'
                    onChange={e => setObservacao(e.target.value)}
                />
            </div>
        </div>
    )
}