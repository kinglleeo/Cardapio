import { React, useState } from 'react'
import Header from '../../../header/Header'
import AdicionaisInfo from './AdicionaisInfo'
import AdicionaisTamanho from '../AdicionaisTamanho/AdicionaisTamanho'
import GrupoAdicionais from './GrupoAdicionais'
import Observacoes from './Observacoes'
import { useLocation } from 'react-router-dom';
import AdicionarHeaderBar from './AdicionarHeaderBar'

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

    
    return(
        <div>
            <div>
                <AdicionarHeaderBar/>
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
        </div>
    )
}