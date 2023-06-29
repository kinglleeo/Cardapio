import { React, useState } from 'react'
import AdicionaisInfo from './AdicionaisFuncoes/AdicionaisInfo'
import AdicionaisTamanho from '../AdicionaisTamanho/AdicionaisTamanho'
import GrupoAdicionais from './AdicionaisFuncoes/GrupoAdicionais'
import Observacoes from './AdicionaisFuncoes/Observacoes'
import { useLocation } from 'react-router-dom';
import TopoHeaderBar from '../../../header/TopoHeaderBar'
import Footer from '../../../Footer/Footer'
import BtnCarrinho from './BtnCarrinho'
import '../../../../Styles/Styles.css'

export default function AdicionaisMain(){
    const { state } = useLocation();
    //grupos
    const { grupo } = state;
    //subgrupos
    const {subGrupo} = state;
    //produto 
    const { data } = state;
    //adicionais
    const [adicionalSelecionado, setAdicionalSelecionado] = useState([]);
    const [valorTotalItem, setValorTotalItem] = useState(0);
    const [valorTotalCusto, setValorTotalCusto] = useState(0);
    //AdicionaisTamanho
    const [tamanhoEscolhido, setTamanhoEscolhido] = useState([]);
    const [existeTamanho, setExisteTamanho] = useState(false);
    //observaçoes
    const [observacoes, setObservacao] = useState('');
    
    const [ID_GRUPO_OPCOES, setID_GRUPO_OPCOES] = useState('');

    const [totalCompra, setTotalCompra] = useState('');
    const [custoCompra, setCustoCompra] = useState('');

    
    return(
        <div className='pagina'>
            <div className='Main'>
            <div>
                <TopoHeaderBar/>
            </div>
            <div>
                <AdicionaisInfo
                    //Info Produtos
                        Produto={data}
                        grupo={grupo}
                    //Info Adicionais
                        ID_GRUPO_OPCOES={ID_GRUPO_OPCOES}
                        adicionalSelecionado={adicionalSelecionado}
                        valorTotalItem={valorTotalItem}
                        valorTotalCusto={valorTotalCusto}
                    //Info Adicionais Tamanho
                        existeTamanho={existeTamanho}
                        tamanhoEscolhido={tamanhoEscolhido}
                    //Observacoes
                        observacoes={observacoes}
                    //
                    setTotalCompra={setTotalCompra}
                    setCustoCompra={setCustoCompra}
                />
            </div>
            <div>
                <AdicionaisTamanho
                    setTamanhoEscolhido={setTamanhoEscolhido}
                    setExisteTamanho={setExisteTamanho}
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
                    PIZZA_MISTA={grupo.PIZZA_MISTA}
                    ID_GRUPO_OPCOES={ID_GRUPO_OPCOES}
                    adicionalSelecionado={adicionalSelecionado}
                    totalCompra={totalCompra}
                    tamanhoEscolhido={tamanhoEscolhido}
                    observacoes={observacoes}
                    totalCusto={custoCompra}
                    existeTamanho={existeTamanho}
                />
            </div>
            </div>
            <div>
                <Footer/>
            </div>
        </div>
    )
}