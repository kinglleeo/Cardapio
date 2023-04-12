import { TiShoppingCart } from 'react-icons/ti'
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
                    <TiShoppingCart/>
                    <p>{getTotalQuantity() || 0}</p>
                </Link>
            </div>
        </div>
    )
}