import CartItem from './CartItems'
import Header from '../header/Header'
import { TotalCart } from './total'
import { useState } from 'react'
import { CartPagBar } from './CartPagBar';

export default function Cart(){
    const [valorTotal, setValorTotal] = useState([]);

return(
 
      <div>
        <div>
          <Header/>
        </div>
        <div>
          <CartItem/>
        </div>
        <div>
          <CartPagBar/>
        </div>
      </div>
             
  )
}

