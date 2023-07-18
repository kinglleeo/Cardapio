import { React, useState, useEffect } from 'react'
import './detalhesdopedido.css'
import axios from 'axios';
import { formCurrency } from '../../../../AA-utilidades/numeros';
import { capitalizeFirstLetter } from '../../../../AA-utilidades/primeiraMaiuscula';

export default function DetalhesDoPedido({ itemPedido }){
    const [dadosCompraPedido, setDadosCompraPedido] = useState([]);
    const [dados, setDados] = useState([]);
    const [adm, setAdm] = useState('');
    const [gestao, setGestao] = useState('');
    const tipoComanda = itemPedido.TIPOCOMANDA;
    
    useEffect(()=>{
        if (tipoComanda === "DELIVERY" && itemPedido.STATUS === 6){
            axios
                .get(`http://192.168.0.100:9865/listaItensCancelados/${itemPedido.ID}`)
                .then((getdata)=>{
                    setDadosCompraPedido(getdata.data);
                })  
        } else {
            axios
                .get(`http://192.168.0.100:9865/listaItensPedidos/${itemPedido.ID}`)
                .then((getdata)=>{
                    setDadosCompraPedido(getdata.data);
                })
        }
    }, [tipoComanda, itemPedido])

    useEffect(()=>{
        const dados = localStorage.getItem('dados')
            setDados(JSON.parse(dados))
        const adm = localStorage.getItem('administrador')
            setAdm(adm);
        axios
            .get('http://192.168.0.100:9865/parametros')
            .then((getdata)=>{
                setGestao(getdata.data.map((data)=> data.PEDIDOS_APP_USARGESTAO));
            })
    }, [])

    const mudarStatus=(novoStatus)=>{
        axios
            .post(`http://192.168.0.100:9865/alterarStatusPedido`, {
                id_pedido_app: itemPedido.ID,
                id_pedido: itemPedido.ID_PEDIDO,
                id_usuario: adm,
                status: novoStatus,
                tipo_comanda: tipoComanda
        })
            .then((response)=>{
                if(response.data === -400){
                    alert('Caixa Fechado')
                }
                else if (response.data === 200){
                    alert('Status alterado')
                }
            })
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
            <div className='caixaBtnsPedidos'>
                    {itemPedido.STATUS === 1 ?(
                        <button className='btnCancelarPedido' onClick={() => mudarStatus(6)}> Cancelar Pedido </button>
                    ) : null}
                    {itemPedido.TIPOCOMANDA === "DELIVERY" ? (
                        itemPedido.STATUS === 1 ? (
                            <button className='btnAceitarPedido' onClick={() => mudarStatus(3)}> Aceitar Pedido </button>
                        ) : 
                        itemPedido.STATUS === 3 ? (
                            <button className='btnAceitarPedido' onClick={() => mudarStatus(4)}> Em Transporte </button>
                        ) : 
                        itemPedido.STATUS === 4 ? (
                            <button className='btnAceitarPedido' onClick={() => mudarStatus(5)}> Finalizar Pedido </button>
                        ) : null
                    ) : (
                        gestao === "NAO" ? (
                            <button className='btnAceitarPedido' onClick={() => mudarStatus(5)}> Finalizar Pedido </button>
                        ) : (
                            itemPedido.STATUS === 1 ? (
                                <button className='btnAceitarPedido' onClick={() => mudarStatus(3)}> Aceitar Pedido </button>
                            ) : 
                            itemPedido.STATUS === 3 ? (
                                <button className='btnAceitarPedido' onClick={() => mudarStatus(5)}> Finalizar Pedido </button>
                            ) : null
                        )
                    )}
            </div>
        </div>
    )
}