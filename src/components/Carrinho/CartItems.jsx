import { incrementQuantity, decrementQuantity, removeItem} from '../../redux/cartSlice'
import { useDispatch, useSelector } from 'react-redux'
import './cart.css'

export default function CartItem() {
  
  const dispatch = useDispatch()
  const cart = useSelector((state) => state.cart)


  return (
    <div>
      <div>
        {cart.map((item)=>
          <div key={item.key}>
            <div>{item.nome}</div>
            <div>{item.descricao}</div>
            <div>{item.valor}</div>
            <div>
              <button onClick={() => dispatch(decrementQuantity(item.id))}> - </button>
                <div>{item.quantity}</div>
              <button onClick={() => dispatch(incrementQuantity(item.id))}> + </button>  
            </div>  
            <button onClick={()=> dispatch(removeItem(item.id))}> Remover </button>
          </div>
        )}
      </div>      
    </div>
  )
}

