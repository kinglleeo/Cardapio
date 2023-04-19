import CartItem from './CartItems'
import Header from '../header/Header'
import { TotalCart } from './total'
import { useState } from 'react'

export default function Cart(){
    const [valorTotal, setValorTotal] = useState([]);

return(
 
      <div>
        <div>
          <Header/>
        </div>
        <div>
          <CartItem 
              setValorTotal={setValorTotal}        
          />
        </div>
          <TotalCart
            valorTotal={valorTotal}
          />
      </div>
             
  )
}

