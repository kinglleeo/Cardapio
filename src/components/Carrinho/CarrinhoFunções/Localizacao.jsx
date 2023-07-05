import { React, useState, useEffect } from 'react'
import { api } from '../../../conecções/api';
import '../../../Styles/StyleCarrinho.css'


export default function Localizacao({ tipo, opçaoEscolhida, setMesaSelecionada }){
    const [localizacao, setLocalizacao] = useState([]);
    const [selectedMesa, setSelectedMesa] = useState(null);
    const [listaLocalizacaoAtiva, setListaLocalizacaoAtiva] = useState(null);

    useEffect(()=>{
        api
            .get(`/listaMesas`)
            .then((getdata)=>{
                setLocalizacao(getdata.data);
            });
    }, [])

    const selecionarMesa = (item, index) => {
        if (selectedMesa === index) {
          return;
        } else {
            setMesaSelecionada(item.MESA)
        }
        setSelectedMesa(index);
      };

    const toggleListaLocalizacao = () => {
        if (listaLocalizacaoAtiva === "ativo") {
            setListaLocalizacaoAtiva(null);
        } else {
            setListaLocalizacaoAtiva("ativo");
        }
    } 

    return(
        <div>
            {(tipo === "CARTAO" || opçaoEscolhida === "CARTAO")
                ? (
                    <div>
                        <div className='cartTitulo'> 
                            <div className='iconeEnomeLocalizacao'>
                                <div className='iconeLocalizacao'></div>
                                <div className='carrinhoName'> Localização </div>
                            </div>
                            <div className='iconeSetaLocalizacao' onClick={toggleListaLocalizacao}>
                                {listaLocalizacaoAtiva === "ativo" ? <div className='icone-setaCima'></div> : <div className='icone-setaBaixo'></div>}
                            </div>
                        </div>
                        {listaLocalizacaoAtiva === "ativo" 
                            ? (
                        <div className='cartListItems'>
                            {localizacao.map((item, index)=>
                                <div className={`card-mesa ${selectedMesa === index ? 'mudarCorCardMesa' : ''}`} onClick={() => selecionarMesa(item, index)}>
                                    <div className='mesaNome'> {item.MESA} </div>
                                    <div className={`mesaIcone ${selectedMesa === index ? 'mudarIconeMesa' : ''}`} ></div>
                                </div>
                            )}
                        </div>
                            ) : null }
                    </div>
                )
                : null
            }
        </div>
    )
}