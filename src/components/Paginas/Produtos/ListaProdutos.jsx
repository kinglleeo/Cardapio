import { React, useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addToCart } from '../../../redux/cartSlice';
import { api } from '../../../conecções/api';
import { formCurrency } from '../../AA-utilidades/numeros';
import '../../Estilos/styleForList.css';

export default function ListaProdutos(){
    const [produto, setProduto] = useState([]);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    useEffect(()=>{
        api
            .get('/lanches')
            .then((getdata)=>{
                setProduto(getdata.data);
            });
    }, []);

    //ir para os adicionais passando o item selecionado
    const handleAdicionais = (item) => {
        navigate('/Adicionais', { state: { item } });
      };
    //adicionar ao carrinho
    const handleCart=(item)=>{
        dispatch(addToCart(item))
        //navigate('/Carrinho')
    }

    return(
    <div>
        <div className='lista' id='lanches'>
        <label className='titulo-lista'>LANCHES</label>
            <div className='todos-items-lista'>
            {produto.map((item)=>  
                <div className="card-List">
                    <div className='box-item-List'>
                        <div className='item-List-info'>
                            <div className='box-item-info'>
                                <div className='box-List-name'>
                                    <div>{item.nome}</div>
                                </div>
                                <div className='box-List-valor'>
                                    <div>{formCurrency.format(item.valor)}</div>
                                </div>
                            </div>
                                <div className='box-List-descricao'>
                                <div className='item-info-descricao'>Lagosta, Geladeira, navio, mussarela, queijo, avião, cobra, onomatopeia, jaguatirica, lambari, amendoim, figado, jundia, abacate, asiajsahudhsuhda, suah uhsuhd s, sau hduhs a, ushad uhas{item.descricao}</div>
                            </div>
                            </div>
                            <div className='item-List-img'>
                                <div className='img-teste'></div>
                                <div className='botao-add-List'>
                                    {item.adicionais === "" ? 
                                        (<button onClick={()=> handleCart(item)} className="btn-List-add"> Adicionar </button>) 
                                        : (<button onClick={(()=> handleAdicionais(item))} className="btn-List-add"> Adicionais </button>)}
                                </div>
                            </div>
                    </div>    
                </div>
            )}   
        </div>   
        </div> 
    </div>
)
}