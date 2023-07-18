import React, { useEffect, useState } from 'react';
import '../../../Styles/StyleCarrinho.css';
import { useSelector, useDispatch } from 'react-redux';
import { formCurrency } from '../../AA-utilidades/numeros';
import Decimal from 'decimal.js';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { auth } from '../../Usuarios/LoginPage/Firebase/firebaseConfig'
import { onAuthStateChanged } from 'firebase/auth'
import { api } from '../../../conecções/api';
import ModalPedidos from './ModalPedidos'
import EnderecoCart from './EnderecoCart'
import FormasDePagamento from './FormasDePagamento';

export function CarrinhoBarPagamento({ Pedido, opçaoEscolhidaGarcom, numeroComandaGarcom, mesaSelecionada, observacoesCart, setTipoComanda, tipoComanda }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [compra, setCompra] = useState([]);
  const [totalCart, setTotalCart] = useState('');
  const [idGarcom, setIdGarcom] = useState(null)
  const [user, setUser] = useState('');
  const [desativarConfirmar, setDesativarConfirmar] = useState(false)
  const [dados, setDados] = useState([]);
  const [numeroPedido, setNumeroPedido] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [enderecoSelecionado, setEnderecoSelecionado] = useState('');
  const [pagamentoSelecionado, setPagamentoSelecionado] = useState('');
  const [login, setLogin] = useState('');
  const [adm, setAdm] = useState('');
  const numeroComanda = dados.numeroComanda
  const cart = useSelector(state => state.cart)
  const items_pedido = compra
  console.log(numeroComandaGarcom)
  console.log(tipoComanda)
  console.log(enderecoSelecionado)
  console.log(pagamentoSelecionado)
  console.log(user)
  useEffect(()=>{
    const dados = localStorage.getItem('dados')
         setDados(JSON.parse(dados))
    const idGarcom = localStorage.getItem('idgarcom');
      setIdGarcom(idGarcom)
    const login = localStorage.getItem('login')
      setLogin(login);
    const adm = localStorage.getItem('administrador')
      setAdm(adm) 
      auth.onAuthStateChanged((user) => {
        setUser(user)
      });
 }, [setDados])
  
  useEffect(()=>{
    setTipoComanda(dados.tipoComanda)
  }, [dados])

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
    if (tipoComanda === "DELIVERY"){
      if(user !== null && enderecoSelecionado !== "" && pagamentoSelecionado !== "" && cart !== ""){
        setDesativarConfirmar(false)
      } else {
        setDesativarConfirmar(true)
      }
    } 
    else if (idGarcom !== null){
      if(opçaoEscolhidaGarcom === "CARTAO" && mesaSelecionada !== ""){
        setDesativarConfirmar(false)
      } else if (opçaoEscolhidaGarcom === "MESA" && numeroComandaGarcom !== ""){
        setDesativarConfirmar(false)
      } else {
        setDesativarConfirmar(true)
      }
    }
    else if (tipoComanda === "CARTAO"){
      if(mesaSelecionada !== "" && cart !== ""){
        setDesativarConfirmar(false)
      } else {
        setDesativarConfirmar(true)
      }
    }
    else if (tipoComanda === "MESA"){
      if(cart !== ""){
        setDesativarConfirmar(false)
      } else {
        setDesativarConfirmar(true)
      }
    }
  })


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
            id_opcional: item.ID,
            descricao: item.DESCRICAO,
            valor_venda: item.VALOR_VENDA,
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
    //dispatch(clearCart());
  };
  const EnviarPedidoAPI =()=>{
      axios
        .post(`http://192.168.0.100:9865/inserirPedido`, {
          pagamento: pagamentoSelecionado !== "" ? pagamentoSelecionado.ID : "balcão",
          id_endereco: enderecoSelecionado !== "" ? enderecoSelecionado.ID : "",
          id_garcom: idGarcom !==null ? idGarcom : "",
          id_cliente: enderecoSelecionado !== "" ? enderecoSelecionado.ID_PESSOAS : "",
          numero_comanda: numeroComanda !== null ? numeroComanda : numeroComandaGarcom !== null ? numeroComandaGarcom : "",
          tipo_comanda: tipoComanda !== null ? tipoComanda : opçaoEscolhidaGarcom,
          localizacao: tipoComanda === "CARTAO" || opçaoEscolhidaGarcom === "CARTAO" ? mesaSelecionada : numeroComanda !== null ? numeroComanda : "",
          total: totalCart,
          observacoes_pedido: tipoComanda === "DELIVERY" ? observacoesCart : "",
          items_pedido: items_pedido, 
        })
        .then((response)=>{
          setNumeroPedido(response.data)
          setIsOpen(true)
        })
        .catch((error)=>{
          console.log(error)
        })
    }

  const handleCotinuar = () => {
    navigate('/Main');
  };
  const handleLogar =()=>{
    navigate('/Login')
  }
  const terminal=()=>{
    if(adm !== null){
      navigate('/Terminal')
    } else {
      navigate('/LoginAdm')
    }
  }
 
  return (
    <div>
      {idGarcom === null && user === null ? (<div className='FazerLogin' onClick={handleLogar}> FAZER LOGIN </div>) : null}
      {idGarcom !== null || login === "TERMINAL" ? (<div className='FazerLogin' onClick={terminal}> Terminal </div>) : null}
      {isOpen && <ModalPedidos setIsOpen={setIsOpen} numeroPedido={numeroPedido} />}
      {user !== null ?(
        <>
        {tipoComanda === "DELIVERY" ? (
          <div>
            <EnderecoCart user={user} enderecoSelecionado={enderecoSelecionado} setEnderecoSelecionado={setEnderecoSelecionado}/>
          </div>
        ) :null}
        {tipoComanda === "DELIVERY" ? (
          <div>
            <FormasDePagamento
              setPagamentoSelecionado={setPagamentoSelecionado}
            />
          </div>
        ):null}
      </>
      ) : null}
      <div className='caixaBarPagar'>
        <button className='cartBarPagar' onClick={()=> handlePagar()} disabled={desativarConfirmar === true}> 
          <div className='PagarTexto'> CONFIRMAR </div>
          <div className='pagarValor'> {formCurrency.format(totalCart)} </div>
        </button>
      </div>
        <div className='cartBarContinuar' onClick={handleCotinuar}> CONTINUAR COMPRANDO </div>
      </div>
  );
}