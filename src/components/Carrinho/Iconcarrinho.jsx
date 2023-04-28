import { ImCart } from 'react-icons/im'
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
                    <ImCart size={35} color='rgba(31, 215, 232, 0.873)'/>
                </Link>
                <div>
                    {getTotalQuantity() || 0}
                </div>
            </div>
        </div>
    )
}