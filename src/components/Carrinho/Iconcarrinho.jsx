
import { React } from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux';
import './iconcarrinho.css'



export default function iconcarrinho(){
    const cart = useSelector((state) => state.cart)


    const getTotalQuantity = () => {
        let total = 0
        cart.forEach(item => {
          total += item.quantity
        })
        return total
      }

    return(
        <div className='carrinho'>
            <div className='caixa-carrinho'>
                <Link to='/Carrinho'>
                   
                </Link>
                <div>
                    {getTotalQuantity() || 0}
                </div>
            </div>
        </div>
    )
}