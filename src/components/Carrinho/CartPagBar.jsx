import React, { useState } from 'react';
import { TotalCart } from './total';
import '../../Styles/StylesCart.css';
import { useNavigate } from 'react-router-dom';

export function CartPagBar() {
  const navigate = useNavigate();

  const handleCotinuar = () => {
    navigate('/');
  };
  const handlePagar=()=>{
    navigate('/Pagamentos');
  }

  return (
    <div>
      <div className='card-btn-continuar'>
        <button className='btn-continuar' onClick={handleCotinuar}>
          Continuar Comprando
        </button>
      </div>
      <div className='card-total-pagar'>
        <TotalCart />
      </div>
      <div className='card-btn-pagar'>
        <button className='btn-pagar' onClick={handlePagar}> Finalizar </button>
      </div>       
    </div>
  );
}