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
    const [valorTotalItem, setValorTotalItem] = useState(0);
    const [valorTotalCusto, setValorTotalCusto] = useState(0);
    //AdicionaisTamanho
    const [tamanhoEscolhido, setTamanhoEscolhido] = useState([]);
    const [existeTamanho, setExisteTamanho] = useState(false);
    //observaçoes
    const [observacoes, setObservacao] = useState('');
    
    const [ID_GRUPO_OPCOES, setID_GRUPO_OPCOES] = useState('');


    const [quantidadeTotal, setQuantidadeTotal] = useState(0);

    
    return(
        <div>
            <div>
                <Header/>
            </div>
            <div>
                <AdicionaisInfo
                    Produto={data}
                    adicionalSelecionado={adicionalSelecionado}
                    tamanhoEscolhido={tamanhoEscolhido}
                    observacoes={observacoes}
                    ID_GRUPO_OPCOES={ID_GRUPO_OPCOES}
                    tipo={tipo}
                    valorTotalItem={valorTotalItem}
                    valorTotalCusto={valorTotalCusto}
                    existeTamanho={existeTamanho}
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
                    setQuantidadeTotal={setQuantidadeTotal}
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