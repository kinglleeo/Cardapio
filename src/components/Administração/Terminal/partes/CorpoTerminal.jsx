import { React, useState, useEffect } from 'react'
import './corpoterminal.css'
import { api } from '../../../../conecções/api';
import { formCurrency } from '../../../AA-utilidades/numeros';
import { useNavigate } from 'react-router-dom';

export default function Terminal({ nomeEmpresa }){
    const [listaPedidos, setListaPedidos] = useState('');
    const [modalTerminal, setModalTerminal] = useState(false);
    const [quantidadeLista, setQuantidadeLista] = useState(0)
    const navite = useNavigate()
    
    useEffect(()=>{
        api
            .get('/listaPedidos')
            .then((getdata)=>{
                setListaPedidos(getdata.data);
                setQuantidadeLista(getdata.data.length)
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

    const selecionarPedido=( itemPedido )=>{
        navite('/DetalhesPedido', { state: { itemPedido } })
    }


    return(
    <>
        <div className='ListaPedidos'>
            <div className='TituloLista'>
                <div className='TituloLista-nome'> {capitalizeFirstLetter(nomeEmpresa.NOME_FANTASIA.toLowerCase())}  </div>
                <div className='TituloLista-numero'> {quantidadeLista}</div>
            </div>
            <div>
                {Array.isArray(listaPedidos) ? (
                    listaPedidos.map(itemPedido =>
                        <div className='listaPedido-card' key={itemPedido.ID} onClick={()=> selecionarPedido(itemPedido)}>
                            <div className='pedidoCard-linha'>
                                <div className='linhaEsquerda'> {itemPedido.TIPOCOMANDA} </div>
                                <div className='linhaDireita'> {itemPedido.HORA.split(':').slice(0, 2).join(':')} </div>
                            </div>
                            <div className='pedidoCard-linha linhaBaixo'>
                                <div className='linhaEsquerda'> {formCurrency.format(itemPedido.VNF_W16)} </div>
                                <div
                                    className={
                                        'statusPedidos ' + 
                                    (itemPedido.ULTIMO_STATUS_PEDIDO === 'PEDIDO INICIADO' ? 'iniciado' :
                                    itemPedido.ULTIMO_STATUS_PEDIDO === 'PEDIDO CANCELADO' ? 'cancelado' :
                                    itemPedido.ULTIMO_STATUS_PEDIDO === 'PEDIDO CONFIRMADO' ? 'confirmado' :
                                    itemPedido.ULTIMO_STATUS_PEDIDO === 'PENDENTE' ? 'pendente' : '')
                                    }
                                    > {capitalizeFirstLetter(itemPedido.ULTIMO_STATUS_PEDIDO.toLowerCase())} </div>

                            </div>
                        </div>
                    )    
                ) : null}
            </div>
        </div>

        <div className='barraAtalhoTerminal'>
            <div className='caixaAtalhoTerminal'>
                <div className='atalhoTerminalNome'> Produção </div>
                <div>
                    <label class="containerCheckTerminal">
                        <input type="checkbox"/>
                        <div class="checkmark"></div>
                    </label>
                </div>
            </div>
            <div className='caixaAtalhoTerminal'>
                <div className='atalhoTerminalNome'> Rejeitados </div>
                <div>
                    <label class="containerCheckTerminal">
                        <input type="checkbox"/>
                        <div class="checkmark"></div>
                    </label>
                </div>
            </div>
            <div className='caixaAtalhoTerminal'>
                <div className='atalhoTerminalNome'> Novos </div>
                <div className='caixaCheckBoxTerminal'>
                    <label class="containerCheckTerminal">
                        <input type="checkbox"/>
                        <div class="checkmark"></div>
                    </label>
                </div>
            </div>
            <div className='caixaAtalhoTerminal'>
                <div className='atalhoTerminalNome'> Concluidos </div>
                <div>
                    <label className="containerCheckTerminal">
                        <input type="checkbox"/>
                        <div className="checkmark"></div>
                    </label>
                </div>
            </div>
        </div>    
    </>
    )
}