import { React, useState } from 'react'
import TopoHeaderBar from '../../../header/TopoHeaderBar'
import PizzasSabores from './SaboresPizza/PizzasSabores'
import GrupoAdicionais from '../Adicionais/AdicionaisFuncoes/GrupoAdicionais'
import Observacoes from '../Adicionais/AdicionaisFuncoes/Observacoes'
import PizzasInfo from './PizzasInfo'
import { useLocation } from 'react-router-dom';
import BtnCarrinho from './BtnCarrinhoPizza'
import Footer from '../../../Footer/Footer'
import '../../../../Styles/StylePizzas.css'
import '../../../../Styles/Styles.css'
import Topo from '../../../AA-utilidades/Topo'
import BarraCarrinhoAtalho from '../../../Carrinho/BarraCarrinhoAtalho'


export default function MainPizza(){
    const { state } = useLocation();
    //Info Pizza
    const { PIZZA_MISTA } = state;
    const { data } = state;
    //saboresPizza
    const [listaSaboresPizzas, setListaSaboresPizzas] = useState([]);
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
        <div className='pagina'>
        <div className='Main'>
            <div>
                <TopoHeaderBar/>
            </div>
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

                        listaSaboresPizzas={listaSaboresPizzas}
                        setListaSaboresPizzas={setListaSaboresPizzas}
                />
            </div>
            <div>
                <PizzasSabores
                    setValorTotalSabores={setValorTotalSabores}
                    setSaboresSelecionados={setSaboresSelecionados}
                    SaboresSelecionados={SaboresSelecionados}
                    listaSaboresPizzas={listaSaboresPizzas}
                    setListaSaboresPizzas={setListaSaboresPizzas}
                    
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
            <div>
                <Topo/>
            </div>
            <div>
                <BarraCarrinhoAtalho/>
            </div>
        </div>
            <Footer/>
        </div>
    )
}