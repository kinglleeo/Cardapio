import { incrementQuantity, decrementQuantity, removeItem} from '../../redux/cartSlice'
import { useDispatch, useSelector } from 'react-redux'
import './cart.css'
import { TotalItem } from './total'

export default function CartItem() {
  const dispatch = useDispatch()
  const cart = useSelector((state) => state.cart)
  
  
  return (
    <div className='cart-item-main'>
      <div className='cart-item-body'>
        <div className='cart-bloco-1'>
          {cart.map((item)=>
          <div className='cart-bloco-caixa-1'>
            <div className='cart-caixa-1' key={item.key}> 
                <div className='cart-caixa-item-1'>{item.nome}</div>
                <div className='cart-caixa-item-2'>{item.descricao}</div>
            </div>
            <div className='cart-caixa-2'>
              <TotalItem
                itemquantity={item.quantity}
                itemid={item.id}
                itemvalor={item.valor}
              />
            </div>
            <div className='btn-remove'>
              <button onClick={()=> dispatch(removeItem(item.id))}> Remover </button>
            </div> 
          </div>
          )}
        </div>
      </div>     
    </div>
  )
}

