import { React, useState, useEffect } from 'react'
import './detalhesdopedido.css'


export default function DetalhesDoPedido({ itemPedido }){
    
    const aceitarPedido=()=>{

    }

    const cancelarPedido=()=>{
        
    }

    return(
        <div className='listaDetalhesPedido'>
            <div>

            </div>
            <div>

            </div>
            <div>

            </div>
            <div className='caixaBtnsPedidos'>
                <button className='btnAceitarPedido' onClick={() => aceitarPedido()}> Aceitar Pedido </button>
                <button className='btnCancelarPedido' onClick={() => cancelarPedido()}> Cancelar Pedido </button>
            </div>
        </div>
    )
}