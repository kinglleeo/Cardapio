import { React, useState, useEffect } from 'react'
import Header from '../../../header/Header'
import AdicionaisInfo from './AdicionaisInfo'
import AdicionaisTamanho from '../AdicionaisTamanho/AdicionaisTamanho'
import GrupoAdicionais from './GrupoAdicionais'
import Observacoes from './Observacoes'

export default function AdicionaisMain(){
    const [descricao, setDescricao] = useState('');
    const [totalValue, setTotalValue] = useState('');
    const [observacoes, setObservacao] = useState('');

    return(
        <div>
            <div>
                <Header/>
            </div>
            <div>
                <AdicionaisInfo/>
            </div>
            <div>
                <AdicionaisTamanho/>
            </div>
            <div>
                <GrupoAdicionais
                    setDescricao={setDescricao}
                    setTotalValue={setTotalValue}
                />
            </div>
            <div>
                <Observacoes
                    setObservacao={setObservacao}
                />
            </div>
        </div>
    )
}