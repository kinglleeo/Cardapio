import { React, useState } from 'react'
import Header from '../../../header/Header'
import AdicionaisInfo from './AdicionaisInfo'
import AdicionaisTamanho from '../AdicionaisTamanho/AdicionaisTamanho'
import GrupoAdicionais from './GrupoAdicionais'
import Observacoes from './Observacoes'
import { useLocation } from 'react-router-dom';

export default function AdicionaisMain(){
    const { state } = useLocation();
    //tipo
    const { tipo } = state;
    //produto 
    const { data } = state;
    //adicionais
    const [adicionalSelecionado, setAdicionalSelecionado] = useState([]);
    const [totalValue, setTotalValue] = useState('');
    //AdicionaisTamanho
    const [tamanhoEscolhido, setTamanhoEscolhido] = useState([]);
    //observaçoes
    const [observacoes, setObservacao] = useState('');
    
    const [ID_GRUPO_OPCOES, setID_GRUPO_OPCOES] = useState('');

    const [adicionaisTotais, setAdicionaisTotais] = useState('');

    const [totalCusto, setTotalCusto] = useState('');

    return(
        <div>
            <div>
                <Header/>
            </div>
            <div>
                <AdicionaisInfo
                    Produto={data}
                    adicionalSelecionado={adicionalSelecionado}
                    totalValue={totalValue}
                    tamanhoEscolhido={tamanhoEscolhido}
                    observacoes={observacoes}
                    ID_GRUPO_OPCOES={ID_GRUPO_OPCOES}
                    tipo={tipo}
                    adicionaisTotais={adicionaisTotais}
                    totalCusto={totalCusto}
                />
            </div>
            <div>
                <AdicionaisTamanho
                    setTamanhoEscolhido={setTamanhoEscolhido}
                />
            </div>
            <div>
                <GrupoAdicionais
                    adicionalSelecionado={adicionalSelecionado}
                    setAdicionalSelecionado={setAdicionalSelecionado}
                    setTotalValue={setTotalValue}
                    setID_GRUPO_OPCOES={setID_GRUPO_OPCOES}
                    setAdicionaisTotais={setAdicionaisTotais}
                    setTotalCusto={setTotalCusto}
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