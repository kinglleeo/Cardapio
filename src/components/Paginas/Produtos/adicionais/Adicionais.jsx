import { React, useState, useEffect } from 'react'
import './adicionais.css'
import Header from '../../../header/Header'
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {addToCart} from '../../../../redux/cartSlice';
import IconCarrinho from '../../../Carrinho/Iconcarrinho'
import Decimal from 'decimal.js';
import TopoPagina from '../../../AA-utilidades/Topo';
import '../../../Estilos/Style.css'

export default function adicionaislanches( ){
    const { state } = useLocation();
    const { item } = state;
    const [dataAdd, setDataAdd] = useState([]);
    const dispatch = useDispatch()
    const [selectedAdd, setSelectedAdd] = useState([]);
 
    console.log(selectedAdd)
    useEffect(()=>{
        axios
            .get('https://642b23b0d7081590f91d081a.mockapi.io/lanches')
            .then((getdata)=>{
                setDataAdd(getdata.data);
            });
    },[]);
    console.log(dataAdd)
    
    const handleAdd = (id, nome, valor) => {
        if (selectedAdd.some(add => add.id === id)) {
            const updatedSelectedAdd = selectedAdd.filter(add => add.id !== id);
            setSelectedAdd(updatedSelectedAdd);
        } else {
          setSelectedAdd([...selectedAdd, { id, nome, valor }]);
        }
      }
    const getDescricao =()=>{
        let descricao = item.descricao
        selectedAdd.forEach(add =>{
            descricao += ` + ${add.nome}`;
        })
        return descricao;
    }
    const getValor = () => {
        const valor = item.valor || 0;
        const valortotal = selectedAdd.reduce((total, item)=>{
            return total.plus(item.valor || 0);
        }, new Decimal(0));
        const total = new Decimal(valor).plus(valortotal);
        return total.toFixed(2);
    };

    return(
        <div>    
            <div>
                <Header/>
            </div>
            <div className='corpo-adicionais'>
                    <div className='items-information'>
                        <div className='barra-items-information'>
                            <div className='item-000'>
                                <div>{item.nome}</div>
                            </div>
                            <div className='item-222'>
                                <label>Valor Total</label>
                                <div>R$ {getValor()}</div>
                            </div>
                            <div className='item-333'>
                                <button onClick={() => dispatch(addToCart({ nome: item.nome, descricao: getDescricao(), valor: getValor()}))}>Adicionar</button>
                            </div>
                        </div>
                        <div className='caixa-D-items'>
                            <div className='item-111'>
                                <div className='descricao-item-d'>{getDescricao()}</div>
                            </div>
                        </div>
                    </div>
                    <div className='itemB'>
                        <div className='lista-items'>
                            {dataAdd.map((data)=>
                                <div className="carde">
                                <div className="circle"></div>
                                <div className="carde-inner">
                                    <div className='caixa-pro'>
                                        <div className='caixa-pro-1'> 
                                            <div className='item-f-nome'>{data.nome}</div>
                                            <div className='item-f-descricao'>{data.descricao}</div>
                                        </div>
                                        <div className='caixa-pro-2'>
                                            <div className='item-f-valor'>
                                                <div>Valor</div>
                                                <div>R$ {data.valor}</div>
                                            </div>
                                            <div className='item-f-btn'>
                                                <label class="container">
                                                    <input type='checkbox' onClick={()=> handleAdd(data.id, data.nome, data.valor)}/>
                                                    <div class="checkmark"></div>
                                                </label>
                                            </div>
                                        </div>
                                        <div className='caixa-pro-3'>
                                            <div className='item-f-img'></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            )}
                        </div>  
                    </div> 
            </div>
            <div>
                <IconCarrinho/>
            </div>
            <div>
                <TopoPagina/>
            </div>
        </div>
        )
    }