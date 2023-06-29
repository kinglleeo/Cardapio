import React, { useEffect, useState } from 'react';
import '../../../Styles/StyleCarrinho.css';
import { useSelector, useDispatch } from 'react-redux';
import { formCurrency } from '../../AA-utilidades/numeros';
import Decimal from 'decimal.js';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { collection, addDoc, serverTimestamp, doc  } from "firebase/firestore";
import { db, auth } from '../../Usuarios/LoginPage/Firebase/firebaseConfig'

export function CarrinhoBarPagamento({ Pedido, observacoesCart, tipo, setTipo, mesaSelecionada }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [compra, setCompra] = useState([]);
  const [totalCart, setTotalCart] = useState('');
  const [numerocomanda, setNumeroComanda] = useState('');
  const [cnpj, setCpj] = useState('');
  const [mesaEntrega, setMesaEntrega] = useState('')
  const [idGarcom, setIdGarcom] = useState(null)
  const cart = useSelector(state => state.cart)
  const items_pedido = compra

  useEffect(()=>{
      let total = new Decimal(0) || 0
      cart.forEach(item => {
        total = total.plus(new Decimal(item.quantity || 0).times(item.totalCompra || 0)) 
      })
      setTotalCart(total.toFixed(2))
  }); 

  useEffect(()=>{
    const tipo = sessionStorage.getItem('tipo');
      setTipo(tipo)
    const numerocomanda = sessionStorage.getItem('numerocomanda');
      setNumeroComanda(numerocomanda)
    const cnpj = sessionStorage.getItem('cnpj');
      setCpj(cnpj)
    const idGarcom = sessionStorage.getItem('idGarcom');
      setIdGarcom(idGarcom)
  })

  useEffect(()=>{
    if(tipo === "comanda"){
      setMesaEntrega(mesaSelecionada)
    } else if(tipo === "mesa"){
      setMesaEntrega(numerocomanda)
    }
  })

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
    //EnviarPedidoAPI(totalCart, compra)
    //BancodePedidos(Pedido)
    //dispatch(clearCart());
    //navigate('/Main');
  };
  
  const BancodePedidos=()=>{
    const saveBd = async () => {
      try {
        const user = auth.currentUser;
        if (!user) {
            console.error("Usuario não Autenticado");
          return;
        }
  
        const userDocRef = doc(db, "usuarios", user.uid); 
        const orderCollectionRef = collection(userDocRef, "pedidos"); 
        const newOrderDocRef = await addDoc(orderCollectionRef, {
          date: serverTimestamp(),
          items: Pedido
        });

      } catch (error) {
        console.error("Error saving order: ", error);
      }
    };
    saveBd();
  }
  

  const EnviarPedidoAPI =(totalCart, items_pedido)=>{
    axios
      .post(`http://192.168.0.100:9865/inserirPedido`, {
        cnpj: cnpj,
        tipocomanda: tipo,
        numerocomanda: numerocomanda,
        idgarcom: idGarcom,
        total: totalCart,
        pagamento: 'balcão',
        localizacao: mesaSelecionada,
        items_pedido: items_pedido, 
        observacoespedido: observacoesCart
      })
      .then((response)=>{
          console.log(response)
          alert('Pedido Feito')
      })
  }
  
  const handleCotinuar = () => {
    navigate('/Main');
  };

  const handleLogar =()=>{
    navigate('/Login')
  }

  return (
    <div>
      <div className='cartBarPagar'> 
        <div className='PagarTexto' onClick={()=> handlePagar(totalCart, items_pedido, Pedido)}> CONFIRMAR </div>
        <div className='pagarValor'> {formCurrency.format(totalCart)} </div>
      </div>
      <div className='cartBarContinuar' onClick={handleCotinuar}> CONTINUAR COMPRANDO </div>
      <div className='FazerLogin' onClick={handleLogar}> FAZER LOGIN </div>
    </div>
  );
}