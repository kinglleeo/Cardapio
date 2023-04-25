import {useDispatch, useSelector} from 'react-redux'
import Decimal from 'decimal.js';
import { incrementQuantity } from '../../redux/cartSlice';
import { decrementQuantity } from '../../redux/cartSlice';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import './cart.css'
import './cartpagbar.css'

export function TotalItem({ itemquantity, itemid, itemvalor }){
  const dispatch = useDispatch()

    const TotalItem=()=>{
      let valoritem = itemvalor
      const totalitem = new Decimal(valoritem)*(itemquantity)
      return totalitem.toFixed(2)
    }

  return(
    <div className='bloco-bt-quan'>
        <div className='bloco-bt-quan-1'>
          <button className='btn-quant' onClick={() =>dispatch(decrementQuantity(itemid))}> - </button>
              <div className='quanti-quant'>{itemquantity}</div>
          <button className='btn-quant' onClick={() => dispatch(incrementQuantity(itemid))}> + </button>
        </div>
        <div className='bloco-total'>
            <div>Valor Total</div>
            <div>R$ {TotalItem()}</div>
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
        <div>Total</div>
        <div>R$ {totalCart()}</div>
    </div>
  )
}

