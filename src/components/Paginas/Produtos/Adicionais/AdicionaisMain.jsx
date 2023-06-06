import { React, useState, useEffect } from 'react'
import Header from '../../../header/Header'
import AdicionaisInfo from './AdicionaisInfo'
import AdicionaisTamanho from '../AdicionaisTamanho/AdicionaisTamanho'
import GrupoAdicionais from './GrupoAdicionais'
import Observacoes from './Observacoes'
import { useLocation } from 'react-router-dom';

export default function AdicionaisMain(){

    //produto 
    const { state } = useLocation();
    const { data } = state;
    //adicionais
    const [adicionalSelecionado, setAdicionalSelecionado] = useState('');
    const [totalValue, setTotalValue] = useState('');
    //AdicionaisTamanho
    const [tamanhoEscolhido, setTamanhoEscolhido] = useState([]);
    //observaçoes
    const [observacoes, setObservacao] = useState('');
    
    const [ID_GRUPO_OPCOES, setID_GRUPO_OPCOES] = useState('');

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
                />
            </div>
            <div>
                <AdicionaisTamanho
                    setTamanhoEscolhido={setTamanhoEscolhido}
                />
            </div>
            <div>
                <GrupoAdicionais
                    setAdicionalSelecionado={setAdicionalSelecionado}
                    setTotalValue={setTotalValue}
                    setID_GRUPO_OPCOES={setID_GRUPO_OPCOES}
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