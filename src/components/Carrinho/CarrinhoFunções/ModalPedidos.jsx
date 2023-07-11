import './modalpedidos.css'
import { useNavigate } from 'react-router-dom'

export default function modal({ setIsOpen, numeroPedido }){
    const navigate = useNavigate()


    const irPedidos=()=>{
       navigate('/Pedidos', { state: { numeroPedido } })
    }

    return(
    <>
        <div className='darkBG' onClick={() => setIsOpen(false)} />
            <div className='centered'>
            <div className='modalPedidos'>
            <button className='closeBtn' onClick={() => setIsOpen(false)}> <div className='iconeBtnCloseModal'></div> </button>
                <div className='modalPedidosContent'> 
                    <div> Pedidos Feito </div>
                    <div> Gostaria de Acompanhar seus Pedidos? </div>
                    <button onClick={() => setIsOpen(false)}> Fechar </button>
                    <button onClick={irPedidos}> Acompanhar Pedidos </button>
                </div>
            </div>
        </div>
    </>
  );
};