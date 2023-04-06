import { TiShoppingCart } from 'react-icons/ti'
import { React } from 'react'
import { Link } from 'react-router-dom'
import './iconcarrinho.css'

export default function iconcarrinho(){

    return(
        <div className='carrinho'>
            <div className='caixa-carrinho'>
                <Link to='/Carrinho'>
                    <TiShoppingCart/>
                </Link>
            </div>
        </div>
    )
}