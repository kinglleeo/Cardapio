import { React, useState, useEffect } from 'react'
import './formasdepagamento.css'
import { capitalizeFirstLetter } from '../../../AA-utilidades/primeiraMaiuscula'
import axios from 'axios';
import { api } from '../../../../conecções/api';
import ModalError from '../../../erros/ModalError'

export default function FormasDePagamento({ setPagamentoSelecionado }){
    const [selectedRadioIndex, setSelectedRadioIndex] = useState(null);
    const [metodosPagamento, setMetodosPagamento] = useState([]);
    const [modalError, setModalError] = useState(false);
    const [error, setError] = useState('');
    
    const RadioPagamento = (item, index) => {
        setSelectedRadioIndex(index);
        setPagamentoSelecionado(item)
    };

    useEffect(()=>{
        axios
            .get('http://192.168.0.100:9865/pagamentos')
            .then((getdata)=>{
                setMetodosPagamento(getdata.data)
            })
            .catch((error) => {
                setError("Erro no pagamentos")
                setModalError(true)
            });
    }, [])
    
    return(
        <div>
            <div className='tituloPagamentos'>
                <div className='iconePagamentosBox'> 
                    <div className='iconePagamentos'></div>
                </div>
                <div className='tituloPagamentosTexto'> Pagamento </div>
            </div>
            <div className='listaMetodosPagamentos'>
                {Array.isArray(metodosPagamento) ? (
                        metodosPagamento.map((item, index)=>
                            <div className='cardPagamento' key={item.ID}  onClick={()=> RadioPagamento(item,index)}>
                                <div className='pagamentoNome'> {capitalizeFirstLetter(item.DESCRICAO.toLowerCase())} {item.DESCRICAO === "PIX" ? (<div> ( {item.CHAVE_PIX} ) </div>) : null} </div>
                                <div className='Card-Icon'>
                                    <input type='radio' name='tamanhos' checked={selectedRadioIndex === index} onChange={() => {}}/>
                                        {selectedRadioIndex === index 
                                        ? (<div className='iconePrato-acesso'></div>)
                                        : (<div className='iconePrato-apagado'></div>) 
                                        }
                                </div>
                            </div>
                )):null}
            </div>
            {modalError && <ModalError setModalError={setModalError} error={error} />}
        </div>
    )
}