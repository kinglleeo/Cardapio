import { React, useState, useEffect } from 'react'
import axios from 'axios'
import '../Style.css'
import { useDispatch } from 'react-redux';
import {addToCart} from '../../../../redux/cartSlice';
import { useNavigate } from 'react-router-dom'

export default function Lanches(){
    const [produto, setProduto] = useState([]);
    const dispatch = useDispatch()

    useEffect(()=>{
        axios
            .get('https://642b23b0d7081590f91d081a.mockapi.io/lanches')
            .then((getdata)=>{
                setProduto(getdata.data);
            });
    }, []);

    

    const navigate = useNavigate()

    const handleAdicionais = (item) => {
        navigate('/AdicionaisLanches', { state: { item } });
      };

    return(
        <div className='caixa-lista' id='lista1'>
                    <label className='titulo-lista'>LANCHES</label>
                {produto.map((item)=>
                    <div className='caixa-css'>
                        <div className='caixa-items' key={item.id}>
                            <div className='caixa-1'>
                                <div className='item-nome'>{item.nome}</div>
                                <div className='item-descricao'>{item.descricao}</div>
                            </div>
                            <div className='caixa-2'>
                                <div className='item-valor'><label>Preço</label>R${item.valor}</div>
                                <div>{item.adicionais === "" ? (<button onClick={()=> dispatch(addToCart(item))}> Adicionar</button>) 
                                        : (<button onClick={(()=> handleAdicionais(item))}> Adicionais </button>)} </div> 
                                <div>
                                </div>       
                            </div>
                            <div className='caixa-3'>
                                <div className='item-img'></div>
                            </div>
                        </div>
                    </div>
                 )}
               
        </div>   
        
    )
}