import { React, useState, useEffect } from 'react'
import { auth } from '../../../Usuarios/LoginPage/Firebase/firebaseConfig';
import '../meuspedidos.css'

export default function CorpoPedidosDelivery(){
    const [user, setUser] = useState('');
    const [listaPedidos, setListaPedidos] = useState([]);
    const [filtroNovos, setFiltroNovos] = useState(true);
    const [filtroAceitos, setFiltroAceitos] = useState(false);
    const [filtroPreparo, setFiltroPreparo] = useState(false);
    const [filtroTransporte, setFiltroTransporte] = useState(false);
    const [filtroFinalizados, setFiltroFinalizados] = useState(false);
    const [filtroCancelado, setFiltroCancelado] = useState(false);
    
    auth.onAuthStateChanged((user) => {
        if (user) {
          setUser(user)
        } else {
            alert('Usuario nao encontrado')
        }
    });

    const filteredPedidos = listaPedidos.filter((itemPedido) => {
        if (filtroNovos && itemPedido.STATUS === 1) {
            return true;
        }
        if (filtroAceitos && itemPedido.STATUS === 2) {
            return true;
        }
        if (filtroPreparo && itemPedido.STATUS === 3) {
            return true;
        }
        if (filtroTransporte && itemPedido.STATUS === 4) {
            return true;
        }
        if (filtroFinalizados && itemPedido.STATUS === 5) {
          return true;
        }
        if (filtroCancelado && itemPedido.STATUS === 6) {
          return true;
        }
        return false;
    });

    const selecionarPedido = (itemPedido, user) => {
        navigate('/DetalhesPedidoDelivery', { state: { itemPedido, user } });
      };

    return(
        <div>
            <div className='caixaUser'>
                <div className='userName'> Leonardo </div>
            </div>
            
        <div className='ListaPedidos'>
            <div className='barraAtalhoTerminal'>
                <div className='caixaAtalhoTerminal'>
                    <div className='atalhoTerminalNome'>Novos</div>
                    <div>
                        <label className='containerCheckTerminal'>
                            <input type='checkbox' checked={filtroNovos} onChange={() => setFiltroNovos(!filtroNovos)} />
                            <div className='checkmark'></div>
                        </label>
                    </div>
                </div>
                <div className='caixaAtalhoTerminal'>
                    <div className='atalhoTerminalNome'>Aceitos</div>
                    <div>
                    <label className='containerCheckTerminal'>
                        <input type='checkbox' checked={filtroAceitos} onChange={() => setFiltroAceitos(!filtroAceitos)} />
                        <div className='checkmark'></div>
                    </label>
                    </div>
                </div>
                <div className='caixaAtalhoTerminal'>
                    <div className='atalhoTerminalNome'>Cancelados</div>
                    <div>
                        <label className='containerCheckTerminal'>
                        <input type='checkbox' checked={filtroCancelado} onChange={() => setFiltroCancelado(!filtroCancelado)} />
                        <div className='checkmark'></div>
                        </label>
                    </div>
                </div>
                <div className='caixaAtalhoTerminal'>
                  <div className='atalhoTerminalNome'>Em Preparo</div>
                  <div className='caixaCheckBoxTerminal'>
                    <label className='containerCheckTerminal'>
                      <input type='checkbox' checked={filtroPreparo} onChange={() => setFiltroPreparo(!filtroPreparo)} />
                      <div className='checkmark'></div>
                    </label>
                  </div>
                </div>
                <div className='caixaAtalhoTerminal'>
                    <div className='atalhoTerminalNome'>Em Transporte</div>
                    <div>
                        <label className='containerCheckTerminal'>
                            <input type='checkbox' checked={filtroTransporte} onChange={() => setFiltroTransporte(!filtroTransporte)} />
                            <div className='checkmark'></div>
                        </label>
                    </div>
                    </div>
                <div className='caixaAtalhoTerminal'>
                    <div className='atalhoTerminalNome'>Finalizados</div>
                    <div>
                        <label className='containerCheckTerminal'>
                            <input type='checkbox' checked={filtroFinalizados} onChange={() => setFiltroFinalizados(!filtroFinalizados)} />
                            <div className='checkmark'></div>
                        </label>
                    </div>
                </div>
        </div>
            <div>
            {Array.isArray(filteredPedidos) ? (
                filteredPedidos.map((itemPedido) => (
                    <div className='listaPedido-card' onClick={() => selecionarPedido(itemPedido, user)}>
                        <div className='pedidoCard-linha'>
                            <div className='linhaEsquerda'>{itemPedido.TIPOCOMANDA} n° {itemPedido.NUMEROCOMANDA}</div>
                            <div className='linhaDireita'>{itemPedido.HORA.split(':').slice(0, 2).join(':')}</div>
                        </div>
                        <div className='pedidoCard-linha linhaBaixo'>
                            <div className='linhaEsquerda'>{formCurrency.format(itemPedido.TOTAL)}</div>
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
            ))
            ) : null}
            </div>
        </div>
        </div>
    )
}