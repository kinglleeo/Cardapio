import React, { useEffect, useState } from 'react';
import { TotalCart } from './total';
import '../../Styles/StylesCart.css';
import { useNavigate } from 'react-router-dom';
import { collection, addDoc, serverTimestamp, doc  } from "firebase/firestore";
import { db, auth } from '../Usuarios/LoginPage/Firebase/firebaseConfig'
import { useDispatch } from 'react-redux';
import { clearCart } from '../../redux/cartSlice'
import { api } from '../../conecções/api';
import axios from 'axios';
 

export function CartPagBar({ Pedido }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [compra, setCompra] = useState([]);
  const [totalCart, setTotalCart] = useState('');
  
  useEffect(() => {
    Pedido.forEach((item) => {
      const itemExistente = compra.find((compraItem) => compraItem.id === item.id);
      if (!itemExistente) {
        let items_pedido = {
          id: item.id,
          cod_produto: '',
          cod_grade: '',
          cod_tamanho: '',
          quantidade: item.quantity,
          observacao: item.observacoes,
          opcional: item.adicionalSelecionados
        };
  
        if (Pedido.tipo === 'NÃO') {
          items_pedido = {
            ...items_pedido,
            cod_produto: item.produto.ID_PRODUTO,
            cod_grade: item.tamanhoEscolhido.ID_GRADE,
            cod_tamanho: item.tamanhoEscolhido.ID,
          };
        } else if (Pedido.tipo === 'SIM') {
          items_pedido = {
            ...items_pedido,
            cod_produto: item.produto.ID,
            cod_grade: item.SaboresSelecionados.ID_GRADE,
            cod_tamanho: '',
          };
        }
  
        setCompra((prevCompra) => [...prevCompra, items_pedido]);
      }
    });
  }, [Pedido, setCompra]);
  
  const PedidoFinalizado = {
    cnpj: '',
    mesa: '2',
    pagamento: 'balcão',
    total: totalCart,
    items_pedido:compra
  }

  

  const handlePagar = (Pedido, PedidoFinalizado) => {
    EnviarPedidoAPI(PedidoFinalizado)
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

  const EnviarPedidoAPI =(PedidoFinalizado)=>{
    const pedidoString = JSON.stringify(PedidoFinalizado);
    api
    .post(`/inserirPedido/${pedidoString}`)
    .then(response => {
      console.log('Pedido finalizado enviado com sucesso!');
      // Faça algo com a resposta, se necessário
    })
  .catch(error => {
    console.error('Erro ao enviar o pedido finalizado:', error);
  });
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
        <TotalCart 
          setTotalCart={setTotalCart}
          totalCart={totalCart}
        />
      </div>
      <div className='card-btn-pagar'>
        <button className='btn-pagar' onClick={()=> handlePagar(Pedido, PedidoFinalizado)}> Finalizar </button>
      </div>       
    </div>
  );
}