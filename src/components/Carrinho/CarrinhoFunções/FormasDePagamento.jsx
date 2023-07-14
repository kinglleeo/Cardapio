import { React, useState, useEffect } from 'react'
import './formasdepagamento.css'
import { capitalizeFirstLetter } from '../../AA-utilidades/primeiraMaiuscula'

export default function FormasDePagamento({ setPagamentoSelecionado }){
    const [selectedRadioIndex, setSelectedRadioIndex] = useState(null);
    

    const RadioPagamento = (item, index) => {
        setSelectedRadioIndex(index);
        setPagamentoSelecionado(item)
      };
    
    const metodosPagamento = [
        { 
            ID: '1',
            DESCRICAO: 'DINHEIRO'
        },
        {
            ID: '3',
            DESCRICAO: 'CREDITO'
        },
        {
            ID: '4',
            DESCRICAO: 'DEBITO'
        },
        {
            ID: '17',
            DESCRICAO: 'PIX'
        }
    ]

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
                                <div className='pagamentoNome'> {capitalizeFirstLetter(item.DESCRICAO.toLowerCase())} </div>
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
        </div>
    )
}