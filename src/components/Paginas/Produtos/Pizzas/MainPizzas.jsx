import { React, useState } from 'react'
import Header from '../../../header/Header'
import PizzasSabores from './SaboresPizza/PizzasSabores'
import AdicionaisPizza from './AdicionaisPizza/AdicionaisPizza'
import GrupoAdicionais from '../Adicionais/GrupoAdicionais'
import Observacoes from '../Adicionais/Observacoes'

export default function MainPizza(){
    const [descricao, setDescricao] = useState('');
    const [totalValue, setTotalValue] = useState('');
    const [observacoes, setObservacao] = useState('');

    return(
        <div>
            <div>
                <Header />
            </div>
            <div>
                <PizzasSabores/>
            </div>
            <div>
                <AdicionaisPizza/>
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