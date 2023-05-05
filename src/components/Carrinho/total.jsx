import {useDispatch, useSelector} from 'react-redux'
import Decimal from 'decimal.js';
import { incrementQuantity } from '../../redux/cartSlice';
import { decrementQuantity } from '../../redux/cartSlice';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import './cart.css'
import './cartpagbar.css'
import { formCurrency } from '../AA-utilidades/numeros';

export function TotalItem({ itemquantity, itemid, itemvalor }){
  const dispatch = useDispatch()

    const TotalItem=()=>{
      let valoritem = itemvalor
      const totalitem = new Decimal(valoritem)*(itemquantity)
      return totalitem.toFixed(2)
    }

  return(
    <div className='cart-item-valor'>
      <div className='cart-valor-valor'>
          <div>Valor:</div>
          <div>{formCurrency.format(TotalItem())}</div>
      </div>
      <div className='cart-quantia'>Quantia:</div>
      <div className='cart-caixa-valores'>
        <div className='cart-val1'>
          <button className='arrow left' onClick={() => dispatch(decrementQuantity(itemid))}/>
        </div>
        <div className='cart-q'>{itemquantity}</div>
        <div className='cart-val2'>
          <button className='arrow right' onClick={() => dispatch(incrementQuantity(itemid))}/>
        </div>
      </div>
  </div>
  )
}

export function TotalCart() {
  const cart = useSelector(state => state.cart)
  
  const totalCart = () => {
    let total = new Decimal(0)
    cart.forEach(item => {
      total = total.plus(new Decimal(item.quantity).times(item.valor))
    })
    return total.toFixed(2)
  }
  
  return (
    <div className='totalcart'>
        <div>Total:</div>
        <div>{formCurrency.format(totalCart())}</div>
    </div>
  )
}

