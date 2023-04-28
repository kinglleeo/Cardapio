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
        navigate('/AdicionaisComTamanho', { state: { item } });
      };

    

    return(
        <div className='lista-items' id='porcoes'>
                    <label className='titulo-lista'>LANCHES</label>
            {produto.map((item)=>  
                <div className="carde">
                    <div className="circle"></div>
                            <div className="carde-inner">
                                <div className='caixa-pro'>
                                    <div className='caixa-pro-1'> 
                                        <div className='item-f-nome'>{item.nome}</div>
                                        <div className='item-f-descricao'>{item.descricao}</div>
                                    </div>
                                    <div className='caixa-pro-2'>
                                        <div className='item-f-valor'>
                                            <div>Valor</div>
                                            <div>R$ {item.valor}</div>
                                        </div>
                                        <div className='item-f-btn'>
                                            <button onClick={(()=> handleAdicionais(item))}>Tamanhos</button>
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
    )
}