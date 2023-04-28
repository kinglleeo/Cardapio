import { React, useState, useEffect } from 'react'
import axios from 'axios'
import '../../../Estilos/Style.css'
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
        navigate('/Adicionais', { state: { item } });
      };

    return(
        <div className='lista-items' id='lanches'>
                    <label className='titulo-lista'>LANCHES</label>
            {produto.map((item)=>  
                <div className="carde">
                    <div className="circle"></div>
                            <div className="carde-inner">
                                <div className='caixa-pro'>
                                    <div className='caixa-pro-1'> 
                                        <div className='bloco-caixa-pro-1'>
                                            <div className='bloco-pro-name'>
                                                <div className='item-f-nome'>{item.nome}</div>
                                            </div>
                                            <div className='item-f-valor'>
                                                <div>Valor</div>
                                                <div>R$ {item.valor}</div>
                                            </div>
                                        </div>
                                        <div className='item-f-descricao'>Lagosta, Geladeira, navio, mussarela, queijo, avião, cobra, onomatopeia, jaguatirica, lambari, amendoim, figado, jundia, abacate, asiajsahudhsuhda, suah uhsuhd s, sau hduhs a, ushad uhas{item.descricao}</div>
                                    </div>
                                    <div className='caixa-pro-2'>
                                    <div className='item-f-img'>
                                        {item.adicionais === "" ? 
                                            (<button onClick={()=> dispatch(addToCart(item))} class="btn-azul-estiloso"> Adicionar </button>) 
                                            : (<button onClick={(()=> handleAdicionais(item))} class="btn-azul-estiloso"> Adicionais </button>)}
                                    </div>
                                    </div>
                                </div>
                            </div>
            </div>
            )}    
        </div>   
        
    )
}