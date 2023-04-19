import {useDispatch, useSelector} from 'react-redux'
import Decimal from 'decimal.js';
import { incrementQuantity } from '../../redux/cartSlice';
import { decrementQuantity } from '../../redux/cartSlice';

export function TotalItem({ itemquantity, itemid, itemvalor}){
  const dispatch = useDispatch()

const TotalItem=()=>{
  let totalItem = itemvalor
  const total = new Decimal(totalItem)*(itemquantity)
  return total.toFixed(2)
}

  return(
    <div>
      <div>
        <button onClick={() =>dispatch(decrementQuantity(itemid))}> - </button>
          <div>{itemquantity}</div>
        <button onClick={() => dispatch(incrementQuantity(itemid))}> + </button>
      </div>
      <div>
        {TotalItem()}
      </div>
    </div>
  )
}

export function TotalCart({ TotalItem }){
 
  const TotalCart=()=>{
    let totalCart= 0
    const total = new Decimal(totalCart).plus(TotalItem)
    return total.toFixed(2);
  }

  return(
    <div>
      <div>
        $ {TotalCart()}
      </div>
    </div>
  )
}