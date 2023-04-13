import { React, useState, useEffect } from 'react'
import './adicionais.css'
import Header from '../../../header/Header'
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {addToCart} from '../../../../redux/cartSlice';
import IconCarrinho from '../../../Carrinho/Iconcarrinho'

export default function adicionaislanches( ){
    const { state } = useLocation();
    const { item } = state;
    const [dataAdd, setDataAdd] = useState([]);
    const dispatch = useDispatch()
    const [selectedAdd, setSelectedAdd] = useState([]);

    console.log(selectedAdd)
    useEffect(()=>{
        axios
            .get('https://642b23b0d7081590f91d081a.mockapi.io/cardapio')
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
        let valortotal = parseFloat(item.valor);
        selectedAdd.forEach((add) => {
          valortotal += parseFloat(add.valor); 
        });
        return valortotal;
      };
      
    return(
    <div>    
        <div>
            <Header/>
        </div>
        <div className='corpo-adicionais'>
                <div className='items-information'>
                    <div className='item1'>
                        <div>{item.nome}</div>
                    </div>
                    <div className='item2'>
                        <div>{getDescricao()}</div>
                    </div>
                    <div className='item3'>
                        <div>R$ {getValor()}</div>
                    </div>
                </div>
                <div className='itemAdd'>
                    {dataAdd.map((data)=>
                        <div key={data.id} className='caixa-add'>
                            <div className='itemAdd1'>
                                <div>{data.nomeadd}</div>
                            </div>
                            <div className='itemAdd2'>
                                <div>{data.valoradd}</div>
                            </div>
                            <div className='itemAdd3'>
                                <input type='checkbox' onClick={()=> handleAdd(data.id, data.nomeadd, data.valoradd)}/>
                            </div>
                        </div>
                    )}
                </div>  

                <div>
                <button onClick={() => dispatch(addToCart({ nome: item.nome, descricao: getDescricao(), valor: getValor()}))}>Adicionar</button>
                </div>
                  
        </div>
        <div>
            <IconCarrinho/>
        </div>
    </div>
    )
}