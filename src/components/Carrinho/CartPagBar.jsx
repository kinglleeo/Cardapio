import React, { useState } from 'react';
import { TotalCart } from './total';
import '../../Styles/StylesCart.css';
import { useNavigate } from 'react-router-dom';
import { collection, addDoc, serverTimestamp, doc  } from "firebase/firestore";
import { db, auth } from '../Usuarios/LoginPage/Firebase/firebaseConfig'

export function CartPagBar({ Pedido }) {
  const navigate = useNavigate();

  const handleCotinuar = () => {
    navigate('/');
  };

  const handlePagar = (Pedido) => {
    const saveBd = async () => {
      try {
        const user = auth.currentUser;
        if (!user) {
          console.error("User is not authenticated.");
          return;
        }
  
        const userDocRef = doc(db, "usuario", user.uid); // Referência ao documento do usuário
        const orderCollectionRef = collection(userDocRef, "pedidos"); // Referência à coleção de pedidos dentro do documento do usuário
  
        const newOrderDocRef = await addDoc(orderCollectionRef, {
          date: serverTimestamp(),
          items: Pedido 
        });
        
        // navigate('/Pagamentos');
      } catch (error) {
        console.error("Error saving order: ", error);
      }
    };
  
    saveBd();
  };
  
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
        <button className='btn-pagar' onClick={()=> handlePagar(Pedido)}> Finalizar </button>
      </div>       
    </div>
  );
}