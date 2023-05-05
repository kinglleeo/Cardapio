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
import { useNavigate } from 'react-router-dom';
import {api} from '../../../../conecções/api'
import { formCurrency } from '../../../AA-utilidades/numeros';

export default function adicionaislanches( ){
    const { state } = useLocation();
    const { item } = state;
    const [dataAdd, setDataAdd] = useState([]);
    const dispatch = useDispatch()
    const [selectedAdd, setSelectedAdd] = useState([]);
    const navigate = useNavigate();

    useEffect(()=>{
        api
            .get('/lanches')
            .then((getdata)=>{
                setDataAdd(getdata.data);
            });
    },[]);
    
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
        return total;
    };

    const handlecarrinho =()=>{
        dispatch(addToCart({ nome: item.nome, descricao: getDescricao(), valor: getValor()}))
        navigate('/Carrinho')
    } 

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
                                <label>Valor Total:</label>
                                <div>{formCurrency.format(getValor())}</div>
                            </div>
                            <div className='item-333'>
                                <button onClick={() => handlecarrinho()}>Adicionar</button>
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
                                <div className="carde-inner">
                                <div className='caixa-pro'>
                                    <div className='caixa-pro-1'> 
                                        <div className='bloco-caixa-pro-1'>
                                            <div className='bloco-pro-name'>
                                                <div className='item-f-nome'>{data.nome}</div>
                                            </div>
                                            <div className='item-f-valor'>
                                                <div>Valor: </div>
                                                <div>{formCurrency.format(data.valor)}</div>
                                            </div>
                                        </div>
                                        <div className='item-f-descricao'>Lagosta, Geladeira, navio, mussarela, queijo, avião, cobra, onomatopeia, jaguatirica, lambari, amendoim, figado, jundia, abacate, asiajsahudhsuhda, suah uhsuhd s, sau hduhs a, ushad uhas{data.descricao}</div>
                                    </div>
                                    <div className='caixa-pro-2'>
                                    <div className='item-f-img'>
                                        <label class="container">
                                            <input type='checkbox' onClick={()=> handleAdd(data.id, data.nome, data.valor)}/>
                                            <div class="checkmark"></div>
                                        </label>
                                    </div>
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