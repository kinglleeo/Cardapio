import { React, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux';
import '../../Styles/StylesCart.css'
import { formCurrency } from '../AA-utilidades/numeros';

export default function iconcarrinho(){
    const cart = useSelector((state) => state.cart)
    const [totalCart, setTotalCart] = useState('');

    const getTotalQuantity = () => {
        let total = 0
        cart.forEach(item => {
          total += item.quantity
        })
        return total
      }
    useEffect(()=>{
        const newtotalCart = sessionStorage.getItem('totalCart');
        setTotalCart(newtotalCart)
    })

    return(
        <div className='carrinho'>
            <div className='caixa-carrinho'>
                    <div className='quantidade-cart'>
                        <div className='totalQuantidade-cart'>
                            {getTotalQuantity() || 0} X
                        </div>
                        <div className='totalQuantidade-cart-svg'>
                            {getTotalQuantity() > 0 ?(
                                <div className='img-cartCheio'></div>
                            ) : (
                                <div className='img-cartVazio'></div>
                            )}                            
                        </div>
                    </div>
                    <div className='text-cart'>
                        <Link to='/carrinho' style={{ color: 'inherit', textDecoration: 'inherit'}}>
                            <div> MEU CARRINHO </div>
                        </Link>
                    </div>
                    <div className='quantidade-cart'>
                        <div>{formCurrency.format(totalCart)}</div>
                    </div>
            </div>
        </div>
    )
}