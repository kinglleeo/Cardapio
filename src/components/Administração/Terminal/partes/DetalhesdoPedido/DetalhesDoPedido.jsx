import { React, useState, useEffect } from 'react'
import '../../../../../Styles/StyleTerminal.css'
import { formCurrency } from '../../../../AA-utilidades/numeros';
import { api } from '../../../../../conecções/api';
import ModalError from '../../../../erros/ModalError'
import axios from 'axios';
import ImpirmirPedidos from '../../../Impressão/ImprimirPedido';
import { useNavigate } from 'react-router-dom';


export default function DetalhesDoPedido({ itemPedido }){
    const [dadosCompraPedido, setDadosCompraPedido] = useState([]);
    const [dados, setDados] = useState([]);
    const [adm, setAdm] = useState('');
    const [gestao, setGestao] = useState('');
    const [modalError, setModalError] = useState(false);
    const [error, setError] = useState('');
    const tipoComanda = itemPedido.TIPOCOMANDA;  
    const navigate = useNavigate()
    
    useEffect(()=>{
        if (tipoComanda === "DELIVERY" && itemPedido.STATUS === 6){
            api
                .get(`/listaItensCancelados/${itemPedido.ID}`)
                .then((getdata)=>{
                    setDadosCompraPedido(getdata.data);
                })  
                .catch((error) => {
                    setError("Erro na listaItensCancelados")
                    setModalError(true)
                });
        } else {
            api
                .get(`/listaItensPedidos/${itemPedido.ID}`)
                .then((getdata)=>{
                    setDadosCompraPedido(getdata.data);
                })
                .catch((error) => {
                    setError("Erro na listaItensPedidos")
                    setModalError(true)
                });
        }
    }, [tipoComanda, itemPedido])

    useEffect(()=>{
        const dados = localStorage.getItem('dados')
            setDados(JSON.parse(dados))
        const adm = localStorage.getItem('administrador')
            setAdm(adm);
            api
                .get('/parametros')
                .then((getdata)=>{
                    setGestao(getdata.data.map((data)=> data.PEDIDOS_APP_USARGESTAO));
                })
            .catch((error) => {
                setError("Erro nos parametros")
                setModalError(true)
            });
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
                else if (response.data === 200) {
                    sendMessageToOneSignal(novoStatus);
                    navigate(-1)
                }
            })
            .catch((error) => {
                setError(error.message)
                setModalError(true)
            });
    } 
    const sendMessageToOneSignal = (novoStatus) => {
        const statusNovo = novoStatus === 3 ? "em preparo" : novoStatus === 4 ? "em transporte" : novoStatus === 5 ? "finalizado" : novoStatus === 6 ? "cancelado" : null
        const notificationData = {
          app_id: '770d044d-d725-43f1-989e-6b3d27e71df5',
          contents: { en: `Pedido N° ${itemPedido.ID_PEDIDO} esta ${statusNovo}` },
          headings: { en: 'Título da notificação' },
          include_player_ids: [itemPedido.TOKEN_NOTIFICACAO],
        };
      
        axios.post('https://onesignal.com/api/v1/notifications', notificationData, {
          headers: {
            'Authorization': 'YjZlMGU2NWEtMTU3Yi00N2I5LTgxZTItNjQ1NzM3ZDM3ZDA5',
            'Content-Type': 'application/json',
          },
        })
        .then(response => {
          console.log('Notificação enviada com sucesso:', response);
        })
        .catch(error => {
          console.error('Erro ao enviar notificação:', error);
        });
      };

    
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
                        <div key={item.DESCRICAO} className='pedidoItemCard'>
                            <div className='itemCardLinha'>
                                <div className='itemPedidoQTD'> {item.QTDE_COM} </div>
                                <div className='itemPedidoDesc'> {item.DESCRICAO} </div>
                                <div className='itemValor'> {formCurrency.format(item.TOTAL)} </div>
                            </div>
                            {item.SABORES !==null || item.OPCOES !== null ? (
                                <div className='itemCardLinha textOpcional'>
                                    <div className='itemCardIcone'>
                                        <div className='iconeItemCardIcone'></div>
                                    </div>
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
                            ) : null}
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
                    ) : <div></div>}
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
            <div className='quadroDetalhesPedido'>
                <div className='barraTotalPedido'>
                    <div className='textoImprimir'>Imprimir</div>
                    <div>
                        <ImpirmirPedidos
                            itemPedido={itemPedido}
                            dadosCompraPedido={dadosCompraPedido}
                        />
                    </div>
                </div>
            </div>
            {modalError && <ModalError setModalError={setModalError} error={error} />}
        </div>
    )
}