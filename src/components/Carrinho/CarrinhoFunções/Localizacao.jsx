import { React, useState, useEffect } from 'react'
import { api } from '../../../conecções/api';
import '../../../Styles/StyleCarrinho.css'


export default function Localizacao({ tipoComanda, opçaoEscolhidaGarcom, setMesaSelecionada }){
    const [localizacao, setLocalizacao] = useState([]);
    const [selectedMesa, setSelectedMesa] = useState(null);
    const [listaLocalizacaoAtiva, setListaLocalizacaoAtiva] = useState(null);
    const [searchQuery, setSearchQuery] = useState('');

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

    const handleSearchInputChange = (e) => {
        setSearchQuery(e.target.value)
    }
    const filteredData = localizacao.filter((item) =>
      (item.MESA && item.MESA.toLowerCase().includes(searchQuery.toLowerCase()))
    )
    const data = filteredData

    return(
        <div>
            {(tipoComanda === "CARTAO" || opçaoEscolhidaGarcom === "CARTAO")
                ? (
                    <div>
                        <div className='cartTitulo localizao' onClick={toggleListaLocalizacao}> 
                            <div className='iconeEnomeLocalizacao'>
                                <div className='iconeLocalizacao'></div>
                                <div className='carrinhoName'> Localização </div>
                            </div>
                            <div className='iconeSetaLocalizacao'>
                                {listaLocalizacaoAtiva === "ativo" ? <div className='icone-setaCima'></div> : <div className='icone-setaBaixo'></div>}
                            </div>
                        </div>
                        {listaLocalizacaoAtiva === "ativo" 
                            ? (
                            <div>
                                <div className='caixaPesquisaMesa'>
                                    <input type='text' className='pesquisaMesa' placeholder="Busca..."value={searchQuery} onChange={handleSearchInputChange}/>
                                </div>
                                <div className='cartListItems'>
                                    {data.map((item, index)=>
                                        <div key={item.MESA} className={`card-mesa ${selectedMesa === index ? 'mudarCorCardMesa' : ''}`} onClick={() => selecionarMesa(item, index)}>
                                            <div className='mesaNome'> {item.MESA} </div>
                                            <div className={`mesaIcone ${selectedMesa === index ? 'mudarIconeMesa' : ''}`} ></div>
                                        </div>
                                    )}
                                </div>
                            </div>
                            ) : null }
                    </div>
                )
                : null
            }
        </div>
    )
}