import axios from 'axios';
import { React, useState, useEffect } from 'react';
import Decimal from 'decimal.js';
import { formCurrency } from '../../../AA-utilidades/numeros';
import './AdicionaisList.css';

export default function GruposAdicionais({ totalItem, setTotalItem }){
    const [gruposAdicionais, setGruposAdicionais] = useState([]);
    const [adicionais, setAdicionais] = useState([]);
    const [listaAdicionaisAtivo, setListaAdicionaisAtivo] = useState(false);


    useEffect(() => {
        axios.get('https://642b23b0d7081590f91d081a.mockapi.io/adicionais').then((getdata) => {
          const data = getdata.data.map((item) => ({
            ...item,
            quantidade: new Decimal(0),
          }));
          setAdicionais(data);
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
                                            <div>Até 3 itens</div>
                                </div>
                            </div>
                            <div className='Adicionais-icon' onClick={() => toggleLista()}>
                                {listaAdicionaisAtivo === true ? '-' : '+'}
                            </div>
                            </div>
                        </div>
                        <div>
                            <ListaProdutosAdicionais
                            adicionais={adicionais}
                            gruposAdicionais={gruposAdicionais}
                            setTotalItem={setTotalItem}
                            setAdicionais={setAdicionais}
                            />
                        </div>
                    </div>
            )) : null}
        </div>
    )
}