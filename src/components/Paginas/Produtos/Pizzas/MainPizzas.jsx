import { React, useState } from 'react'
import Header from '../../../header/Header'
import PizzasSabores from './SaboresPizza/PizzasSabores'
import GrupoAdicionais from '../Adicionais/GrupoAdicionais'
import Observacoes from '../Adicionais/Observacoes'
import PizzasInfo from './PizzasInfo'
import { useLocation } from 'react-router-dom';
import BtnCarrinho from './BtnCarrinho-Pizza'
import Footer from '../../../Footer/Footer'
import './SaboresPizza/pizzas.css'
import AdicionalHeaderBar from '../Adicionais/AdicionarHeaderBar'

export default function MainPizza(){
    const { state } = useLocation();
    //Info Pizza
    const { PIZZA_MISTA } = state;
    const { data } = state;
    //saboresPizza
    const [SaboresSelecionados, setSaboresSelecionados] = useState([]);
    const [valorTotalSabores, setValorTotalSabores] = useState('');
    const [valorTotalCustoPizza, setValorTotalCustoPizza] = useState(0)
    const [quantidadeTotal, setQuantidadeTotal] = useState(0)
    //Adicionais
    const [adicionalSelecionado, setAdicionalSelecionado] = useState([]);
    const [valorTotalItem, setValorTotalItem] = useState(0);
    const [valorTotalCusto, setValorTotalCusto] = useState(0);
    const [ID_GRUPO_OPCOES, setID_GRUPO_OPCOES] = useState('');
    //observaçoes
    const [observacoes, setObservacao] = useState('');

    const [totalCompra, setTotalCompra] = useState('');
    const [custoCompra, setCustoCompra] = useState('');


    return(
        <div>
            <div>
                <AdicionalHeaderBar/>
            </div>
            <div className='MainPizza'>
            <div>
                <PizzasInfo
                    //Info Pizzas
                        Produto={data}
                        data={data}
                        PIZZA_MISTA={PIZZA_MISTA}
                    //info Sabores
                        SaboresSelecionados={SaboresSelecionados}
                        valorTotalSabores={valorTotalSabores}
                        valorTotalCustoPizza={valorTotalCustoPizza}
                        quantidadeTotal={quantidadeTotal}
                    //Info Adicionais
                        ID_GRUPO_OPCOES={ID_GRUPO_OPCOES}
                        adicionalSelecionado={adicionalSelecionado}
                        valorTotalItem={valorTotalItem}
                        valorTotalCusto={valorTotalCusto}
                    //info observacoes
                        observacoes={observacoes}
                        setTotalCompra={setTotalCompra}
                        setCustoCompra={setCustoCompra}
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
            <div>
                <BtnCarrinho
                    Produto={data}
                    SaboresSelecionados={SaboresSelecionados}
                    adicionalSelecionado={adicionalSelecionado}
                    observacoes={observacoes}
                    totalCompra={totalCompra}
                    totalCusto={custoCompra}
                    PIZZA_MISTA={PIZZA_MISTA}
                    quantidadeTotal={quantidadeTotal}
                    ID_GRUPO_OPCOES={ID_GRUPO_OPCOES}
                />
            </div>
            </div>
        </div>
    )
}