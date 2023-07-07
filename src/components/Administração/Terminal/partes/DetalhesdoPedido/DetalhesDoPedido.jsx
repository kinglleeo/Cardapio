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
                <div className='detalhesPedidoTitulo'> Items </div>
                <div className='detalhesPedidoBox'> 
                    <div className='detalhesPedidoQtd'> Qtd </div>
                    <div className='detalhesPedidoDesc'> Descrição </div>
                    <div className='detalhesPedidoValor'> Valor </div>
                </div>
                <div>
                    
                    <div className='pedidoItemCard'>
                        <div className='itemCardLinha'>
                            <div className='itemPedidoQTD'> 10 </div>
                            <div className='itemPedidoDesc'> CocaCola-Lata </div>
                            <div className='itemValor'> R$ 5.000,00 </div>
                        </div>
                        <div className='itemCardLinha textOpcional'>
                            <div className='itemCardIcone'></div>
                            <div className='itemCardOpcoes'>

                                <div className='itemOpcionais'>
                                    <div className='nomeOpcional'> Limão e Gelo </div>
                                    <div className='quantiaOpcional'> X 1 </div>
                                </div>

                                <div className='itemObservacoes'> Trazer Junto do fim do mundo </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div className='quadroDetalhesPedido'>
                <div className='barraTotalPedido'>
                    <div> Total Pedido </div>
                    <div> R$ 5,000.00 </div>
                </div>
            </div>
            <div className='caixaBtnsPedidos'>
                <button className='btnAceitarPedido' onClick={() => aceitarPedido()}> Aceitar Pedido </button>
                <button className='btnCancelarPedido' onClick={() => cancelarPedido()}> Cancelar Pedido </button>
            </div>
        </div>
    )
}