import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Table, Column, AutoSizer } from 'react-virtualized';
import Header from '../header/Header'
import Footer from '../Footer/Footer'
import './Main.css'


export default function Main() {
  const [apidata, setData] = useState([]);

  useEffect(() => {
    axios
      .get('https://642b23b0d7081590f91d081a.mockapi.io/cardapio')
      .then((getdata) => {
        setData(getdata.data);
      });
  }, []);

  const data = apidata
  return (
    <div className='main-main'>
        <div>
            <Header/>
        </div>
                <div className='tabela-main'>
                    <div className='bloco-listas'>
                            <label>LISTA 1</label>
                        <div className='bloco-items'>
                            <div className='bloco-interno'>
                                <div className='item-name'>{ 'NAME' }</div>
                                <div className='item-valor'>{ 'R$: 9,50' }</div>
                                <div className='item-descricao'>{ 'DESCRICAO' }</div>
                            </div>
                            <div className='img'>

                            </div>
                        </div><br/>
                        <div className='bloco-items'>
                            <div className='bloco-interno'>
                                <div className='item-name'>{ 'NAME' }</div>
                                <div className='item-valor'>{ 'R$: 9,50' }</div>
                                <div className='item-descricao'>{ 'DESCRICAO' }</div>
                            </div>
                            <div className='img'>

                            </div>
                        </div><br/>
                        <div className='bloco-items'>
                            <div className='bloco-interno'>
                                <div className='item-name'>{ 'NAME' }</div>
                                <div className='item-valor'>{ 'R$: 9,50' }</div>
                                <div className='item-descricao'>{ 'DESCRICAO' }</div>
                            </div>
                            <div className='img'>

                            </div>
                        </div><br/>
                    </div>
                    <div className='bloco-listas'>
                        <label>LISTA 2</label>
                        <div className='bloco-items'>
                            <div className='bloco-interno'>
                                <div className='item-name'>{ 'NAME' }</div>
                                <div className='item-valor'>{ 'R$: 9,50' }</div>
                                <div className='item-descricao'>{ 'DESCRICAO' }</div>
                            </div>
                            <div className='img'>

                            </div>
                        </div><br/>
                        <div className='bloco-items'>
                            <div className='bloco-interno'>
                                <div className='item-name'>{ 'NAME' }</div>
                                <div className='item-valor'>{ 'R$: 9,50' }</div>
                                <div className='item-descricao'>{ 'DESCRICAO' }</div>
                            </div>
                            <div className='img'>

                            </div>
                        </div><br/>
                    </div>
                    <div className='bloco-listas'>
                        <label>LISTA 3</label>
                        <div className='bloco-items'>
                            <div className='bloco-interno'>
                                <div className='item-name'>{ 'NAME' }</div>
                                <div className='item-valor'>{ 'R$: 9,50' }</div>
                                <div className='item-descricao'>{ 'DESCRICAO' }</div>
                            </div>
                            <div className='img'>

                            </div>
                        </div><br/>
                        <div className='bloco-items'>
                            <div className='bloco-interno'>
                                <div className='item-name'>{ 'NAME' }</div>
                                <div className='item-valor'>{ 'R$: 9,50' }</div>
                                <div className='item-descricao'>{ 'DESCRICAO' }</div>
                            </div>
                            <div className='img'>

                            </div>
                        </div><br/>
                    </div>
                </div>
         
    </div>
  );
}
