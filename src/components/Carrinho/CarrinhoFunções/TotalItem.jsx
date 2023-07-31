import { useDispatch } from 'react-redux'
import '../../../Styles/StyleCarrinho.css'
import { formCurrency } from '../../AA-utilidades/numeros';
import { incrementQuantity, decrementQuantity } from '../../../redux/cartSlice';
import Decimal from 'decimal.js';

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



