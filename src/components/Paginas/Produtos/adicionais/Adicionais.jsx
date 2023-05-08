import { React, useState, useEffect, lazy } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import {addToCart} from '../../../../redux/cartSlice';
import { formCurrency } from '../../../AA-utilidades/numeros';
import IconCarrinho from '../../../Carrinho/Iconcarrinho';
import TopoPagina from '../../../AA-utilidades/Topo';
import Header from '../../../header/Header';
import {api} from '../../../../conecções/api';
import { useDispatch } from 'react-redux';
import Decimal from 'decimal.js';
import './adicionais.css';
import '../../../Estilos/styleForList.css';
import '../../../Estilos/StyleForInput.css'

export default function adicionaislanches( ){
    const [selectedAdd, setSelectedAdd] = useState([]);
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
    //adiciona os valor selecionados ao selectedAdd
    const handleAdd = (id, nome, valor) => {
        if (selectedAdd.some(add => add.id === id)) {
            const updatedSelectedAdd = selectedAdd.filter(add => add.id !== id);
            setSelectedAdd(updatedSelectedAdd);
        } else {
          setSelectedAdd([...selectedAdd, { id, nome, valor }]);
        }
      }
    //pega o nome dos items selecionados e adiciona a descricao
    const getDescricao =()=>{
        let descricao = item.descricao
        selectedAdd.forEach(add =>{
            descricao += ` + ${add.nome}`;
        })
        return descricao;
    }
    //soma o valor dos items e mostra o total
    const getValor = () => {
        const valor = item.valor || 0;
        const valortotal = selectedAdd.reduce((total, item)=>{
            return total.plus(item.valor || 0);
        }, new Decimal(0));
        const total = new Decimal(valor).plus(valortotal);
        return total;
    };
    //envia todos os dados do produto para o carrinho
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
                    <div className='selected-adds-information'>
                        <div className='box-adds-view-1'>
                            <div className='adds-name'>
                                <div>{item.nome}</div>
                            </div>
                            <div className='adds-valor-total'>
                                <label>Valor Total:</label>
                                <div>{formCurrency.format(getValor())}</div>
                            </div>
                            <div className='adds-btn'>
                                <button onClick={() => handlecarrinho()}>Adicionar</button>
                            </div>
                        </div>
                        <div className='box-adds-view-2'>
                            <div className='box-descricao-items-add'>
                                <div className='descricao-items-add'>{getDescricao()}</div>
                            </div>
                        </div>
                    </div>
                    <div className='lista'>
                        <label className='titulo-lista'>Adicionais</label>
                            {dataAdd.map((data)=>
                            <div className="carde">
                                <div className="carde-inner">
                                    <div className='box-item-List'>
                                        <div className='item-List-info'> 
                                            <div className='bloco-item-info'>
                                                <div className='box-name'>
                                                    <div className='item-info-name'>{data.nome}</div>
                                                </div>
                                                <div className='item-info-valor'>
                                                    <div>Valor: </div>
                                                    <div>{formCurrency.format(data.valor)}</div>
                                                </div>
                                            </div>
                                            <div className='item-info-descricao'>Lagosta, Geladeira, navio, mussarela, queijo, avião, cobra, onomatopeia, jaguatirica, lambari, amendoim, figado, jundia, abacate, asiajsahudhsuhda, suah uhsuhd s, sau hduhs a, ushad uhas{data.descricao}</div>
                                        </div>
                                        <div className='box-List-img'>
                                        <div className='item-img'>
                                            <label className="container">
                                                <input type='checkbox' onClick={()=> handleAdd(data.id, data.nome, data.valor)}/>
                                                <div className="checkmark"></div>
                                            </label>
                                        </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            )}
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