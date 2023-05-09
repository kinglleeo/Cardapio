import { React, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { formCurrency } from '../../../AA-utilidades/numeros';
import '../../../Estilos/styleForList.css'
import { api } from '../../../../conecções/api'

export default function TamanhoPizaa(){
    const [produto, setProduto] = useState([]);
    const navigate = useNavigate();

    useEffect(()=>{
        api
            .get('/cardapio')
            .then((getdata)=>{
                setProduto(getdata.data);
            });
    },[]);

    const handleSetTamanho = (tamanhopizza)=>{
        navigate('/Pizzas', {state: { tamanhopizza }});
    };

    return(
        <div className='lista' id='pizzas'>
                    <label className='titulo-lista'>Pizzas</label>
            <div className='todos-items-lista'>
            {produto.map((tamanhopizza)=>  
                <div className="carde">
                    <div className="carde-inner">
                        <div className='box-item-List'>
                        <span/>
                            <div className='item-List-info'> 
                                <div className='bloco-item-info'>
                                    <div className='box-name'>
                                        <div className='item-info-name'>{tamanhopizza.tamanho}</div>
                                    </div>
                                    <div className='item-info-valor'>
                                        <div>Valor</div>
                                        <div>{formCurrency.format(tamanhopizza.valor)}</div>
                                    </div>
                                </div>
                                    <div className='item-info-descricao'>Lagosta, Geladeira, navio, mussarela, queijo, avião, cobra, onomatopeia, jaguatirica, lambari, amendoim, figado, jundia, abacate, asiajsahudhsuhda, suah uhsuhd s, sau hduhs a, ushad uhas{tamanhopizza.descricao}</div>
                            </div>
                                <div className='box-List-img'>
                                    <div className='item-img'>
                                        <button onClick={(()=> handleSetTamanho(tamanhopizza))} className="btn-azul-estiloso"> Selecionar </button>
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