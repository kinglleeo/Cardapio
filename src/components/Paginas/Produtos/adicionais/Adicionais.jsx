import { React, useState, useEffect, lazy } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import {addToCart} from '../../../../redux/cartSlice';
import { formCurrency } from '../../../AA-utilidades/numeros';
import IconCarrinho from '../../../Carrinho/Iconcarrinho';
import TopoPagina from '../../../AA-utilidades/Topo';
import Header from '../../../header/Header';
import {api} from '../../../../conecções/api';
import { useDispatch } from 'react-redux';
import { Quantidade, ValorTotalAdicionais } from './OperacoesAdicionais';
import './adicionais.css';

export default function adicionaislanches( ){
    const [dataAdd, setDataAdd] = useState([]);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { state } = useLocation();
    const { item } = state;

    //lista de lanches
    useEffect(()=>{
        api
            .get('/lanches')
            .then((getdata)=>{
                setDataAdd(getdata.data);
            });
    },[]);

    return(
        <div>    
            <div>
                <Header/>
            </div>
            <div className='corpo-adicionais'>
                    <div className='selected-adds-information'>
                        <div>
                            <ValorTotalAdicionais
                                item={item}
                            />
                        </div>
                    </div>
                    <div className='lista-Adicionais'>
                        <label className='titulo-Adicionais'>Adicionais</label>
                        <div className='todos-items-Adicionais'>
                            {dataAdd.map((data)=>
                            <div className="card-Adicionais">
                                <div className='box-item-Adicionais'>
                                    <div className='box-info-Adicionais'>
                                        <div className='box-info-Adicionais-1'>
                                            <div className='box-name-Adicionais'>
                                                {data.nome}
                                            </div>
                                            <div className='box-valor-Adicionais'>
                                                {formCurrency.format(data.valor)}
                                            </div>
                                        </div>
                                        <div className='box-info-Adicionais-2'>
                                            <div className=''>{data.descricao}</div>
                                        </div>
                                    </div>
                                    <div className='box-selecionar-Adicionais'>
                                        <Quantidade
                                            data={data}
                                            setValorTotalQuantidade={setValorTotalQuantidade}
                                        />
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