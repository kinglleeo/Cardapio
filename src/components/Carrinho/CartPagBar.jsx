import React, { useEffect, useState } from 'react';
import { TotalCart } from './total';
import '../../Styles/StylesCart.css';
import { useNavigate } from 'react-router-dom';
import { collection, addDoc, serverTimestamp, doc  } from "firebase/firestore";
import { db, auth } from '../Usuarios/LoginPage/Firebase/firebaseConfig'
import { useDispatch } from 'react-redux';
import { clearCart } from '../../redux/cartSlice'
import axios from 'axios';
 

export function CartPagBar({ Pedido }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [compra, setCompra] = useState([]);
  const [totalCart, setTotalCart] = useState('');

  useEffect(() => {
    const updatedCompra = Pedido.map((item) => {
      const itemExistente = compra.find((compraItem) => compraItem.id === item.id);
      if (!itemExistente) {
        let novoItemPedido = {
          id: item.id,
          id_produto: "",
          id_grade: "",
          id_tamanho: "",
          id_unidade: "",
          valor_custo: item.custoTotal,
          valor_venda: "",
          pizza_mista: item.tipo,
          quantidade: item.quantity,
          observacao: item.observacoes,
          opcional: item.adicionalSelecionado,
          sabores: []
        };
        if (item.tipo === "NAO") {
          novoItemPedido = {
            ...novoItemPedido,
            id_unidade: item.produto.ID_UNIDADE,
            id_produto: item.produto.ID_PRODUTO,
            valor_venda: item.totalCompra,
            id_grade: item.tamanhoEscolhido.ID_GRADE ? item.tamanhoEscolhido.ID_GRADE : "",
            id_tamanho: item.tamanhoEscolhido.ID ? item.tamanhoEscolhido.ID : "",
          };
        } else if (item.tipo === "SIM") {
          novoItemPedido = {
            ...novoItemPedido,
            id_produto: item.produto.ID_PRODUTO,
            id_unidade: item.produto.ID_UNIDADE,
            valor_venda: item.totalCompra,
            sabores: item.SaboresSelecionados.map((sabor) => ({
              sabor: sabor.PRODUTO,
              id_grade: sabor.ID_GRADE,
              valor_venda: sabor.VALOR_VENDA,
              quantidade: sabor.quantidade
            }))
          };
        }
        return novoItemPedido;
      } else {
        return {
          ...itemExistente,
          quantidade: item.quantity
        };
      }
    });
  
    setCompra(updatedCompra);
  }, [Pedido, setCompra]);


  const handlePagar = (totalCart, compra, Pedido) => {
    EnviarPedidoAPI(totalCart, compra)
    //BancodePedidos(Pedido)
  };
  
  const BancodePedidos=()=>{
    const saveBd = async () => {
      try {
        const user = auth.currentUser;
        if (!user) {
            console.error("Usuario não Autenticado");
          return;
        }
  
        const userDocRef = doc(db, "usuario"); 
        const orderCollectionRef = collection(userDocRef, "pedidos"); 
        const newOrderDocRef = await addDoc(orderCollectionRef, {
          date: serverTimestamp(),
          items: Pedido
        });


        //dispatch(clearCart());
        //navigate('/');
      } catch (error) {
        console.error("Error saving order: ", error);
      }
    };
    saveBd();
  }

  const items_pedido = compra

  const EnviarPedidoAPI =(totalCart, items_pedido)=>{
    const pedidoString = JSON.stringify();
    axios
      .post(`http://192.168.0.100:9865/inserirPedido`, {
        cnpj: '',
        mesa: '2',
        total: totalCart,
        pagamento: 'balcão',
        items_pedido: items_pedido, 
      })
      .then((response)=>{
          console.log(response)
          alert('Pedido Feito')
      })
  }

  const handleCotinuar = () => {
    navigate('/Main');
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
        <button className='btn-pagar' onClick={()=> handlePagar(totalCart, items_pedido, Pedido)}> Finalizar </button>
      </div>       
    </div>
  );
}