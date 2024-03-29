import React, { useState, useEffect } from 'react';
import '../../../../Styles/StyleTerminal.css';
import { api } from '../../../../conecções/api';
import { formCurrency } from '../../../AA-utilidades/numeros';
import { useNavigate } from 'react-router-dom';
import { capitalizeFirstLetter } from '../../../AA-utilidades/primeiraMaiuscula';
import ModalError from '../../../erros/ModalError'
import axios from 'axios';

export default function Terminal({ nomeEmpresa, adm }) {
    const [listaPedidos, setListaPedidos] = useState([]);
    const [filtroNovos, setFiltroNovos] = useState(true);
    const [filtroPreparo, setFiltroPreparo] = useState(false);
    const [filtroTransporte, setFiltroTransporte] = useState(false);
    const [filtroFinalizados, setFiltroFinalizados] = useState(false);
    const [filtroCancelado, setFiltroCancelado] = useState(false);
    const [dados, setDados] = useState([]);
    const [modalError, setModalError] = useState(false);
    const [error, setError] = useState('');
    const tipoComanda = dados.tipoComanda;
    const navigate = useNavigate();
    
  
    useEffect(()=>{
      const dados = localStorage.getItem('dados')
      setDados(JSON.parse(dados))
  }, [])

    useEffect(()=>{
      api
            .get('/listaPedidos')
            .then((getdata)=>{
                setListaPedidos(getdata.data);
            })
            .catch((error) => {
              setError("Erro na Lista de Pedidos no Terminal")
              setModalError(true)
            });
    }, [])
    

  const selecionarPedido = (itemPedido) => {
    navigate('/DetalhesPedido', { state: { itemPedido } });
  };

    const filteredPedidos = listaPedidos.filter((itemPedido) => {
        if (filtroNovos && itemPedido.STATUS === 1) {
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

    filteredPedidos.sort((a, b) => b.id - a.id);
    
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
              <div key={itemPedido.ID} className='listaPedido-card' onClick={() => selecionarPedido(itemPedido)}>
                <div className='pedidoCard-linha'>
                  <div className='linhaEsquerda'>{itemPedido.TIPOCOMANDA} n° {itemPedido.NUMEROCOMANDA}</div>
                  <div className='linhaDireita'>{itemPedido.HORA.split(':').slice(0, 2).join(':')}</div>
                </div>
                <div className='pedidoCard-linha'>
                    <div className='linhaEsquerda'> N° Pedido </div>
                    <div className='linhaDireita'> {itemPedido.ID} </div>
                </div>
                <div className='pedidoCard-linha linhaBaixo'>
                  <div className='linhaEsquerda'>{formCurrency.format(itemPedido.TOTAL)}</div>
                  <div className={
                      'statusPedidos ' +
                      (itemPedido.STATUS === 1 ? 'novo'
                        : itemPedido.STATUS === 3 ? 'preparo'
                        : itemPedido.STATUS === 4 ? 'transporte'
                        : itemPedido.STATUS === 5 ? 'finalizados'
                        : itemPedido.STATUS === 6 ? 'cancelado'
                        : '')
                    }>
                        {itemPedido.STATUS === 1 ? 'Novo'
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
          {modalError && <ModalError setModalError={setModalError} error={error} />}
      </div>
    </>
  );
}
