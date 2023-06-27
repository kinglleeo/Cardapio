import {useDispatch, useSelector} from 'react-redux'
import Decimal from 'decimal.js';
import { formCurrency } from '../AA-utilidades/numeros';
import { incrementQuantity, decrementQuantity } from '../../redux/cartSlice';
import '../../Styles/StylesCart.css'
import { useEffect, useState } from 'react';

export function TotalItem({ itemquantity, itemid, itemvalor }){
  const dispatch = useDispatch()

    const TotalItem=()=>{
      let valoritem = itemvalor || 0 
        const totalitem = new Decimal(valoritem)*(itemquantity) || 0 
      return totalitem.toFixed(2)
    }

  return(
    <div className='CartBox-valor'>
      <div className='cartTotal-valor'>
        <div>{formCurrency.format(TotalItem())}</div>
      </div>
      <div className='boxFuncao-cart'>
        <div className='cart-btn-quantia'>
          <button className='arrow cartMinus' onClick={() => dispatch(decrementQuantity(itemid))}/>
        </div>
          <div className='cart-item-quantia'>{itemquantity}</div>
        <div className='cart-btn-quantia'>
          <button className='arrow cartPlus' onClick={() => dispatch(incrementQuantity(itemid))}/>
        </div>
      </div>
    </div>
  )
}

export function TotalCart({ setTotalCart, totalCart }) {
  const cart = useSelector(state => state.cart)

  useEffect(()=>{
      let total = new Decimal(0) || 0
      cart.forEach(item => {
        total = total.plus(new Decimal(item.quantity || 0).times(item.totalCompra || 0)) 
      })
      setTotalCart(total.toFixed(2))
  }); 
  
  
  return (
    <div className='totalcart'>
        <div>Total</div>
        <div>{formCurrency.format(totalCart)}</div>
    </div>
  )
}

