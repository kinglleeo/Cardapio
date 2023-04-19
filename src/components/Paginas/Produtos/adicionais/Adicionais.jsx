import { React, useState, useEffect } from 'react'
import './adicionais.css'
import Header from '../../../header/Header'
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {addToCart} from '../../../../redux/cartSlice';
import IconCarrinho from '../../../Carrinho/Iconcarrinho'

export default function adicionaislanches(){
    const { state } = useLocation();
    const { item } = state;
    const [dataAdd, setDataAdd] = useState([]);
    const dispatch = useDispatch()

    
    
    useEffect(()=>{
        axios
            .get('https://642b23b0d7081590f91d081a.mockapi.io/lanches')
            .then((getdata)=>{
                setDataAdd(getdata.data);
            });
    },[]);
    
    
   
    const getDescricao =()=>{
        let descricao = item.descricao
            const newdescricao = item.descricao += ``
        return newdescricao        
    }
    const getValor = () => {
        
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
                                <div>{data.nome}</div>
                            </div>
                            <div className='itemAdd2'>
                                <div>{data.valor}</div>
                            </div>
                            <div className='itemAdd3'>
                                <input type='checkbox' />
                            </div>
                        </div>
                    )}
                </div>  

                <div>
                <button >Adicionar</button>
                </div>
                  
        </div>
        <div>
            <IconCarrinho/>
        </div>
    </div>
    )
}