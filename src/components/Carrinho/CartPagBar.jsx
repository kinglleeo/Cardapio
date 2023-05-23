import { React, useState } from 'react'
import { TotalCart } from './total';
import '../../Styles/StylesCart.css'
import { useNavigate } from 'react-router-dom'
import './cartpagbar.css'

export function CartPagBar(){
    const [showModal, setShowModal] = useState(false);
    const navigate = useNavigate()

    
    const handleShowModal = () => {
        setShowModal(true);
      };
      
      const handleCloseModal = () => {
        setShowModal(false);
      };
    
    const handleCotinuar=()=>{
        navigate('/')
    }
    const handlePagar = () => {
        handleShowModal();
      };
   
    return( 
        <div>
            <div className='card-btn-continuar'>
                <button className='btn-continuar' onClick={handleCotinuar}>Continuar Comprando</button>
            </div>
            <div className='card-total-pagar'>
                <TotalCart/>
            </div>
            <div className='card-btn-pagar'>
                <button className='btn-pagar' > Finalizar </button>
            </div>
            <div>
            </div>
        </div>
    )
}