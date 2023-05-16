import axios from 'axios';
import { React, useState, useEffect } from 'react';
import Decimal from 'decimal.js';
import './AdicionaisList.css';

export default function GruposAdicionais({ totalItem, setTotalItem }){
    const [gruposAdicionais, setGruposAdicionais] = useState([]);
    const [listaAdicionais, setListaAdicionais] = useState([]);
    const [listaAdicionaisAtivo, setListaAdicionaisAtivo] = useState(false);

    useEffect(()=>{
        axios 
            .get('')
            .then((getdata)=>{
                setGruposAdicionais(getdata.data);
            });
    }, []);

    useEffect(() => {
        axios.get('https://642b23b0d7081590f91d081a.mockapi.io/adicionais').then((getdata) => {
          const data = getdata.data.map((item) => ({
            ...item,
            quantidade: 0,
          }));
          setListaAdicionais(data);
        });
      }, []);

      const toggleLista = () => {
        if (listaAdicionaisAtivo === true) {
          setListaAdicionaisAtivo(false)
        } else {
          setListaAdicionaisAtivo(true)
        }
    }

    return(
        <div>
            {Array.isArray(gruposAdicionais) ? (
                gruposAdicionais.map((item) => 
                    <div>
                        <div className='box-Adicionais'>
                            <div className='Adicionais'>
                                <div className='box-adicionais-descricao'>
                                    <div className='Adicionais-titulo'> Adicionais </div>
                                        <div className='adicionais-quantidadeMax'> 
                                            <div>Até {item.quantidadeMaxima} itens</div>
                                        </div>
                            </div>
                                <div className='Adicionais-icon' onClick={() => toggleLista()}>
                                    {listaAdicionaisAtivo === true ? '-' : '+'}
                                </div>
                            </div>
                        </div>
                        <div>
                            {listaAdicionaisAtivo === true && ( 
                                <ListaProdutosAdicionais
                                    listaAdicionais={listaAdicionais}
                                    setListaAdicionais={setListaAdicionais}
                                    quantidademaxima={item.quantidadeMaxima}
                                    setTotalItem={setTotalItem}
                                    totalItem={totalItem}
                                />
                            )}
                        </div>
                    </div>
            )) : null}
        </div>
    )
}