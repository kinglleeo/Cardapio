import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import '../../../Styles/StyleCarrinho.css'
import { clearCart, removeItem} from '../../../redux/cartSlice';
import { formCurrency } from '../../AA-utilidades/numeros';
import Decimal from 'decimal.js';
import { TotalItem } from './TotalItem';

export default function CartItem({ setPedido }) {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const [totalCart, setTotalCart] = useState('');

  useEffect(()=>{
    setPedido(cart)
  }, [])

  useEffect(()=>{
    let total = new Decimal(0) || 0
    cart.forEach(item => {
      total = total.plus(new Decimal(item.quantity || 0).times(item.totalCompra || 0)) 
    })
    setTotalCart(total.toFixed(2))
}); 

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

