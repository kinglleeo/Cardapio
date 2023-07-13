import { React, useState, useEffect } from 'react'
import axios from 'axios';
import { formCurrency } from '../../../AA-utilidades/numeros';
import { useLocation } from 'react-router-dom';

export default function DetalhesDoPedido(){
    const [dadosCompraPedido, setDadosCompraPedido] = useState('');
    const { state } = useLocation();
    const { itemPedido } = state;
    const { user } = state;

    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    return(
        <div className='listaDetalhesPedido'>
            <div className='quadroDetalhesPedido'>
                <div className='quadroPedidoLinha'>
                    <div className='numeroPedido'> Pedido n° {itemPedido.ID_PEDIDO} </div>
                    <div className={
                      'statusPedidos ' +
                      (itemPedido.STATUS === 1 ? 'novo'
                        : itemPedido.STATUS === 2 ? 'aceito'
                        : itemPedido.STATUS === 3 ? 'preparo'
                        : itemPedido.STATUS === 4 ? 'transporte'
                        : itemPedido.STATUS === 5 ? 'finalizados'
                        : itemPedido.STATUS === 6 ? 'cancelado'
                        : '')
                    }>
                        {itemPedido.STATUS === 1 ? 'Novo'
                          : itemPedido.STATUS === 2 ? 'Aceito'
                          : itemPedido.STATUS === 3 ? 'Em Preparo'
                          : itemPedido.STATUS === 4 ? 'Em Transporte'
                          : itemPedido.STATUS === 5 ? ' Finalizado'
                          : itemPedido.STATUS === 6 ? 'Cancelado'
                          : ''
                        }
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
                    {Array.isArray(dadosCompraPedido)? (
                        dadosCompraPedido.map((item)=>
                        <div className='pedidoItemCard'>
                            <div className='itemCardLinha'>
                                <div className='itemPedidoQTD'> {item.QTDE_COM} </div>
                                <div className='itemPedidoDesc'> {item.DESCRICAO} </div>
                                <div className='itemValor'> {formCurrency.format(item.TOTAL)} </div>
                            </div>
                            <div className='itemCardLinha textOpcional'>
                                <div className='itemCardIcone'></div>
                                <div className='itemCardOpcoes'>
                                    {item.SABORES !== null ? (
                                        <div className='itemSabores'> {item.SABORES !== null ? (item.SABORES.toLowerCase()) : null} </div>
                                    ) : null}
                                    <div className='itemOpcionais'>
                                        <div className='nomeOpcional'> {item.OPCOES !== null ? (item.OPCOES.toLowerCase()) : null} </div>
                                    </div>
                                    <div className='itemObservacoes'> {item.OBSERVACOES} </div>
                                </div>
                            </div>
                        </div>
                    )
                    ) : null}
                </div>
            </div>
            <div className='quadroDetalhesPedido'>
                <div className='barraTotalPedido'>
                    <div> Total Pedido </div>
                    <div> {formCurrency.format(itemPedido.TOTAL)} </div>
                </div>
            </div>
        </div>
    )
}