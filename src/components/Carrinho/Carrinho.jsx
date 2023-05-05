import CartItem from './CartItems'
import Header from '../header/Header'
import { useState } from 'react'
import { CartPagBar } from './CartPagBar';

export default function Cart(){

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

