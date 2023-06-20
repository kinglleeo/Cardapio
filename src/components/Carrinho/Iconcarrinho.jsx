import { React } from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux';
import '../../Styles/StylesCart.css'

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
                    <div className='quantidade-cart'>
                        <div className='totalQuantidade-cart'>
                            {getTotalQuantity() || 0} X
                        </div>
                        <div className='totalQuantidade-cart-svg'>
                            {getTotalQuantity > 0 ?(
                                <div className='img-cartCheio'></div>
                            ) : (
                                <div className='img-cartVazio'></div>
                            )}                            
                        </div>
                    </div>
                    <div className='text-cart'>
                        <div> VER MEU CARRINHO </div>
                    </div>
                    <div className='quantidade-cart'>
                        <div>R$ 0,00</div>
                    </div>
            </div>
        </div>
    )
}