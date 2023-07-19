import { useState, useEffect } from 'react'
import TopoHeaderBar from '../../header/TopoHeaderBar'
import BarraCarrinhoAtalho from '../BarraCarrinhoAtalho'
import Footer from '../../Footer/Footer'
import PedidosCorpo from './PedidosCorpo'
import './pedidoscorpo.css'

export default function PedidoCartaoMesa(){
    const [numeroPedido, setNumeroPedido] = useState('');
    
    useEffect(()=>{
        const numeroPedido = localStorage.getItem('numeroPedido')
            setNumeroPedido(numeroPedido)
    }, [])

    return(
        <div className='pagina'>
            <div>
                <TopoHeaderBar/>
            </div>
            <div className='Main'>
                <div className='margin'>
                    <PedidosCorpo  numeroPedido={numeroPedido}/>
                </div>
                <div>
                    <BarraCarrinhoAtalho/>
                </div>
            </div>
        <div>
          <Footer/>
        </div>
      </div>
    )
}