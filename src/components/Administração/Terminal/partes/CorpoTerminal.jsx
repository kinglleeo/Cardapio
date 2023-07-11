import React, { useState, useEffect } from 'react';
import './corpoterminal.css';
import { api } from '../../../../conecções/api';
import { formCurrency } from '../../../AA-utilidades/numeros';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function Terminal({ nomeEmpresa, adm }) {
    const [listaPedidos, setListaPedidos] = useState([]);
    const [filtroNovos, setFiltroNovos] = useState(true);
    const [filtroAceitos, setFiltroAceitos] = useState(false);
    const [filtroPreparo, setFiltroPreparo] = useState(false);
    const [filtroTransporte, setFiltroTransporte] = useState(false);
    const [filtroFinalizados, setFiltroFinalizados] = useState(false);
    const [filtroCancelado, setFiltroCancelado] = useState(false);
    const [terminal, setTerminal] = useState([]);
    const [dados, setDados] = useState([]);
    const delivery = dados.delivery
    const navigate = useNavigate();

    useEffect(()=>{
      const dados = localStorage.getItem('dados')
      setDados(JSON.parse(dados))
  }, [])

    useEffect(()=>{
        axios
            .get('http://192.168.0.100:9865/listaPedidos')
            .then((getdata)=>{
                setListaPedidos(getdata.data);
            })
    }, [])
    useEffect(()=>{
      axios
          .get('http://192.168.0.100:9865/parametros')
          .then((getdata)=>{
            setTerminal(getdata.data);
          })
    }, [])

    function capitalizeFirstLetter(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
  }

  const selecionarPedido = (itemPedido, adm, terminal) => {
    navigate('/DetalhesPedido', { state: { itemPedido, adm, terminal } });
  };

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
          {terminal.map((item) =>
            item.PEDIDOS_APP_USARGESTAO === "SIM" ?(
              <>
                <div className='caixaAtalhoTerminal'>
                  <div className='atalhoTerminalNome'>Em Preparo</div>
                  <div className='caixaCheckBoxTerminal'>
                    <label className='containerCheckTerminal'>
                      <input type='checkbox' checked={filtroPreparo} onChange={() => setFiltroPreparo(!filtroPreparo)} />
                      <div className='checkmark'></div>
                    </label>
                  </div>
                </div>
                {delivery === "SIM" ? (
                  <div className='caixaAtalhoTerminal'>
                    <div className='atalhoTerminalNome'>Em Transporte</div>
                    <div>
                      <label className='containerCheckTerminal'>
                        <input type='checkbox' checked={filtroTransporte} onChange={() => setFiltroTransporte(!filtroTransporte)} />
                        <div className='checkmark'></div>
                      </label>
                    </div>
                  </div>
                ) : null}
                <div className='caixaAtalhoTerminal'>
                  <div className='atalhoTerminalNome'>Finalizados</div>
                  <div>
                    <label className='containerCheckTerminal'>
                      <input type='checkbox' checked={filtroFinalizados} onChange={() => setFiltroFinalizados(!filtroFinalizados)} />
                      <div className='checkmark'></div>
                    </label>
                  </div>
                </div>
              </>
            ) : null )}
      </div>
        <div>
          {Array.isArray(filteredPedidos) ? (
            filteredPedidos.map((itemPedido) => (
              <div className='listaPedido-card' onClick={() => selecionarPedido(itemPedido, adm, terminal)}>
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
    </>
  );
}
