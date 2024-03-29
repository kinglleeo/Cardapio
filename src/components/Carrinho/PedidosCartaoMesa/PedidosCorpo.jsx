import { React, useState, useEffect } from 'react'
import { api } from '../../../conecções/api';
import './pedidoscorpo.css'
import { formCurrency } from '../../AA-utilidades/numeros';
import Decimal from 'decimal.js';
import ModalError from '../../erros/ModalError'

export default function PedidosCorpo(){
    const [dados, setDados] = useState([]);
    const [dadosCompraPedido, setDadosCompraPedido] = useState([]);
    const [totalPedido, setTotalPedido] = useState(0);
    const [modalError, setModalError] = useState(false);
    const [error, setError] = useState('');
    
    useEffect(()=>{
        const numeroPedido = localStorage.getItem('numeroPedido')
        if(numeroPedido !== ""){
            api
                .get(`/listaItensPedido/${numeroPedido}`)
                .then((getdata)=>{
                    setDadosCompraPedido(getdata.data);
                })
                .catch((error) => {
                    setError(error.message)
                    setModalError(true)
                });
        }
    }, [])
    
    useEffect(() => {
        if (Array.isArray(dadosCompraPedido)) {
          let total = new Decimal(0);
          dadosCompraPedido.forEach(item => {
            total = total.plus(new Decimal(item.TOTAL || 0));
          });
          setTotalPedido(total);
        } 
      }, [dadosCompraPedido]);


    useEffect(()=>{
        const dados = localStorage.getItem('dados')
            setDados(JSON.parse(dados))
    }, [setDados])

    return(
        <div>
            <div className='pedidosClienteCard'>
                <div className='clienteCardTipo'>
                    <div className='cardMargin'> {dados.tipoComanda} </div>
                    <div className='cardMargin'> n° {dados.numeroComanda}  </div>
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
                            <div className='itemCardLinha textOpcional'>
                                <div className='itemCardIcone'></div>
                                <div className='itemCardOpcoes'>
                                    {item.SABORES !== null ? (
                                        <div className='itemSabores'> {item.OPCOES !== null ? (item.OPCOES.toLowerCase()) : null} </div>
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
            <div className='TotalValorPedidos'>
                <div>Total</div>
                <div> {formCurrency.format(totalPedido)}</div>
            </div>
            {modalError && <ModalError setModalError={setModalError} error={error} />}
        </div>
    )
}