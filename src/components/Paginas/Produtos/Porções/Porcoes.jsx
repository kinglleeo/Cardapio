import { React, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { formCurrency } from '../../../AA-utilidades/numeros';
import '../../../Estilos/styleForList.css'
import { api } from '../../../../conecções/api'


export default function Porcoes(){
    const [produto, setProduto] = useState([]);
    const navigate = useNavigate()

    useEffect(()=>{
        api
            .get('/lanches')
            .then((getdata)=>{
                setProduto(getdata.data);
            });
    }, []);
    //vai apra os adicionais mandando o item selecionado
    const handleAdicionais = (item) => {
        navigate('/AdicionaisComTamanho', { state: { item } });
      };

    return(
        <div className='lista' id='porcoes'>
                    <label className='titulo-lista'>PORÇÕES</label>
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
                                        <button onClick={(()=> handleAdicionais(item))} className="btn-azul-estiloso"> Tamanho </button>
                                    </div>
                                </div>
                        </div>
                    </div>
                </div>
            )}    
        </div>  
    )
}