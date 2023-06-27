import { useDispatch, useSelector } from 'react-redux'
import { TotalItem } from './total';
import { clearCart, removeItem} from '../../redux/cartSlice';
import '../../Styles/StylesCart.css'
import { CartPagBar } from './CartPagBar';
import { useEffect } from 'react';
import { useState } from 'react';
import { formCurrency } from '../AA-utilidades/numeros';

export default function CartItem({ setPedido }) {
  const dispatch = useDispatch()
  const cart = useSelector((state) => state.cart)
  const [totalCart, setTotalCart] = useState('')

  useEffect(()=>{
    setPedido(cart)
  }, [])

  useEffect(()=>{
    const totalCart = sessionStorage.getItem('totalCart');
      setTotalCart(totalCart)
  }, [])

  return (
    <div className='MainCartList'>
      <div className='CartList'>
        <div className='cartTitulo'> 
          <div className='iconeCarrinhoCart'></div>
          <div className='carrinhoName'> Carrinho </div>
        </div>
        <div className='cartListItems'>
          {cart.map((item)=>
            <div className='card-cart' key={item.idCart}>
              <div className='cartBox-iconeLixeira'>
                <div className='lixeira' onClick={()=> dispatch(removeItem(item.id))}></div>
              </div>
                <div className='boxDescricao-nome'> {item.tipo === "NAO" ? (<div> {item.produto.PRODUTO.toLowerCase()} </div>) : (<div> Pizza {item.produto.TAMANHO.toLowerCase()} </div>) } </div>
              <div className='cartBox-valor'>
                <TotalItem
                  itemquantity={item.quantity}
                  itemid={item.id}
                  itemvalor={item.totalCompra}
                />
              </div>
            </div>
          )}
        </div>
          <div className='barraTotalCartList'>
            <div className='cartBox-iconeLixeira'>
              <div className='lixeira' onClick={()=> dispatch(clearCart())}></div>
            </div>
            <div className='totalCartList'>
              <div> TOTAL {formCurrency.format(totalCart)} </div>
            </div>
          </div>
      </div>
    </div>
  )
}

