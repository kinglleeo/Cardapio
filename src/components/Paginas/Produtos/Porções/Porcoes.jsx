import { React, useState, useEffect } from 'react'
import axios from 'axios'
import '../../../Estilos/Style.css'
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
                    <label className='titulo-lista'>PORÇÕES</label>
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
                                        <button onClick={(()=> handleAdicionais(item))} class="btn-azul-estiloso"> Tamanho </button>
                                    </div>
                                    </div>
                                </div>
                            </div>
            </div>
            )}    
        </div>  
    )
}