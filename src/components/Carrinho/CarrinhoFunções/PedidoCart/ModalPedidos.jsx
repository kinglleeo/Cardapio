import { useState } from 'react'
import './modalpedidos.css'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react';
import axios from 'axios';
import { api } from '../../../../conecções/api';
import ModalError from '../../../erros/ModalError'

export default function modal({ setIsOpen, tipoComanda }){
    const [numeroPedido, setNumeroPedido] = useState('');
    const [dadosPedidos, setDadosCompraPedido] = useState('');
    const [modalError, setModalError] = useState(false);
    const [error, setError] = useState('');
    const navigate = useNavigate()
    
    useEffect(()=>{
        const numeroPedido = localStorage.getItem('numeroPedido')
            setNumeroPedido(numeroPedido)
        if(numeroPedido > 0){
            axios
                .get(`http://192.168.0.100:9865/listaItensPedidos/${numeroPedido}`)
                .then((getdata)=>{
                    setDadosCompraPedido(getdata.data);
                })
                .catch((error) => {
                    setError("Erro no listaItensPedidos")
                    setModalError(true)
                });
        }
    }, [])
    
    const irPedidos=()=>{
       if(tipoComanda === "DELIVERY"){
            navigate('/MeusPedidos')
       } else if (tipoComanda === "MESA" || tipoComanda === "CARTAO"){
            navigate('/PedidosCartaoMesa')
       }
    }
    
    return(
    <>
        <div className='darkBG' onClick={() => setIsOpen(false)} />
            <div className='centered'>
            <div className='modalPedidos'>
            <button className='closeBtn' onClick={() => setIsOpen(false)}> <div className='iconeBtnCloseModal'></div> </button>
            <div className='modalPedidosContent'> 
                {numeroPedido === -100 || numeroPedido === -101 || numeroPedido === -102 || numeroPedido === -103 || numeroPedido === -200 ? (
                    <div>
                        <div className='tituloModalPedidoCart'> 
                            <div className='caixaIconeALerta'><div className='iconeAlerta'></div></div>
                            {numeroPedido === -100 ? ('Cartão Bloqueado!') 
                                : numeroPedido === -101 ? ('Cartão Vencid0!') 
                                : numeroPedido === -102 ? ('Limite Insuficiente!')
                                : numeroPedido === -103 ? ('Saldo Insuficiente!')
                                : numeroPedido === -200 ? ('Cartão Não Encontrado!')
                                : ('Erro Grave')
                            }
                        </div>
                         <button className='btnAlertOk'  onClick={() => setIsOpen(false)}> Fechar </button>
                    </div>
                ) : numeroPedido > 1 ? (
                    <div>
                        <div className='tituloModalPedidoCart'> Pedido Realizado! </div>
                        <div className='textoPedidoCartModal'> Gostaria de Acompanhar seus Pedidos? </div>
                        <button className='btnFecharModalPedidoCart'  onClick={() => setIsOpen(false)}> Continuar Comprando </button>
                        <button className='btnPedidoModalCArt' onClick={irPedidos} > Acompanhar Pedidos </button>
                    </div>
                ) : ("erro")}  
            </div>
            </div>
            {modalError && <ModalError setModalError={setModalError} error={error} />}
        </div>
    </>
  );
};