import { React, useState, useEffect } from 'react'
import './detalhesdopedido.css'


export default function DetalhesDoPedido({ itemPedido }){
    const [dadosCompraPedido, setDadosCompraPedido] = useState([]);
    console.log(itemPedido)


    const aceitarPedido=()=>{

    }

    const cancelarPedido=()=>{
        
    }
    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
      }

    return(
        <div className='listaDetalhesPedido'>
            <div className='quadroDetalhesPedido'>
                <div className='quadroPedidoLinha'>
                    <div className='tipoPedido marginEsquerda textoFonte'> {itemPedido.TIPOCOMANDA} </div> 
                    <div className='horaPedido marginDireita textoFonte'> {itemPedido.HORA.split(':').slice(0, 2).join(':')} </div>
                </div>
                <div className='quadroPedidoLinha'>
                    <div className='localizacaoPedido'> localização </div>
                </div>
                <div className='quadroPedidoLinha'>
                    <div className='numeroPedido'> Pedido n° {itemPedido.ID} </div>
                    <div className={
                      'statusPedidos ' +
                      (itemPedido.ULTIMO_STATUS_PEDIDO === 'PEDIDO INICIADO' ? 'iniciado'
                        : itemPedido.ULTIMO_STATUS_PEDIDO === 'PEDIDO CANCELADO' ? 'cancelado'
                        : itemPedido.ULTIMO_STATUS_PEDIDO === 'PEDIDO CONFIRMADO' ? 'confirmado'
                        : itemPedido.ULTIMO_STATUS_PEDIDO === 'PENDENTE' ? 'pendente'
                        : '')
                    }>
                        {capitalizeFirstLetter(itemPedido.ULTIMO_STATUS_PEDIDO.toLowerCase())}
                    </div>
                </div>
            </div>
            <div className='quadroDetalhesPedido'>
                <div></div>
            </div>
            <div className='quadroDetalhesPedido'>

            </div>
            <div className='caixaBtnsPedidos'>
                <button className='btnAceitarPedido' onClick={() => aceitarPedido()}> Aceitar Pedido </button>
                <button className='btnCancelarPedido' onClick={() => cancelarPedido()}> Cancelar Pedido </button>
            </div>
        </div>
    )
}