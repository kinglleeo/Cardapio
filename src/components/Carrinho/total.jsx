import {useDispatch, useSelector} from 'react-redux'
import Decimal from 'decimal.js';
import { formCurrency } from '../AA-utilidades/numeros';
import { incrementQuantity, decrementQuantity } from '../../redux/cartSlice';
import './cartpagbar.css'
import './Styles-cart/styleTotalCartItem.css'

export function TotalItem({ itemquantity, itemid, itemvalor }){
  const dispatch = useDispatch()

    const TotalItem=()=>{
      let valoritem = itemvalor || 0 
        const totalitem = new Decimal(valoritem)*(itemquantity) || 0 
      return totalitem.toFixed(2)
    }

  return(
    <div className='cart-item-valor-total'>
      <div className='cart-total-valor'>
          <div>Valor:</div>
          <div>{formCurrency.format(TotalItem())}</div>
      </div>
      <div className='cart-quantia'>Quantia:</div>
      <div className='box-itemquantia'>
        <div className='cart-btn-quantia'>
          <button className='arrow left' onClick={() => dispatch(decrementQuantity(itemid))}/>
        </div>
        <div className='cart-item-quantia'>{itemquantity}</div>
        <div className='cart-btn-quantia'>
          <button className='arrow right' onClick={() => dispatch(incrementQuantity(itemid))}/>
        </div>
      </div>
  </div>
  )
}

export function TotalCart() {
  const cart = useSelector(state => state.cart)
  
  const totalCart = () => {
    let total = new Decimal(0) || 0
    cart.forEach(item => {
      total = total.plus(new Decimal(item.quantity || 0).times(item.valor || 0)) 
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

