import { React } from 'react'
import '../../../../Styles/StyleTerminal.css'
import { useLocation } from 'react-router-dom';
import DetalhesDoPedido from './DetalhesdoPedido/DetalhesDoPedido'
import TopoHeaderBar from '../../../header/TopoHeaderBar'
import Footer from '../../../Footer/Footer'

export default function MainDetalhesPedido(){
    const { state } = useLocation();
    const { itemPedido } = state;

    return(
        <div className='MainTerminal'>
            <div className='CorpoTerminal'>
                <div>
                    <TopoHeaderBar/>
                </div>
                <div>
                    <DetalhesDoPedido
                        itemPedido={itemPedido}
                    />
                </div>
            </div>
            <div>
                <Footer/>
            </div>
        </div>
    )
}