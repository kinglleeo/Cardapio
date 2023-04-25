import { incrementQuantity, decrementQuantity, removeItem} from '../../redux/cartSlice'
import { useDispatch, useSelector } from 'react-redux'
import './cart.css'
import { TotalItem } from './total'

export default function CartItem() {
  const dispatch = useDispatch()
  const cart = useSelector((state) => state.cart)
  
  
  return (
    <div className='cart-main'>
      <div className='cart-items'>
        {cart.map((item)=>
          <div key={item.key} className='bloco-cart'>
            <div className='cart-bloco-1'>
              <div className='cart-nome'>{item.nome}</div>
              <div className='cart-descricao'> {item.descricao} </div>
            </div>
            <div className='cart-bloco-2'>
              <TotalItem
                itemquantity={item.quantity}
                itemid={item.id}
                itemvalor={item.valor}
              />
            </div>
              <div className='cart-bloco-3'>
                <button onClick={()=> dispatch(removeItem(item.id))}> Remover </button>
              </div>
          </div>
        )}
      </div>      
    </div>
  )
}

