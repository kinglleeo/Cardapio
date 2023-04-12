import Total from './total'
import CartItem from './CartItems'
import Header from '../header/Header'

export default function Cart(){

return(
 
      <div>
        <div>
          <Header/>
        </div>
        <div>
          <CartItem />
        </div>
        <div>
          <Total/>
        </div>
      </div>
             
  )
}

