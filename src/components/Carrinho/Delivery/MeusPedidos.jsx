import { React, useState, useEffect } from 'react'
import './meuspedidos.css'
import TopoHeaderBar from '../../header/TopoHeaderBar'
import CorpoPedidosDelivery from './partes/CorpoPedidosDelivery'
import Footer from '../../Footer/Footer'

export default function MeusPedidos(){
    

    return(
        <div className='MainPedidosDelivery'>
            <div className='CorpoPedidosDelivery'>
                <div>
                    <TopoHeaderBar/>
                </div>
                <div className='corpoPedidosDelivery'>
                    <CorpoPedidosDelivery/>
                </div>
            </div>
            <div>
                <Footer/>
            </div>
        </div>
    )
}
