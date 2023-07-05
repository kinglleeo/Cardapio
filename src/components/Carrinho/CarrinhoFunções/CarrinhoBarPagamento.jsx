import React, { useEffect, useState } from 'react';
import '../../../Styles/StyleCarrinho.css';
import { useSelector, useDispatch } from 'react-redux';
import { formCurrency } from '../../AA-utilidades/numeros';
import Decimal from 'decimal.js';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { collection, addDoc, serverTimestamp, doc  } from "firebase/firestore";
import { db, auth } from '../../Usuarios/LoginPage/Firebase/firebaseConfig'
import { onAuthStateChanged } from 'firebase/auth'

export function CarrinhoBarPagamento({ Pedido, observacoesCart, tipocomanda, setTipo, mesaSelecionada }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [compra, setCompra] = useState([]);
  const [totalCart, setTotalCart] = useState('');
  const [numerocomanda, setNumeroComanda] = useState('');
  const [cnpj, setCpj] = useState('');
  const [idGarcom, setIdGarcom] = useState(null)
  const [delivery, setDelivery] = useState('')
  const [user, setUser] = useState('')
  const [desativarConfirmar, setDesativarConfirmar] = useState(false)
  const cart = useSelector(state => state.cart)
  const items_pedido = compra

  useEffect(() => {
    if (cart && Array.isArray(cart)) {
      let total = new Decimal(0) || 0;
      cart.forEach(item => {
        total = total.plus(new Decimal(item.quantity || 0).times(item.totalCompra || 0));
      });
      setTotalCart(total.toFixed(2));
    }
  }, [cart]);

  useEffect(()=>{
    const tipocomanda = localStorage.getItem('tipo');
      setTipo(tipocomanda)
    const numerocomanda = localStorage.getItem('numerocomanda');
      setNumeroComanda(numerocomanda)
    const cnpj = localStorage.getItem('cnpj');
      setCpj(cnpj)
    const idGarcom = sessionStorage.getItem('idgarcom');
      setIdGarcom(idGarcom)
  }, [])


  useEffect(()=>{
    const delivery = localStorage.getItem('delivery')
      setDelivery(delivery)
    const usuario = onAuthStateChanged(auth, (user)=>{
        setUser(user)
    })
  })
  useEffect(() => {
    if (delivery === 'sim' && user !== null) {
      setDesativarConfirmar(false);
    } else if (delivery === 'sim' && user === null) {
      setDesativarConfirmar(true);
    } else if (delivery === 'nao') {
      setDesativarConfirmar(false);
    } else if (cart.length === 0) {
      setDesativarConfirmar(true);
    }
  }, [delivery, user, cart]);


  useEffect(() => {
    if (Pedido && Array.isArray(Pedido)) {
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
          opcional: item.adicionalSelecionado.map((item)=>({
            idopcional: item.ID,
            descricao: item.DESCRICAO,
            valorvenda: item.VALOR_VENDA,
            quantidade: item.quantidade,
            dividir: item.DIVIDIR 
          })),
          sabores: []
        };
        if (item.tipo === "NAO") {
          novoItemPedido = {
            ...novoItemPedido,
            id_unidade: item.produto.ID_UNIDADE,
            id_produto: item.produto.ID_PRODUTO,
            valor_venda: item.totalCompra,
            id_grade: item.tamanhoEscolhido !== null ? item.tamanhoEscolhido.ID_GRADE : "",
            id_tamanho: item.tamanhoEscolhido !== null ? item.tamanhoEscolhido.ID : "",
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
      }
       else {
        return {
          ...itemExistente,
          quantidade: item.quantity
        };
      }
    });
      setCompra(updatedCompra);
    }
  }, [Pedido, setCompra]);
  

  const handlePagar = () => {
    EnviarPedidoAPI()
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
  

  const EnviarPedidoAPI =()=>{
    axios
      .post(`http://192.168.0.100:9865/inserirPedido`, {
        cnpj: cnpj,
        delivery: delivery,
        tipocomanda: tipocomanda,
        numerocomanda: numerocomanda,
        idgarcom: idGarcom,
        total: totalCart,
        observacoespedido: observacoesCart,
        pagamento: 'balcão',
        localizacao: mesaSelecionada,
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

  const handleLogar =()=>{
    navigate('/Login')
  }

  return (
    <div>
      <div className='caixaBarPagar'>
        <button className='cartBarPagar' onClick={()=> handlePagar()} disabled={desativarConfirmar === true}> 
          <div className='PagarTexto'> CONFIRMAR </div>
          <div className='pagarValor'> {formCurrency.format(totalCart)} </div>
        </button>
      </div>
      <div className='cartBarContinuar' onClick={handleCotinuar}> CONTINUAR COMPRANDO </div>
      {idGarcom === null ? (<div className='FazerLogin' onClick={handleLogar}> FAZER LOGIN </div>) : null}
    </div>
  );
}