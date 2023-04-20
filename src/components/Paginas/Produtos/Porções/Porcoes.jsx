import { React, useState, useEffect } from 'react'
import axios from 'axios'
import '../Style.css'
import { useNavigate } from 'react-router-dom'

export default function Porcoes(){
    const [produto, setProduto] = useState([]);
    const navigate = useNavigate()

    useEffect(()=>{
        axios
            .get('https://642b23b0d7081590f91d081a.mockapi.io/lanches')
            .then((getdata)=>{
                setProduto(getdata.data);
            });
    }, []);

    const handleAdicionais = (item) => {
        navigate('/AdicionaisPorcoes', { state: { item } });
      };

    

    return(
        <div className='caixa-lista' id='porcoes'>
                    <label className='titulo-lista'>PORÇÕES</label>
                {produto.map((item)=>
                    <div className='caixa-css'>
                        <div className='caixa-items' key={item.id}>
                            <div className='caixa-1'>
                                <div className='item-nome'>{item.nome}</div>
                                <div className='item-descricao'>{item.descricao}</div>
                            </div>
                            <div className='caixa-2'>
                                <div className='item-valor'><label>Preço</label>R${item.valor}</div>
                                    <button onClick={(()=> handleAdicionais(item))}>Tamanhos</button>
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