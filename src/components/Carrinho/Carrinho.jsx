import CartItem from './CartItems'
import Header from '../header/Header'
import { TotalCart } from './total'

export default function Cart(){

return(
 
      <div>
        <div>
          <Header/>
        </div>
        <div>
          <CartItem />
        </div>
          <TotalCart/>
      </div>
             
  )
}

