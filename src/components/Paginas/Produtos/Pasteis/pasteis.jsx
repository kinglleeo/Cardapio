import { React, useState, useEffect } from 'react'
import axios from 'axios'
import '../Style.css'
import { useDispatch } from 'react-redux'
import { addToCart } from '../../../../redux/cartSlice'


export default function Pasteis(){
    const [produto, setProduto] = useState([]);
    const dispatch = useDispatch()

    useEffect(()=>{
        axios
            .get('https://642b23b0d7081590f91d081a.mockapi.io/lanches')
            .then((getdata)=>{
                setProduto(getdata.data);
            });
    }, []);

    

    return(
        <div className='caixa-lista' id='lista3'>
                <label className='titulo-lista'>PASTEIS</label>
                {produto.map((item)=>
            <div className='caixa-css'>
                <div className='caixa-items' key={item.id}>
                    <div className='caixa-1'>   
                        <div className='item-nome'>{item.nome}</div>
                        <div className='item-descricao'>{item.descricao}</div>
                    </div>
                    <div className='caixa-2'>
                        <div className='item-valor'><label>Preço</label>R$ {item.valor}</div>
                        <button onClick={()=> dispatch(addToCart(item))}> Adicionar</button>
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