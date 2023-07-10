import { React, useState, useEffect } from 'react'
import TopoHeaderBar from '../../../../../header/TopoHeaderBar'
import Footer from '../../../../../Footer/Footer'
import './pedidos.css'
import PedidosCorpo from './Pagina/PedidosCorpo'

export default function Pedidos(){


    return(
        <div className='MainPedidos'>
            <div className='CorpoPedidos'>
                <div>
                    <TopoHeaderBar/>
                </div>
                <div className='corpoPedidos'>
                    <PedidosCorpo/>
                </div>
            </div>
            <div>
                <Footer/>
            </div>
        </div>
    )
}