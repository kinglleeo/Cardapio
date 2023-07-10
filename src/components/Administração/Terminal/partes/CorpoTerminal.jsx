import React, { useState, useEffect } from 'react';
import './corpoterminal.css';
import { api } from '../../../../conecções/api';
import { formCurrency } from '../../../AA-utilidades/numeros';
import { useNavigate } from 'react-router-dom';

export default function Terminal({ nomeEmpresa }) {
    const [listaPedidos, setListaPedidos] = useState([]);
    const [filtroNovos, setFiltroNovos] = useState(true);
    const [filtroProducao, setFiltroProducao] = useState(true);
    const [filtroRejeitados, setFiltroRejeitados] = useState(false);
    const [filtroConcluidos, setFiltroConcluidos] = useState(false);
    const navigate = useNavigate();
  
    useEffect(()=>{
        api
            .get('/listaPedidos')
            .then((getdata)=>{
                setListaPedidos(getdata.data);
            })
    }, [])

   

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  const formatDate = (dateObj) => {
    const seconds = dateObj.seconds;
    const milliseconds = seconds * 1000;
    const date = new Date(milliseconds);

    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();

    return `${day}/${month}/${year}`;
  };

  const selecionarPedido = (itemPedido) => {
    navigate('/DetalhesPedido', { state: { itemPedido } });
  };

    const filteredPedidos = listaPedidos.filter((itemPedido) => {
        if (filtroNovos && itemPedido.ULTIMO_STATUS_PEDIDO === 'PENDENTE') {
            return true;
        }
        if (filtroProducao && itemPedido.ULTIMO_STATUS_PEDIDO === 'PEDIDO INICIADO') {
            return true;
        }
        if (filtroRejeitados && itemPedido.ULTIMO_STATUS_PEDIDO === 'PEDIDO CANCELADO') {
            return true;
        }
        if (filtroConcluidos && itemPedido.ULTIMO_STATUS_PEDIDO === 'PEDIDO CONFIRMADO') {
            return true;
        }
        return false;
    });
            
  return (
    <>
      <div className='ListaPedidos'>
        <div className='TituloLista'>
          <div className='TituloLista-nome'>{capitalizeFirstLetter(nomeEmpresa.NOME_FANTASIA.toLowerCase())}</div>
          <div className='TituloLista-numero'>{filteredPedidos.length}</div>
        </div>
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
          <div className='atalhoTerminalNome'>Produção</div>
          <div>
            <label className='containerCheckTerminal'>
              <input type='checkbox' checked={filtroProducao} onChange={() => setFiltroProducao(!filtroProducao)} />
              <div className='checkmark'></div>
            </label>
          </div>
        </div>
        <div className='caixaAtalhoTerminal'>
          <div className='atalhoTerminalNome'>Rejeitados</div>
          <div className='caixaCheckBoxTerminal'>
            <label className='containerCheckTerminal'>
              <input type='checkbox' checked={filtroRejeitados} onChange={() => setFiltroRejeitados(!filtroRejeitados)} />
              <div className='checkmark'></div>
            </label>
          </div>
        </div>
        <div className='caixaAtalhoTerminal'>
          <div className='atalhoTerminalNome'>Concluidos</div>
          <div>
            <label className='containerCheckTerminal'>
              <input type='checkbox' checked={filtroConcluidos} onChange={() => setFiltroConcluidos(!filtroConcluidos)} />
              <div className='checkmark'></div>
            </label>
          </div>
        </div>
      </div>
        <div>
          {Array.isArray(filteredPedidos) ? (
            filteredPedidos.map((itemPedido) => (
              <div className='listaPedido-card' key={itemPedido.ID} onClick={() => selecionarPedido(itemPedido)}>
                <div className='pedidoCard-linha'>
                  <div className='linhaEsquerda'>{itemPedido.TIPOCOMANDA} n° {itemPedido.NUMEROCOMANDA}</div>
                  <div className='linhaDireita'>{itemPedido.HORA.split(':').slice(0, 2).join(':')}</div>
                </div>
                <div className='pedidoCard-linha linhaBaixo'>
                  <div className='linhaEsquerda'>{formCurrency.format(itemPedido.VNF_W16)}</div>
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
            ))
          ) : null}
        </div>
      </div>
    </>
  );
}
