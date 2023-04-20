import { React, useState, useEffect } from 'react'
import './adicionais.css'
import Header from '../../../header/Header'
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {addToCart} from '../../../../redux/cartSlice';
import IconCarrinho from '../../../Carrinho/Iconcarrinho'
import Decimal from 'decimal.js';


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
                    <div>
                        <div>{item.nome}</div>
                        <button onClick={() => dispatch(addToCart({ nome: item.nome, descricao: getDescricao(), valor: getValor()}))}>Adicionar</button>
                    </div>
                    <div>
                        <div>{getDescricao()}</div>
                    </div>
                    <div>
                        <label>Valor Total</label>
                        <div>R$ {getValor()}</div>
                    </div>
                </div>
                <div className='itemB'>
                    <div className='itemAdd'>
                        {dataAdd.map((data)=>
                            <div key={data.id} className='caixa-add'>
                                <div className='item1'>
                                    <div>{data.nome}</div>
                                </div>
                                <div className='item2'>
                                    <label>Valor</label>
                                    <div>R$ {data.valor}</div>
                                </div>
                                <div className='item3'>
                                    <input type='checkbox' onClick={()=> handleAdd(data.id, data.nome, data.valor)}/>
                                </div>    
                                <div className='item4'>

                                </div>
                            </div>
                        )}
                    </div>  
                </div> 
        </div>
        <div>
            <IconCarrinho/>
        </div>
    </div>
    )
}