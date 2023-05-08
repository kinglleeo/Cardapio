import { React, useState, useEffect, lazy } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { addToCart } from '../../../../redux/cartSlice';
import { formCurrency } from '../../../AA-utilidades/numeros';
import { api } from '../../../../conecções/api';
import '../../../Estilos/styleForList.css'

export default function Pasteis(){
    const [produto, setProduto] = useState([]);
    const dispatch = useDispatch()
    const navigate = useNavigate()

    useEffect(()=>{
        api
            .get('/lanches')
            .then((getdata)=>{
                setProduto(getdata.data);
            });
    }, []);
    //ir para os adicionais passando o item selecionado
    const handleAdicionais = (item) =>{
        navigate('/AdicionaisComTamanho', {state: { item }});
    };

    return(
        <div className='lista' id='pasteis'>
                    <label className='titulo-lista'>PASTEIS</label>
            <div className='todos-items-lista'>       
            {produto.map((item)=>  
                <div className="carde">
                    <div className="carde-inner">
                        <div className='box-item-List'>
                            <div className='item-List-info'> 
                                <div className='bloco-item-info'>
                                    <div className='box-name'>
                                        <div className='item-info-name'>{item.nome}</div>
                                    </div>
                                    <div className='item-info-valor'>
                                        <div>Valor</div>
                                        <div>{formCurrency.format(item.valor)}</div>
                                    </div>
                                </div>
                                    <div className='item-info-descricao'>Lagosta, Geladeira, navio, mussarela, queijo, avião, cobra, onomatopeia, jaguatirica, lambari, amendoim, figado, jundia, abacate, asiajsahudhsuhda, suah uhsuhd s, sau hduhs a, ushad uhas{item.descricao}</div>
                            </div>
                                <div className='box-List-img'>
                                    <div className='item-img'>
                                        {item.adicionais === "" ? 
                                            (<button onClick={()=> dispatch(addToCart(item))} className="btn-azul-estiloso"> Adicionar </button>) 
                                            : (<button onClick={(()=> handleAdicionais(item))} className="btn-azul-estiloso"> Tamanho </button>)}
                                    </div>
                                </div>
                        </div>
                    </div>
                </div>
            )}    
            </div> 
        </div> 
    )
}