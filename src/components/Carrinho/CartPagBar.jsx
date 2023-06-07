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
  console.log(Pedido)

  useEffect(() => {
    Pedido.forEach((item) => {
      const itemExistente = compra.find((compraItem) => compraItem.id === item.id);
      if (!itemExistente) {
        let novoItemPedido = {
          id: item.id,
          cod_produto: "",
          cod_grade: "",
          cod_tamanho: "",
          quantidade: item.quantity,
          observacao: item.observacoes,
          opcional: item.adicionalSelecionado ? [
            {
              Id: item.adicionalSelecionado.ID,
              valorVenda: item.adicionalSelecionado.VALOR_VENDA,
              quantidade: item.adicionalSelecionado.quantidade 
            }
          ] : "",
          PIZZA_MISTA: item.tipo,
          Sabores: ""
        };
        if (item.tipo === "NAO") {
          novoItemPedido = {
            ...novoItemPedido,
            cod_produto: item.produto.ID_PRODUTO,
            cod_grade: item.tamanhoEscolhido.ID_GRADE,
            cod_tamanho: item.tamanhoEscolhido.ID
          };
        } else if (item.tipo === "SIM") {
          novoItemPedido = {
            ...novoItemPedido,
            Sabores: item.SaboresSelecionados.map(sabor => ({
              cod_Grade: sabor.ID_GRADE,
              valorVenda: sabor.VALOR_VENDA,
              quantidade: sabor.quantidade
            }))            
          };
        }
          setCompra((prevCompra) => [...prevCompra, novoItemPedido]);
      }
    });
  }, [Pedido, setCompra, Pedido.tipo]);
    
  const PedidoFinalizado = {
    cnpj: '',
    mesa: '2',
    pagamento: 'balcão',
    total: totalCart,
    items_pedido: compra
  }
  console.log(PedidoFinalizado)

  const handlePagar = (Pedido, PedidoFinalizado) => {
    //EnviarPedidoAPI(PedidoFinalizado)
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
    axios
      .post(`http://192.168.0.100:9865/inserirPedido`, {PedidoFinalizado}) 
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