import { React, useState } from 'react'
import Header from '../../../header/Header'
import PizzasSabores from './SaboresPizza/PizzasSabores'
import GrupoAdicionais from '../Adicionais/GrupoAdicionais'
import Observacoes from '../Adicionais/Observacoes'
import PizzasInfo from './PizzasInfo'
import { useLocation } from 'react-router-dom';

export default function MainPizza(){
    const { state } = useLocation();
    //grupos
    const { tipo } = state;
    //tamanhoPizza
    const { data } = state;
    //saboresPizza
    const [valorTotalSabores, setValorTotalSabores] = useState('');
    const [SaboresSelecionados, setSaboresSelecionados] = useState([]);
    //Adicionais
    const [adicionalSelecionado, setAdicionalSelecionado] = useState([]);
    const [totalValue, setTotalValue] = useState('');
    //observaçoes
    const [observacoes, setObservacao] = useState('');

    const [ID_GRUPO_OPCOES, setID_GRUPO_OPCOES] = useState('');
    
    const [quantidadeTotal, setQuantidadeTotal] = useState(0);

    const [adicionaisTotais, setAdicionaisTotais] = useState('');

    return(
        <div>
            <div>
                <Header />
            </div>
            <div>
                <PizzasInfo
                    Produto={data}
                    valorTotalSabores={valorTotalSabores}
                    SaboresSelecionados={SaboresSelecionados}
                    adicionalSelecionado={adicionalSelecionado}
                    totalValue={totalValue}
                    observacoes={observacoes}
                    ID_GRUPO_OPCOES={ID_GRUPO_OPCOES}
                    tipo={tipo}
                    data={data}
                    quantidadeTotal={quantidadeTotal}
                />
            </div>
            <div>
                <PizzasSabores
                    setValorTotalSabores={setValorTotalSabores}
                    setSaboresSelecionados={setSaboresSelecionados}
                    SaboresSelecionados={SaboresSelecionados}
                    
                    quantidadeTotal={quantidadeTotal}
                    setQuantidadeTotal={setQuantidadeTotal}
                />
            </div>
            <div>
                <GrupoAdicionais
                    setAdicionalSelecionado={setAdicionalSelecionado}
                    setTotalValue={setTotalValue}
                    setID_GRUPO_OPCOES={setID_GRUPO_OPCOES}
                    setAdicionaisTotais={setAdicionaisTotais}
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