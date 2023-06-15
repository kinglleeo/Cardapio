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
    const [valorTotalCustoPizza, setValorTotalCustoPizza] = useState(0)
    const [quantidadeTotal, setQuantidadeTotal] = useState(0)
    //Adicionais
    const [adicionalSelecionado, setAdicionalSelecionado] = useState([]);
    const [valorTotalItem, setValorTotalItem] = useState(0);
    const [valorTotalCusto, setValorTotalCusto] = useState(0);
    //observaçoes
    const [observacoes, setObservacao] = useState('');

    const [ID_GRUPO_OPCOES, setID_GRUPO_OPCOES] = useState('');

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
                    observacoes={observacoes}
                    ID_GRUPO_OPCOES={ID_GRUPO_OPCOES}
                    tipo={tipo}
                    data={data}
                    valorTotalItem={valorTotalItem}
                    valorTotalCusto={valorTotalCusto}
                    valorTotalCustoPizza={valorTotalCustoPizza}
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
                    setValorTotalCustoPizza={setValorTotalCustoPizza}
                />
            </div>
            <div>
                <GrupoAdicionais
                    adicionalSelecionado={adicionalSelecionado}
                    setAdicionalSelecionado={setAdicionalSelecionado}
                    setID_GRUPO_OPCOES={setID_GRUPO_OPCOES}
                    setValorTotalCusto={setValorTotalCusto}
                    setValorTotalItem={setValorTotalItem}
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