import React, { useEffect, useState } from 'react';
import { TotalCart } from './total';
import '../../Styles/StylesCart.css';
import { useNavigate } from 'react-router-dom';
import { collection, addDoc, serverTimestamp, doc  } from "firebase/firestore";
import { db, auth } from '../Usuarios/LoginPage/Firebase/firebaseConfig'
import { useDispatch } from 'react-redux';
import { clearCart } from '../../redux/cartSlice'
 

export function CartPagBar({ Pedido }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [ compra, setCompra ] = useState('')

  console.log(Pedido)
  const sabores={
    cod_produto: saborselecionado.ID,
    quantidade: saborselecionado.quantidade,
    valor: saborselecionado.VALOR_VENDA
  }

  const opcionais={
    cod_opcional: adicionalSelecionado.ID,
    quantidade: adicionalSelecionado.quantidade,
    valor: adicionalSelecionado.VALOR_VENDA
  }
  const items_pedido={
    cod_produto: Pedido.produto.ID_PRODUTO,
    cod_grade: Pedido.tamanhoEscolhido.ID_GRADE,
    cod_tamanho: Pedido.tamanhoEscolhido.TAMANHO,
    quantidade: Pedido.quantity,
    observacao: observacoes,
    opcionais: opcionais
  }

  const handlePagar = (Pedido) => {

    BancodePedidos(Pedido)
  };
  
  const BancodePedidos=()=>{
    const saveBd = async () => {
      try {
        const user = auth.currentUser;
        if (!user) {
          console.error("User is not authenticated.");
          return;
        }
  
        const userDocRef = doc(db, "usuario", user.uid); 
        const orderCollectionRef = collection(userDocRef, "pedidos"); 
  
        const newOrderDocRef = await addDoc(orderCollectionRef, {
          date: serverTimestamp(),
          items: Pedido 
        });
        dispatch(clearCart());
        navigate('/');
      } catch (error) {
        console.error("Error saving order: ", error);
      }
    };
    saveBd();
  }

  const handleCotinuar = () => {
    navigate('/');
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