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
  const [compra, setCompra] = useState([]);
  console.log(Pedido)
  
  useEffect(() => {
    Pedido.forEach((item) => {
      const itemExistente = compra.find((compraItem) => compraItem.id === item.id);
      if (!itemExistente) {
        const novoItemPedido = {
          id: item.id,
          cod_produto: item.produto.ID_PRODUTO,
          cod_grade: item.tamanhoEscolhido.ID_GRADE,
          cod_tamanho: item.tamanhoEscolhido.ID,
          quantidade: item.quantity,
          observacao: item.observacoes,
          opcional: item.adicionalSelecionado,
        };
  
        setCompra((prevCompra) => [...prevCompra, novoItemPedido]);
      }
    });
  }, [Pedido, setCompra]);
  
  
  

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